<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class Nuxt extends Resource
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
            'prefix'   => $this->prefix,
            'post_count' => $this->posts->count(),
            'updated_at' => $this->updated_at->diffForHumans(),
        ];
    }
}
