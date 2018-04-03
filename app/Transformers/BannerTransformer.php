<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\\Banner;

/**
 * Class BannerTransformer.
 *
 * @package namespace App\Transformers;
 */
class BannerTransformer extends TransformerAbstract
{
    /**
     * Transform the Banner entity.
     *
     * @param \App\\Banner $model
     *
     * @return array
     */
    public function transform(Banner $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
