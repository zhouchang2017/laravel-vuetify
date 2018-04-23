<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class Post extends Resource
{
    protected $isList;

    public function __construct($resource,bool $isList = true)
    {
        parent::__construct($resource);
        $this->isList = $isList;
    }

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
//        return parent::toArray($request);
        return [
            'id'    => $this->id,
            'title'  => $this->title,
            'avatar'  => $this->avatar,
            'body'  => $this->isList ? $this->desc : $this->body,
            'originate'  => $this->originate,
            'read_num'  => $this->read_num,
            'fake_read_num'  => $this->fake_read_num,
            'hidden'  => $this->hidden,
            'is_hot'  => $this->is_hot,
            'updated_at'  => $this->updated_at->diffForHumans(),
            'nuxts' => Nuxt::collection($this->whenLoaded('nuxts')),
            'catelogs' => Catelog::collection($this->whenLoaded('catelogs')),
        ];
    }

}
