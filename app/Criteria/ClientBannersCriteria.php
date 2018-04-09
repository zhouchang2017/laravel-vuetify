<?php

namespace App\Criteria;

use Carbon\Carbon;
use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Class ClientBannersCriteria.
 *
 * @package namespace App\Criteria;
 */
class ClientBannersCriteria implements CriteriaInterface
{

    /**
     * Apply criteria in query repository
     *
     * @param string $model
     * @param RepositoryInterface $repository
     *
     * @return mixed
     */
    public function apply($model, RepositoryInterface $repository)
    {
        $model = $model->with([ 'banners' => function ($query) {
            $query->where(
                [
                    [ 'start_at', '<=', Carbon::now() ],
                    [ 'end_at', '>=', Carbon::now() ],
                ]
            )->orderBy('sort', 'desc');
        } ]);

        return $model;
    }
}
