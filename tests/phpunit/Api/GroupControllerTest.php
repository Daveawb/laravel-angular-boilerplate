<?php

use App\Resources\Group;
use App\Resources\User;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Http\Response;

class GroupControllerTest extends TestCase
{
    use DatabaseMigrations;
    use DatabaseTransactions;

    /**
     * @var User
     */
    private $user;

    /**
     * @var Group
     */
    private $group;

    /**
     * @var array
     */
    private $structure = ['name', 'level', 'updated_at', 'created_at', 'deleted_at'];

    /**
     * Create a dummy user for each test.
     */
    public function setUp()
    {
        parent::setUp();

        $this->user = $user = factory(User::class)->create();
        $this->group = $group = factory(Group::class)->create();
    }

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testIndexGetsListOfGroups()
    {
        $this->actingAs($this->user)
            ->json('GET', '/api/group')
            ->seeJsonStructure(['*' => $this->structure])
            ->assertResponseStatus(Response::HTTP_OK);
    }

    /**
     * Test that an index call returns unauthorized without a user.
     *
     * @return void
     */
    public function testIndexReturnsUnauthorized()
    {
        $this->json('GET', '/api/group')
            ->assertResponseStatus(Response::HTTP_UNAUTHORIZED);
    }

    /**
     * Get a single user test.
     */
    public function testShowGetsGroup()
    {
        $this->actingAs($this->user)
            ->json('GET', '/api/group/1')
            ->seeJsonStructure($this->structure)
            ->assertResponseStatus(Response::HTTP_OK);
    }

    /**
     * Return unauthorized when not an authorized user.
     */
    public function testShowReturnsUnauthorized()
    {
        $this->json('GET', '/api/group/1')
            ->assertResponseStatus(Response::HTTP_UNAUTHORIZED);
    }

    /**
     * Test when a user doesn't exist returns a not found.
     */
    public function testShowFailsGettingNonGroup()
    {
        $this->actingAs($this->user)
            ->json('GET', '/api/group/2')
            ->assertResponseStatus(Response::HTTP_NOT_FOUND);
    }

    /**
     * Test creating a valid user returns the user.
     */
    public function testCreateAGroup()
    {
        $this->actingAs($this->user)
            ->json('POST', '/api/group', $this->newGroup())
            ->seeJsonContains($this->newGroup());
    }

    /**
     *
     */
    public function testCreateGroupValidation()
    {
        $newGroup = $this->newGroup();

        // Loop delimited by new users length
        for($i = 0; $i < count($newGroup); $i++) {

            // Copy the new group array
            $test = $newGroup;

            // Current key
            $key = key($newGroup);

            // Unset a key=>value pair from the test by removing the
            // current key of the newuser array.
            unset($test[$key]);

            // Run the test
            $this->actingAs($this->user)
                ->json('POST', '/api/group', $test)
                ->seeJsonStructure([$this->getValidationKey($key)])
                ->assertResponseStatus(Response::HTTP_UNPROCESSABLE_ENTITY);

            // Increment the array pointer on the new user array
            next($newGroup);
        }
    }

    /**
     * Test that a create request returns unauthorized without a user.
     *
     * @return void
     */
    public function testCreateGroupReturnsUnauthorized()
    {
        $newGroup = $this->newGroup();

        $this->json('POST', '/api/group', $newGroup)
            ->assertResponseStatus(Response::HTTP_UNAUTHORIZED);
    }

    /**
     * Test updating a user works correctly.
     */
    public function testUpdateAGroup()
    {
        $updatedGroup = $this->group;

        $updatedGroup->name = "administrators";

        $this->actingAs($this->user)
            ->json('PATCH', '/api/group/1', $updatedGroup->toArray())
            ->seeJsonStructure($this->structure)
            ->seeJson(['name' => 'administrators'])
            ->assertResponseStatus(Response::HTTP_OK);
    }

    /**
     * Test an unauthorized user can't update a user.
     */
    public function testUpdateAGroupReturnsUnauthorized()
    {
        $updatedGroup = $this->group;

        $updatedGroup->name = "administrators";

        $this->json('PATCH', '/api/group/1', $updatedGroup->toArray())
            ->assertResponseStatus(Response::HTTP_UNAUTHORIZED);
    }

    /**
     * Test that a non existent user returns not found.
     */
    public function testUpdateAGroupFailsOnANonGroup()
    {
        $updatedGroup = $this->group;

        $updatedGroup->name = "administrators";

        $this->actingAs($this->user)
            ->json('PATCH', '/api/group/2', $updatedGroup->toArray())
            ->assertResponseStatus(Response::HTTP_NOT_FOUND);
    }

    /**
     * Test that updating a user with no new data returns unmodified.
     */
    public function testUpdateAnUnmodifiedGroup()
    {
        $this->actingAs($this->user)
            ->json('PATCH', '/api/group/1', $this->group->toArray())
            ->assertResponseStatus(Response::HTTP_NOT_MODIFIED);
    }

    /**
     * Test we can delete a user.
     */
    public function testDestroyAGroup()
    {
        $group = factory(Group::class)->create();

        // Delete the newly created user.
        $this->actingAs($this->user)
            ->json('DELETE', '/api/group/' . $group->id)
            ->assertResponseStatus(Response::HTTP_OK);

        // Assert the new user is not available.
        $this->actingAs($this->user)
            ->json('GET', '/api/group/' . $group->id)
            ->assertResponseStatus(Response::HTTP_NOT_FOUND);
    }

    /**
     * Test we get a not found when deleting a user that doesn't exist.
     */
    public function testDestroyAGroupFailsWhenNotFound()
    {
        $this->actingAs($this->user)
            ->json('DELETE', '/api/group/2')
            ->assertResponseStatus(Response::HTTP_NOT_FOUND);
    }

    /**
     * Return data for a new user.
     *
     * @return array
     */
    protected function newGroup()
    {
        $newGroup = [
            "name" => "users",
            "level" => 1
        ];

        return $newGroup;
    }
}
