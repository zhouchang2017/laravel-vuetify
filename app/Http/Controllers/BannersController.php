<?php

namespace App\Http\Controllers;

use App\Http\Resources\Banner;
use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\BannerCreateRequest;
use App\Http\Requests\BannerUpdateRequest;
use App\Repositories\BannerRepository;
use App\Validators\BannerValidator;
use App\Http\Resources\Banner as BannerResource;
/**
 * Class BannersController.
 *
 * @package namespace App\Http\Controllers;
 */
class BannersController extends Controller
{
    /**
     * @var BannerRepository
     */
    protected $repository;

    /**
     * @var BannerValidator
     */
    protected $validator;

    /**
     * BannersController constructor.
     *
     * @param BannerRepository $repository
     * @param BannerValidator $validator
     */
    public function __construct(BannerRepository $repository, BannerValidator $validator)
    {
        $this->repository = $repository;
        $this->validator  = $validator;
    }


    public function index(Request $request)
    {
        $limit = $request->limit ?? 10;
        if($request->has('limit') && $request->limit == -1){
            $limit  = null;
        }
        $data = $this->repository->paginate($limit);

        return BannerResource::collection($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  BannerCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(BannerCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $banner = $this->repository->create($request->all());

            $response = [
                'message' => 'Banner created.',
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
                    'message' => $e->getMessageBag()
                ]);
            }

            return redirect()->back()->withErrors($e->getMessageBag())->withInput();
        }
    }


    public function show($id)
    {
        $banner = $this->repository->find($id);
        return new BannerResource($banner);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $banner = $this->repository->find($id);

        return view('banners.edit', compact('banner'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  BannerUpdateRequest $request
     * @param  string            $id
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
            return response()->json($response);

        } catch (ValidatorException $e) {

            if ($request->wantsJson()) {

                return response()->json([
                    'error'   => true,
                    'message' => $e->getMessageBag()
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
}
