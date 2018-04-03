<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/test/banner',function (){
   \App\Banner::create([
       'title'=>'这里上banner标题',
       'link'=>'',
       'post_id'=>3,
       'sort'=>0,
       'type'=>'main',
       'avatar'=>'dafdasfadsfadsfasdfasdf'
   ]);
});
Route::get('{all}', function () {
    return view('index');
})->where(['all' => '^(?!api).*']);

Route::get('password/reset/{token}', function () {
    return view('index');
})->name('password.reset');


