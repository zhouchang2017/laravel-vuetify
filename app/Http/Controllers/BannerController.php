<?php

namespace App\Http\Controllers;

use App\Http\Resources\Banner;
use App\Nuxt;
use App\Repositories\NuxtRepository;
use Carbon\Carbon;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Log;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\BannerCreateRequest;
use App\Http\Requests\BannerUpdateRequest;
use App\Repositories\BannerRepository;

/**
 * Class BannersController.
 *
 * @package namespace App\Http\Controllers;
 */
class BannerController extends Controller
{
    /**
     * @var BannerRepository
     */
    protected $repository;


    /**
     * BannersController constructor.
     *
     * @param BannerRepository $repository
     */
    public function __construct(BannerRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        $this->repository->pushCriteria(app('Prettus\Repository\Criteria\RequestCriteria'));
        return Banner::collection($this->repository->with([ 'nuxts' ])->all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  BannerCreateRequest $request
     *
     * @param NuxtRepository $nuxtRepository
     * @return \Illuminate\Http\Response
     *
     */
    public function store(BannerCreateRequest $request, NuxtRepository $nuxtRepository)
    {   
        try {
            $banner = $this->create($request);
            $nuxt = $nuxtRepository->find($request->nuxt_id);
            $nuxt->banners()->attach($banner->id);

            return response()->json($banner, 201);
        } catch (\Exception $e) {
            $errorMessage = 'create banner failed ' . $e->getMessage();
            Log::info($errorMessage);
            return false;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     *
     * @return Banner
     */
    public function show($id)
    {
        $banner = $this->repository->find($id);
        return new Banner($banner);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  BannerUpdateRequest $request
     * @param  string $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(BannerUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $banner = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'Banner updated.',
                'data'    => $banner->toArray(),
            ];

            if ($request->wantsJson()) {

                return response()->json($response);
            }

            return redirect()->back()->with('message', $response['message']);
        } catch (ValidatorException $e) {

            if ($request->wantsJson()) {

                return response()->json([
                    'error'   => true,
                    'message' => $e->getMessageBag(),
                ]);
            }

            return redirect()->back()->withErrors($e->getMessageBag())->withInput();
        }
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $deleted = $this->repository->delete($id);

        if (request()->wantsJson()) {

            return response()->json([
                'message' => 'Banner deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'Banner deleted.');
    }

    /**
     * @param BannerCreateRequest $request
     * @return \App\Banner
     */
    private function create(BannerCreateRequest $request): mixed
    {
        return $this->repository->create([
            'url'         => $request->url,
            'avatar'      => $request->avatar,
            'title'       => $request->title,
            'description' => $request->description,
            'post_id'     => $request->input('post_id', null),
            'start_at'    => $request->input('start_at', Carbon::now()),
            'end_at'      => $request->input('end_at', Carbon::now()),
        ]);
    }
}
