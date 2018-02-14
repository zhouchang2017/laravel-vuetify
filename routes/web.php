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

Route::get('{all}', function () {
    return view('index');
})->where(['all' => '^(?!/storage.*)']);

Route::get('password/reset/{token}', function () {
    return view('index');
})->name('password.reset');
