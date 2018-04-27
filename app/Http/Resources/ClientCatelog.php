<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class ClientCatelog extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'     => $this->id,
            'name'   => $this->name,
            'avatar' => $this->avatar,
            'posts'  => ListPost::collection($this->whenLoaded('posts')),
        ];
    }
}
