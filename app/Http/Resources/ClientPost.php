<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class ClientPost extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        if(!isset($this->id)){
            return [];
        }
        return [
            'id'    => $this->id,
            'title'  => $this->title,
            'avatar'  => $this->when(!!$this->avatar,$this->avatar),
            'body'  => $this->when(!!$this->body,$this->body),
            'originate'  => $this->when(!!$this->originate,$this->originate),
            'read_num'  => $this->read_num + $this->fake_read_num,
            'hidden'  => $this->hidden,
            'is_hot'  => $this->is_hot,
            'updated_at'  => $this->updated_at->diffForHumans(),
            'nuxts' => Nuxt::collection($this->whenLoaded('nuxts')),
            'catelogs' => Catelog::collection($this->whenLoaded('catelogs')),
        ];
    }
}
