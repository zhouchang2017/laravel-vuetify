<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Repositories\PostRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\Post as PostResource;
use Log;

class PostController extends Controller
{
    protected $repository;

    /**
     * PostController constructor.
     * @param $repository
     */
    public function __construct(PostRepository $repository)
    {
        $this->repository = $repository;
    }


    public function index(Request $request)
    {
        return PostResource::collection($this->repository->paginate($request->limit ?? 5));
    }

    public function store(StorePostRequest $request)
    {
        $post = $this->repository->create([
            'title'         => $request->title,
            'avatar'        => $request->avatar,
            'body'          => $request->body,
            'user_id'       => Auth::id(),
            'originate'     => $request->input('originate', ''),
            'fake_read_num' => $request->input('fake_read_num', 0),
            'read_num'      => 0,
            'hidden'        => $request->input('hidden', 0),
            'is_hot'        => $request->input('is_hot', 0),
        ]);
        try {
            $post->catelogs()->sync($request->catelogs);
            $post->nuxts()->sync($request->nuxts);
            return response()->json($post, 201);
        } catch (\Exception $e) {
            $errorMessage = 'create post failed ' . $e->getMessage();
            Log::info($errorMessage);
            return false;
        }

    }

    public function update(Request $request, $id)
    {
        $this->repository->update($request->all(), $id);

        $response = [
            'message' => 'Post updated.'
        ];

        return response()->json($response,201);

    }

    public function show($id)
    {
        $post = $this->repository->find($id);
        return new PostResource($post);
    }
}
