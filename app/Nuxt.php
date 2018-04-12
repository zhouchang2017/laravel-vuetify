<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class Nuxt.
 *
 * @package namespace App;
 */
class Nuxt extends Model implements Transformable
{
    use TransformableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name','prefix'];

    public function posts()
    {
        return $this->belongsToMany(Post::class,'nuxt_post','nuxt_id','post_id');
    }


    public function banners()
    {
        return $this->belongsToMany(Banner::class,'nuxt_banner');
    }

    public function catelogs()
    {
        return $this->belongsToMany(Catelog::class,'nuxt_catelog');
    }

}
