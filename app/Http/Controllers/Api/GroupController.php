<?php

namespace App\Http\Controllers\Api;

use App\Resources\Group;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;

class GroupController extends Controller
{
    /**
     * @var Group\Repository
     */
    private $repository;

    /**
     * GroupController constructor.
     * @param Group\Repository $repository
     */
    public function __construct(Group\Repository $repository)
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
     * @param Requests\Group\CreateRequest $request
     * @return Response
     */
    public function store(Requests\Group\CreateRequest $request)
    {
        return response()->json($this->repository->create($request->all()), Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param Group $group
     * @return Response
     */
    public function show(Group $group)
    {
        return response()->json($group, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Requests\Group\UpdateRequest $request
     * @param Group $group
     * @return Response
     */
    public function update(Requests\Group\UpdateRequest $request, Group $group)
    {
        $result = $this->repository->updateModel($request->all(), $group);

        return response()->json($group, $result ? Response::HTTP_OK : Response::HTTP_NOT_MODIFIED);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Group $group
     * @return Response
     */
    public function destroy(Group $group)
    {
        $group->delete();

        return response("", Response::HTTP_OK);
    }
}
