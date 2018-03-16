<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileSystemController extends Controller
{
    public function upload(Request $request)
    {
        !is_dir(storage_path('app/public/avatar/' . date('Ymd'))) && mkdir(storage_path('app/public/avatar/' . date('Ymd')), 0777,true);

        $dirPath = 'avatar/' . date('Ymd');
        $path = $request->file('avatar')->store($dirPath, 'public');

        return '/storage/' . $path;
    }
}
