<?php

namespace App\Criteria;

use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Class ByClientCriteria.
 *
 * @package namespace App\Criteria;
 */
class ByClientCriteria implements CriteriaInterface
{

    protected $prefix;

    public function __construct()
    {
        $this->prefix = (request()->header('nuxt-id'));
    }
    /**
     * Apply criteria in query repository
     *
     * @param string              $model
     * @param RepositoryInterface $repository
     *
     * @return mixed
     */
    public function apply($model, RepositoryInterface $repository)
    {
        return $model->whereHas('nuxts',function($query){
            $query->where('prefix',$this->prefix);
        });
    }
}
