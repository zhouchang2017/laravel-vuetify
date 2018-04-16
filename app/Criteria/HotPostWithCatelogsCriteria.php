<?php

namespace App\Criteria;

use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Class HotPostWithCatelogsCriteria.
 *
 * @package namespace App\Criteria;
 */
class HotPostWithCatelogsCriteria implements CriteriaInterface
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
     * @var string
     */
    protected $orderBy;


    /**
     * HotPostCriteria constructor.
     * @param int $take
     * @param int $skip
     * @param string $orderBy
     */
    public function __construct(int $take, int $skip = 0, string $orderBy = 'read_num + fake_read_num')
    {
        $this->take = $take;
        $this->skip = $skip;
        $this->orderBy = $orderBy;
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
            $query->with('catelogs')
            ->select('title','id','updated_at','is_hot','hidden','read_num','fake_read_num')
            ->where(
                [
//                    [ 'is_hot', 1],
                    [ 'hidden', 0 ],
                ]
            )->orderByRaw('read_num + fake_read_num', 'desc')->skip($this->skip)->take($this->take);
        } ]);
        return $model;
    }
}
