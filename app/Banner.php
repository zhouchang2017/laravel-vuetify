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

}
