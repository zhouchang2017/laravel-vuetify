<?php

namespace App\Http\Controllers\Api;

use App\Criteria\ByCalelogCriteria;
use App\Criteria\ByClientCriteria;
use App\Criteria\ClientBannersCriteria;
use App\Criteria\ClientCatelogsCriteria;
use App\Criteria\HotPostCriteria;
use App\Criteria\NewPostCriteria;
use App\Http\Resources\ClientPost;
use App\Repositories\NuxtRepository;
use App\Repositories\PostRepository;
use Illuminate\Http\Request;
use App\Http\Resources\Nuxt as NuxtResource;

/**
 * Class ClientController
 * @package App\Http\Controllers\Api
 */
class ClientController extends Controller
{

    /**
     * @var NuxtRepository
     */
    protected $repository;

    /**
     * ClientController constructor.
     * @param $repository
     */
    public function __construct(NuxtRepository $repository)
    {
        parent::__construct();
        $this->repository = $repository;
    }

    /**
     * @return NuxtResource
     */
    public function index()
    {
        $client = $this->repository
            ->pushCriteria(new ClientBannersCriteria())
            ->pushCriteria(new ClientCatelogsCriteria())
            ->findByField('prefix', $this->getPrefix())
            ->first();
        return new NuxtResource($client);
    }

    /**
     * @param Request $request
     * hot_num | new_num
     * @return array
     */
    public function body(Request $request)
    {
        $data = [];

        $data['hot'] = ClientPost::collection($this->getHotPost($request));

        $data['new'] = ClientPost::collection($this->getNewPost($request));

        $recommend = $this->repository
            ->pushCriteria(new HotPostCriteria(1, 4))
            ->findByField('prefix', $this->getPrefix())
            ->first()->posts->first();
        $data['recommend'] = new ClientPost($recommend);
        return $data;
    }

    /**
     * @param Request $request
     * @param PostRepository $postRepository
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function post(Request $request, PostRepository $postRepository)
    {
        return ClientPost::collection($postRepository
            ->pushCriteria(new ByClientCriteria())
            ->paginate($request->limit ?? 12));
    }

    /**
     * @param Request $request
     * catelog_id ?? 4
     * @param PostRepository $postRepository
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function postByCatelog(Request $request, PostRepository $postRepository)
    {
        return ClientPost::collection($postRepository
            ->pushCriteria(new ByCalelogCriteria($request->catelog_id ?? 4))
            ->paginate($request->limit ?? 5));
    }

    /**
     * @param Request $request
     * hot_num
     * @return mixed
     */
    private function getHotPost(Request $request)
    {
        $hot = $this->repository
            ->pushCriteria(new HotPostCriteria($request->hot_num ?? 3))
            ->findByField('prefix', $this->getPrefix())
            ->first()->posts;
        return $hot;
    }

    /**
     * @param Request $request
     * new_num
     * @return mixed
     */
    private function getNewPost(Request $request)
    {
        $new = $this->repository
            ->pushCriteria(new NewPostCriteria($request->new_num ?? 6))
            ->findByField('prefix', $this->getPrefix())
            ->first()->posts;
        return $new;
    }
}
