<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Catelog extends Model
{
    protected $fillable = [
        'name','en_name'
    ];

    public function posts()
    {
        return $this->belongsToMany(Post::class);
    }
}
