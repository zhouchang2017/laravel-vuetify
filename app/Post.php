<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Zc\Query\Contracts\QueryInterface;
use Zc\Query\Traits\QueryTrait;

class Post extends Model implements Transformable,QueryInterface
{
    use TransformableTrait,QueryTrait;

    protected $fillable=['title','avatar','body','user_id','originate','read_num','fake_read_num','hidden','is_hot','deleted_at'];

    protected $fieldSearchable = [
        // 允许通过url字符串查询的字段
        'title','avatar','body','user_id','read_num'
    ];

    protected $appends = ['desc'];

    public function getDescAttribute()
    {
        $html_string = htmlspecialchars_decode($this->body);
        $content = str_replace(" ", "", $html_string);
        $contents = strip_tags($content);
        $text = mb_substr($contents, 0, 35, "utf-8");
        return $text;
    }

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
