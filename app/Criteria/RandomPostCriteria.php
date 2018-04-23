<?php

namespace App\Criteria;

use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Class RandomPostCriteriaCriteria.
 *
 * @package namespace App\Criteria;
 */
class RandomPostCriteria implements CriteriaInterface
{
    protected $take;

    /**
     * RandomPostCriteriaCriteria constructor.
     * @param $take
     */
    public function __construct($take = 8)
    {
        $this->take = $take;
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
        $model = $model->with([ 'posts' => function ($query) {
            $query->where(
                [
                    [ 'hidden', 0 ],
                ]
            )->select('id','title','updated_at','read_num','fake_read_num','avatar','body')->inRandomOrder()
            ->take($this->take);
        } ]);
        return $model;
    }
}
