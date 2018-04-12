<?php

namespace App\Criteria;

use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Class NewPostCriteria.
 *
 * @package namespace App\Criteria;
 */
class NewPostCriteria implements CriteriaInterface
{
    /**
     * @var int
     */
    protected $skip;
    /**
     * @var int
     */
    protected $take;

    /**
     * NewPostCriteria constructor.
     * @param int $skip
     * @param int $take
     */
    public function __construct(int $take,int $skip = 0)
    {
        $this->skip = $skip;
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
            $query->with(['catelogs'=>function($query){
                $query->select('id','name')->first();
            }])->where(
                [
                    [ 'hidden', 0 ],
                ]
            )->orderByRaw('created_at', 'desc')->skip($this->skip)->take($this->take);
        } ]);
        return $model;
    }
}
