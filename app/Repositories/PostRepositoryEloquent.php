<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\PostRepository;
use App\Post;
/**
 * Class PostRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class PostRepositoryEloquent extends BaseRepository implements PostRepository
{
    protected $fieldSearchable = [
        'title',
        'id',
        'avatar',
        'body',
        'originate',
        'read_num',
        'fake_read_num',
        'hidden',
        'is_hot',
        'updated_at'
    ];
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Post::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
