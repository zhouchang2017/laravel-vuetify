<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
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
}
