<?php

namespace App\Http\Controllers\Api;

use App\Repositories\PostRepository;
use App\Http\Resources\Post as PostResource;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    protected $repository;

    /**
     * PostController constructor.
     * @param $repository
     */
    public function __construct(PostRepository $repository)
    {
        parent::__construct();
        $this->repository = $repository;
    }

    public function show($id)
    {
        $post = $this->repository->with('catelogs')->find($id);
        return new PostResource($post,false);
    }
}
