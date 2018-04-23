<?php

namespace App\Http\Controllers\Api;

use App\Criteria\ByCalelogCriteria;
use App\Criteria\ByClientCriteria;
use App\Criteria\ClientBannersCriteria;
use App\Criteria\ClientCatelogsCriteria;
use App\Criteria\HotPostCriteria;
use App\Criteria\HotPostWithCatelogsCriteria;
use App\Criteria\NewPostCriteria;
use App\Criteria\RandomPostCriteria;
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

        $data['hot'] = ClientPost::collection($this->getHotPost($request->all()));

        $data['new'] = ClientPost::collection($this->getNewPost($request->all()));

        $data['hotList'] = ClientPost::collection($this->getHotCatelogPost(['take'=>6,'skip'=>4]));

        $recommend = $this->repository
            ->pushCriteria(new HotPostCriteria(1, 4))
            ->findByField('prefix', $this->getPrefix())
            ->first()->posts->first();
        $data['recommend'] = new ClientPost($recommend);

        $randomPost = $this->repository
            ->pushCriteria(new RandomPostCriteria(10))
            ->findByField('prefix', $this->getPrefix())
            ->first()->posts;

        $data['randomPost'] = ClientPost::collection($randomPost);
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
     * @param $data
     * @return mixed
     */
    private function getHotPost($data)
    {
        $hot = $this->repository
            ->pushCriteria(new HotPostCriteria($data->hot_num ?? 3))
            ->findByField('prefix', $this->getPrefix())
            ->first()->posts;
        return $hot;
    }


    /**
     * @param array $data
     * @return mixed
     */
    private function getNewPost(array $data = [])
    {
        $new = $this->repository
            ->pushCriteria(new NewPostCriteria($data['new_num'] ?? 6,$data['skip'] ?? 0))
            ->findByField('prefix', $this->getPrefix())
            ->first()->posts;
        return $new;
    }

    /**
     * @param array $data
     * @return mixed
     */
    private function getHotCatelogPost(array $data = [])
    {
        $hotCatelogPost = $this->repository
            ->pushCriteria(new HotPostWithCatelogsCriteria($data['take'] ?? 3, $data['skip'] ?? 4))
            ->findByField('prefix', $this->getPrefix())
            ->first()->posts;
        return $hotCatelogPost;
    }
}
