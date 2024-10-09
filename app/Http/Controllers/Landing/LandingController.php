<?php

namespace App\Http\Controllers\Landing;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;

class LandingController extends Controller
{
    public function index()
    {
        // Get news data
        $news = News::orderBy('created_at', 'desc')->limit(6)->get();
        return view('landing.pages.welcome', compact('news'));
    }

    public function news()
    {
        return view('landing.pages.news');
    }

    public function userGuides()
    {
        return view('landing.pages.user-guides');
    }

    public function contact()
    {
        return view('landing.pages.contact');
    }
}
