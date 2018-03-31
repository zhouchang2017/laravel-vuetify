<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\Resource;

class Banner extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'   => $this->id,
            'url' => $this->url,
            'avatar' => $this->avatar,
            'title' => $this->title,
            'description' => $this->description,
            'post' => Post::collection($this->whenLoaded('post_id')),
            'nuxt' => Post::collection($this->whenLoaded('nuxts')),
            'start_at' => $this->start_at,
            'end_at' => $this->end_at,
            'updated_at'  => $this->updated_at->diffForHumans(),
        ];
    }
}
