<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class Banner.
 *
 * @package namespace App;
 */
class Banner extends Model implements Transformable
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
        'type',
        'link',
        'avatar',
        'title',
        'description',
        'post_id',
        'start_at',
        'sort',
        'end_at'
    ];

    public function nuxts()
    {
        return $this->belongsToMany(Nuxt::class,'nuxt_banner');
    }

    public function post()
    {
        return $this->belongsTo(Post::class);
    }

}
