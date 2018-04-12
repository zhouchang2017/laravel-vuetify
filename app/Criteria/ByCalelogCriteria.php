<?php

namespace App\Criteria;

use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Class ByCalelogCriteria.
 *
 * @package namespace App\Criteria;
 */
class ByCalelogCriteria implements CriteriaInterface
{

    protected $catelogId;

    /**
     * ByCalelogCriteria constructor.
     * @param $catelogId
     */
    public function __construct($catelogId)
    {
        $this->catelogId = $catelogId;
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
        return $model->whereHas('catelogs',function($query){
            $query->where('id',$this->catelogId);
        });
    }
}
