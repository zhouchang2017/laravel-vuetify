<?php

namespace App\Criteria;

use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Class HotPostCriteria.
 *
 * @package namespace App\Criteria;
 */
class HotPostCriteria implements CriteriaInterface
{
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
        $model = $model->with([ 'posts' => function ($query) {
            $query->where(
                [
                    [ 'is_hot', 1],
                    [ 'hidden', 0 ],
                ]
            )->orderByRaw('read_num + fake_read_num', 'desc')->take(3);
        } ]);
        return $model;
    }
}
