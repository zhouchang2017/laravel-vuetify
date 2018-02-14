<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileSystemController extends Controller
{
    public function upload(Request $request)
    {
        $path = $request->file('avatar')->store('avatars');

        return '/storage/'.$path;
    }
}
