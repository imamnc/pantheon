<?php

namespace App\Http\Controllers\Apps;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index(Request $request)
    {
        return inertia('App/News', [
            'page_info' => [
                'title' => 'News',
                'breadcrumbs' => [
                    'Dashboard' => route('dashboard'),
                    'News' => route('manage-news.index')
                ]
            ]
        ]);
    }

    public function uploadImage(Request $request)
    {
        $file_path = $request->file('image')->storePublicly('CKEditor');
        $file_path = $file_path ? "storage/$file_path" : null;
        return response()->json(['success' => true, 'url' => url($file_path)]);
    }
}
