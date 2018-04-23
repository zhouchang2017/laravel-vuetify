<?php

namespace App\Http\Controllers;

use App\Banner;
use App\Repositories\NuxtRepository;
use Illuminate\Http\Request;
use App\Http\Resources\Nuxt as NuxtResource;
use Illuminate\Support\Facades\Log;
use App\Repositories\BannerRepository;

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

        if($request->has('limit') && $request->limit == 'all') {
            $data = $this->repository->all();
        }else{
            $data = $this->repository->paginate($request->limit ?? 10);
        }
        return NuxtResource::collection($data);
    }

    public function count()
    {
        $count = $this->repository->all()->count();
        return response()->json($count,200);
    }

    public function store(Request $request)
    {
        try {
            $nuxt = $this->repository->create($request->nuxt);
            $nuxt->banners()->sync($request->input('banner.id'));
            $nuxt->catelogs()->sync($request->catelogs);

            return response()->json($nuxt, 201);
        } catch (\Exception $e) {
            $errorMessage = 'create nuxt failed ' . $e->getMessage();
            Log::info($errorMessage);
            return false;
        }
    }

    public function update(Request $request, $id)
    {

        $nuxt = $this->repository->update($request->only(['name', 'prefix']), $id);

        if($request->has('banners')){
            $nuxt->banners()->sync($request->input('banners'));
        }
        if($request->has('catelogs')){
            $nuxt->catelogs()->sync($request->input('catelogs'));
        }

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
        $nuxt = $this->repository->with(['catelogs','banners'])->find($id);
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

    public function settings($id)
    {
        $nuxt = $this->repository->with(['banners','catelogs'])->find($id);
        return response()->json($nuxt);
    }
}
