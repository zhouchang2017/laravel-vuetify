<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\CatelogRepository;
use App\Catelog;

/**
 * Class CatelogRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class CatelogRepositoryEloquent extends BaseRepository implements CatelogRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Catelog::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
