<?php

Route::get('client','ClientController@index');
Route::get('client/body','ClientController@body');
Route::get('client/post','ClientController@post');
Route::get('client/post/catelog','ClientController@postByCatelog');
