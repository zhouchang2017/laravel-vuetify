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
//            dd($request->input('banner'));
//            $nuxt = $this->repository->create($request->nuxt);
            $banner = Banner::create($request->input('banner'));
            dump($banner);
//            $nuxt->banners()->sync([$banner->id]);
//            $nuxt->catelogs()->sync($request->catelogs);
//        dd($banner);
$nuxt = [];
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

    public function settings($id)
    {
        $nuxt = $this->repository->with(['banners','catelogs'])->find($id);
        return response()->json($nuxt);
    }
}
