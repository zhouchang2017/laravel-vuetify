<?php

namespace App\Http\Controllers\Api;

use App\Criteria\ClientBannersCriteria;
use App\Criteria\ClientCatelogsCriteria;
use App\Criteria\HotPostCriteria;
use App\Repositories\NuxtRepository;
use Illuminate\Http\Request;
use App\Http\Resources\Nuxt as NuxtResource;
class ClientController extends Controller
{

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

    public function index()
    {
        $client = $this->repository
            ->pushCriteria(new ClientBannersCriteria())
            ->pushCriteria(new ClientCatelogsCriteria())
            ->findByField('prefix', $this->getPrefix())
            ->first();
        return new NuxtResource($client);
    }

    public function body()
    {
//        $hot = $this->repository
//            ->pushCriteria(new HotPostCriteria())
//            ->findByField('prefix', $this->getPrefix())
        $hot = $this->repository->with('posts')
            ->findByField('prefix', $this->getPrefix())
            ;
        dd($hot);
    }
}
