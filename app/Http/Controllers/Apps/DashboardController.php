<?php

namespace App\Http\Controllers\Apps;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class DashboardController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('App/Dashboard', [
            'page_info' => [
                'title' => 'Dashboard',
                'breadcrumbs' => []
            ]
        ]);
    }
}
