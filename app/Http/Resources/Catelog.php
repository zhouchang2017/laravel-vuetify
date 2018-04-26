<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class Catelog extends Resource
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
            'name' => $this->name,
            'avatar'=>$this->avatar,
//            'post_count' => $this->when(!!$this->posts,$this->posts->count()),
            'updated_at'  => $this->when(!!$this->updated_at,$this->updated_at),
        ];
    }
}
