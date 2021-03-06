<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Resources\User;
use Illuminate\Http\Response;

/**
 * Class UserController
 * @package App\Http\Controllers\Api
 */
class UserController extends Controller
{
    /**
     * @var User\Repository
     */
    private $repository;

    /**
     * UserController constructor.
     * @param User\Repository $repository
     */
    public function __construct(User\Repository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json($this->repository->findAll(), Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Requests\User\CreateRequest $request
     * @return Response
     */
    public function store(Requests\User\CreateRequest $request)
    {
        return response()->json($this->repository->create($request->all()), Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param User $user
     * @return Response
     */
    public function show(User $user)
    {
        return response()->json($user, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Requests\User\UpdateRequest $request
     * @param User $user
     * @return Response
     */
    public function update(Requests\User\UpdateRequest $request, User $user)
    {
        $result = $this->repository->updateModel($request->all(), $user);

        return response()->json($user, $result ? Response::HTTP_OK : Response::HTTP_NOT_MODIFIED);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param User $user
     * @return Response
     */
    public function destroy(User $user)
    {
        $user->delete();

        return response("", Response::HTTP_OK);
    }
}
