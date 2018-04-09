<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\Resource;

class Banner extends Resource
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
            'id'         => $this->id,
            'link'       => $this->link,
            'type'       => $this->type,
            'avatar'     => $this->avatar,
            'title'      => $this->title,
            'post_id' =>$this->post_id,
            'post'       => new Post($this->whenLoaded('post')),
            'nuxt'       => new Nuxt($this->whenLoaded('nuxts')),
            'sort'       => $this->sort,
            'start_at'   => $this->start_at,
            'end_at'     => $this->end_at,
            'updated_at' => $this->updated_at->diffForHumans(),
        ];
    }
}
