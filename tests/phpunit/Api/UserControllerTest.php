<?php

use App\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Http\Response;

/**
 * Class UserControllerTest
 */
class UserControllerTest extends TestCase
{
    use DatabaseMigrations;
    use DatabaseTransactions;

    /**
     * @var User
     */
    private $user;

    /**
     * Create a dummy user for each test.
     */
    public function setUp()
    {
        parent::setUp();

        $this->user = $user = factory(User::class)->create();
    }

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testIndexGetsListOfUsers()
    {
        $this->actingAs($this->user)
            ->json('GET', '/api/user')
            ->seeJsonStructure(['*' => ['id', 'name', 'email', 'created_at', 'updated_at']])
            ->assertResponseStatus(Response::HTTP_OK);
    }

    /**
     * Test that an index call returns unauthorized without a user.
     *
     * @return void
     */
    public function testIndexReturnsUnauthorized()
    {
        $this->json('GET', '/api/user')
            ->assertResponseStatus(Response::HTTP_UNAUTHORIZED);
    }

    /**
     * Get a single user test.
     */
    public function testShowGetsUser()
    {
        $this->actingAs($this->user)
            ->json('GET', '/api/user/1')
            ->seeJsonStructure(['id', 'name', 'email', 'created_at', 'updated_at'])
            ->assertResponseStatus(Response::HTTP_OK);
    }

    /**
     * Return unauthorized when not an authorized user.
     */
    public function testShowReturnsUnauthorized()
    {
        $this->json('GET', '/api/user/1')
            ->assertResponseStatus(Response::HTTP_UNAUTHORIZED);
    }

    /**
     * Test when a user doesn't exist returns a not found.
     */
    public function testShowFailsGettingNonUser()
    {
        $this->actingAs($this->user)
            ->json('GET', '/api/user/2')
            ->assertResponseStatus(Response::HTTP_NOT_FOUND);
    }

    /**
     * Test creating a valid user returns the user.
     */
    public function testCreateAUser()
    {
        $this->actingAs($this->user)
            ->json('POST', '/api/user', $this->newUser())
            ->seeJsonStructure(['id', 'name', 'email', 'created_at', 'updated_at']);
    }

    /**
     *
     */
    public function testCreateUserValidation()
    {
        $newUser = $this->newUser();

        // Loop delimited by new users length
        for($i = 0; $i < count($newUser); $i++) {

            // Copy the new user array
            $test = $newUser;

            // Current key
            $key = key($newUser);

            // Unset a key=>value pair from the test by removing the
            // current key of the newuser array.
            unset($test[$key]);

            // Run the test
            $this->actingAs($this->user)
                ->json('POST', '/api/user', $test)
                ->seeJsonStructure([$this->getValidationKey($key)])
                ->assertResponseStatus(Response::HTTP_UNPROCESSABLE_ENTITY);

            // Increment the array pointer on the new user array
            next($newUser);
        }
    }

    /**
     * Test that a create request returns unauthorized without a user.
     *
     * @return void
     */
    public function testCreateUserReturnsUnauthorized()
    {
        $newUser = $this->newUser();

        $this->json('POST', '/api/user', $newUser)
            ->assertResponseStatus(Response::HTTP_UNAUTHORIZED);
    }

    /**
     * Test updating a user works correctly.
     */
    public function testUpdateAUser()
    {
        $updatedUser = $this->user;

        $updatedUser->email = "newemail@example.dev";

        $this->actingAs($this->user)
            ->json('PATCH', '/api/user/1', $updatedUser->toArray())
            ->seeJsonStructure(['id', 'name', 'email', 'created_at', 'updated_at'])
            ->seeJson(['email' => $updatedUser->email])
            ->assertResponseStatus(Response::HTTP_OK);
    }

    /**
     * Test an unauthorized user can't update a user.
     */
    public function testUpdateAUserReturnsUnauthorized()
    {
        $updatedUser = $this->user;

        $updatedUser->email = "newemail@example.dev";

        $this->json('PATCH', '/api/user/1', $updatedUser->toArray())
            ->assertResponseStatus(Response::HTTP_UNAUTHORIZED);
    }

    /**
     * Test that a non existent user returns not found.
     */
    public function testUpdateAUserFailsOnANonUser()
    {
        $updatedUser = $this->user;

        $updatedUser->email = "newemail@example.dev";

        $this->actingAs($this->user)
            ->json('PATCH', '/api/user/2', $updatedUser->toArray())
            ->assertResponseStatus(Response::HTTP_NOT_FOUND);
    }

    /**
     * Test that updating a user with no new data returns unmodified.
     */
    public function testUpdateAnUnmodifiedUser()
    {
        $this->actingAs($this->user)
            ->json('PATCH', '/api/user/1', $this->user->toArray())
            ->assertResponseStatus(Response::HTTP_NOT_MODIFIED);
    }

    /**
     * Test we can delete a user.
     */
    public function testDestroyAUser()
    {
        $user = factory(User::class)->create();

        // Delete the newly created user.
        $this->actingAs($this->user)
            ->json('DELETE', '/api/user/' . $user->id)
            ->assertResponseStatus(Response::HTTP_OK);

        // Assert the new user is not available.
        $this->actingAs($this->user)
            ->json('GET', '/api/user/' . $user->id)
            ->assertResponseStatus(Response::HTTP_NOT_FOUND);
    }

    /**
     * Test we get a not found when deleting a user that doesn't exist.
     */
    public function testDestroyAUserFailsWhenNotFound()
    {
        $this->actingAs($this->user)
            ->json('DELETE', '/api/user/2')
            ->assertResponseStatus(Response::HTTP_NOT_FOUND);
    }

    /**
     * Return data for a new user.
     *
     * @return array
     */
    protected function newUser()
    {
        $newUser = [
            "name" => "David Barker",
            "email" => "daveawb@hotmail.com",
            "password" => "password",
            "password_confirmation" => "password"
        ];

        return $newUser;
    }
}
