<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    protected $post;

    /**
     * PostController constructor.
     * @param $post
     */
    public function __construct(Post $post)
    {
        $this->post = $post;
    }

    public function store(StorePostRequest $request)
    {
        $post = $this->post->create($request->all());
    }
}
