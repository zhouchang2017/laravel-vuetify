<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('nuxt/{id}/settings','NuxtController@settings');
Route::resource('comment','CommentsController');
Route::group(['middleware' => ['auth:api','refresh']], function () {
    Route::post('logout', 'Auth\LoginController@logout');

    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::apiResource('banners','BannersController');

    Route::get('post/count','PostController@count');
    Route::resource('post','PostController');

    Route::get('nuxt/count','NuxtController@count');
    Route::resource('nuxt','NuxtController');

    Route::get('catelog/count','CatelogController@count');
    Route::resource('catelog','CatelogController');


    Route::patch('settings/profile', 'Settings\UpdateProfile');
    Route::patch('settings/password', 'Settings\UpdatePassword');

    Route::post('fs/upload','FileSystemController@upload');



});



Route::group(['middleware' => 'guest:api'], function () {
    Route::post('login', 'Auth\LoginController@login');
    Route::post('register', 'Auth\RegisterController@register');
    Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'Auth\ResetPasswordController@reset');
});
