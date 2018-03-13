<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Nuxt extends Model
{
    protected $fillable = ['name','prefix'];

    public function posts()
    {
        return $this->belongsToMany(Nuxt::class,'nuxt_post','nuxt_id','post_id');
    }
}
