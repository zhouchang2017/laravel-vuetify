<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
        $post = $this->post->create([
            'title'         => $request->title,
            'avatar'        => $request->avatar,
            'body'          => $request->body,
            'user_id'       => Auth::id(),
            'originate'     => $request->input('originate', ''),
            'fake_read_num' => $request->input('fake_read_num', 0),
            'hidden'        => $request->input('hidden', 0),
            'is_hot'        => $request->input('is_hot', 0),
        ]);
        $post->catelogs()->sync($request->catelogs);
    }
}
