<?php

namespace App\Http\Controllers;

use App\Repositories\CatelogRepository;
use Illuminate\Http\Request;
use App\Http\Resources\Catelog as CatelogResource;

class CatelogController extends Controller
{
    protected $repository;

    /**
     * NuxtController constructor.
     * @param $repository
     */
    public function __construct(CatelogRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index(Request $request)
    {
        return CatelogResource::collection($this->repository->all());
    }

    public function count()
    {
        $count = $this->repository->all()->count();
        return response()->json($count,200);
    }

    public function store(Request $request)
    {
        try {
            $catelog = $this->repository->create([
                'name'   => $request->name,
                'en_name' => $request->input('en_name',null),
            ]);
            return response()->json($catelog, 201);
        } catch (\Exception $e) {
            $errorMessage = 'create catelog failed ' . $e->getMessage();
            Log::info($errorMessage);
            return false;
        }
    }

    public function update(Request $request, $id)
    {
        $this->repository->update($request->all(), $id);

        $response = [
            'message' => 'Catelog updated.',
        ];

        return response()->json($response, 201);

    }

    public function show($id)
    {
        $catelog = $this->repository->find($id);
        return new CatelogResource($catelog);
    }

    public function edit($id)
    {
        $catelog = $this->repository->find($id);
        return new CatelogResource($catelog);
    }

    public function destroy($id)
    {
        $deleted = $this->repository->delete($id);
        return response()->json([
            'message' => 'Nuxt deleted.',
            'deleted' => $deleted,
        ]);
    }
}
