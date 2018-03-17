<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\NuxtRepository;
use App\Nuxt;
use App\Validators\NuxtValidator;

/**
 * Class NuxtRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class NuxtRepositoryEloquent extends BaseRepository implements NuxtRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Nuxt::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
