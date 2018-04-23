<?php

namespace App\Http\Controllers;

use App\Post;

class TestPostController extends Controller
{
    protected $post;

    /**
     * TestPostController constructor.
     * @param $post
     */
    public function __construct(Post $post)
    {
        $this->post = $post;
    }

    public function index()
    {
        return $this->post->apply()->get();
    }
}
