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
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name','en_name'
    ];

    public function posts()
    {
        return $this->belongsToMany(Post::class);
    }

}
