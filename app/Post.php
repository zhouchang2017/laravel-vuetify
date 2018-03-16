<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Post extends Model implements Transformable
{
    use TransformableTrait;

    protected $fillable=['title','avatar','body','user_id','originate','read_num','fake_read_num','hidden','is_hot','deleted_at'];


    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function nuxts()
    {
        return $this->belongsToMany(Nuxt::class);
    }

    public function catelogs()
    {
        return $this->belongsToMany(Catelog::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
