<?php

use App\Resources\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Http\Response;

/**
 * Class HeadersTest
 */
class HeadersTest extends TestCase
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
     * Make sure a valid JSON API request does not fail.
     *
     * @return void
     */
    public function testContentTypeIsAccepted()
    {
        $this->actingAs($this->user)
            ->json('GET', '/api/user', [], [
                'Content-Type' => 'application/vnd.api+json',
                'Accept' => 'application/vnd.api+json'
            ])
            ->assertResponseStatus(Response::HTTP_OK);
    }

    /**
     * JSON API does not allow media params in content-type headers.
     *
     * @return void
     */
    public function testContentTypeHeaderErrorsWithMediaParameters()
    {
        $this->actingAs($this->user)
            ->json('GET', '/api/user', [], [
                'Content-Type' => 'application/vnd.api+json; charset=UTF-8',
                'Accept' => 'application/vnd.api+json'
            ])->assertResponseStatus(Response::HTTP_UNSUPPORTED_MEDIA_TYPE);
    }

    /**
     * JSON API does not allow media type params in accept headers.
     *
     * @return void
     */
    public function testAcceptHeaderErrorsWithBadMediaType()
    {
        $this->actingAs($this->user)
            ->json('GET', '/api/user', [], [
                'Content-Type' => 'application/vnd.api+json',
                'Accept' => 'application/vnd.api+json; lang=en'
            ])
            ->assertResponseStatus(Response::HTTP_NOT_ACCEPTABLE);
    }

    /**
     * Test to make sure JSON API media types don't interfere with other mimes.
     */
    public function testStandardMediaTypeDoesNotError()
    {
        $this->actingAs($this->user)
            ->json('GET', '/api/user', [])
            ->assertResponseStatus(Response::HTTP_OK);
    }
}
