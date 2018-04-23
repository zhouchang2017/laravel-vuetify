<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Repositories\CatelogRepository;
use App\Http\Resources\ClientCatelog as CatelogResource;
class CatelogsController extends Controller
{
    protected $repository;

    /**
     * CatelogsController constructor.
     * @param $repository
     */
    public function __construct(CatelogRepository $repository)
    {
        parent::__construct();
        $this->repository = $repository;
    }

    public function index()
    {
        $catelogs = $this->repository->with(['posts'=>function($query){
            $query->with(['nuxts'=>function($query){
                $query->where('prefix', $this->getPrefix());
            }])->select('id','title');
        }])->all();
        return CatelogResource::collection($catelogs);
    }
}
