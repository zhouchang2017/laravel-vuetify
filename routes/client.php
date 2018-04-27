<?php

Route::get('client','ClientController@index');
Route::get('client/body','ClientController@body');
Route::get('client/post','ClientController@post');
Route::get('client/post/catelog','ClientController@postByCatelog');
Route::get('client/posts/{id}','PostsController@show');
Route::get('client/catelogs','CatelogsController@index');
Route::get('client/catelogs/{id}','CatelogsController@show');