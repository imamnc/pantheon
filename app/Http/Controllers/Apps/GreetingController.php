<?php

namespace App\Http\Controllers\Apps;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class GreetingController extends Controller
{
    public function index($name = 'Kacun')
    {
        $page_info = [
            'title' => 'Greeting',
            'breadcrumbs' => [
                'Greeting' => route('greeting')
            ]
        ];
        return inertia('Greet', compact('name', 'page_info'));
    }
}
