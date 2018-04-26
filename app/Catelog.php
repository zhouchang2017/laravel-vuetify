<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class Catelog.
 *
 * @package namespace App;
 */
class Catelog extends Model implements Transformable
{
    use TransformableTrait;

    /**
     * 要触发的所有关联关系。
     *
     * @var array
     */
    protected $touches = ['nuxts'];


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name','en_name','avatar'
    ];

    public function posts()
    {
        return $this->belongsToMany(Post::class);
    }

    public function nuxts()
    {
        return $this->belongsToMany(Nuxt::class,'nuxt_catelog');
    }

}
