<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\BannerRepository;
use App\Banner;
use App\Validators\BannerValidator;

/**
 * Class BannerRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class BannerRepositoryEloquent extends BaseRepository implements BannerRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Banner::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
