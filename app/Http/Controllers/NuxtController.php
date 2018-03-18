<?php

namespace App\Http\Controllers;

use App\Repositories\NuxtRepository;
use Illuminate\Http\Request;
use App\Http\Resources\Nuxt as NuxtResource;

class NuxtController extends Controller
{
    protected $repository;

    /**
     * NuxtController constructor.
     * @param $repository
     */
    public function __construct(NuxtRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index(Request $request)
    {
        return NuxtResource::collection($this->repository->paginate($request->limit ?? 5));
    }

    public function count()
    {
        $count = $this->repository->all()->count();
        return response()->json($count,200);
    }

    public function store(Request $request)
    {
        try {
            $nuxt = $this->repository->create([
                'name'   => $request->name,
                'prefix' => $request->prefix,
            ]);
            return response()->json($nuxt, 201);
        } catch (\Exception $e) {
            $errorMessage = 'create nuxt failed ' . $e->getMessage();
            Log::info($errorMessage);
            return false;
        }
    }

    public function update(Request $request, $id)
    {
        $this->repository->update($request->all(), $id);

        $response = [
            'message' => 'Nuxt updated.',
        ];

        return response()->json($response, 201);

    }

    public function show($id)
    {
        $nuxt = $this->repository->find($id);
        return new NuxtResource($nuxt);
    }

    public function edit($id)
    {
        $nuxt = $this->repository->find($id);
        return new NuxtResource($nuxt);
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
