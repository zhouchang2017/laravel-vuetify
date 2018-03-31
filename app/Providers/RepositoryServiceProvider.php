<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(\App\Repositories\CommentRepository::class, \App\Repositories\CommentRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\PostRepository::class, \App\Repositories\PostRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\NuxtRepository::class, \App\Repositories\NuxtRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\CatelogRepository::class, \App\Repositories\CatelogRepositoryEloquent::class);

        
        $this->app->bind(\App\Repositories\BannerRepository::class, \App\Repositories\BannerRepositoryEloquent::class);
        //:end-bindings:
    }
}
