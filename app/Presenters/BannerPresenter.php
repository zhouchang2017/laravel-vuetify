<?php

namespace App\Presenters;

use App\Transformers\BannerTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class BannerPresenter.
 *
 * @package namespace App\Presenters;
 */
class BannerPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new BannerTransformer();
    }
}
