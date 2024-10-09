<?php

use App\Events\SocketFired;
use App\Http\Controllers\Apps\DashboardController;
use App\Http\Controllers\Apps\MstCountryController;
use App\Http\Controllers\Apps\WelcomeController;
use App\Http\Controllers\Apps\GreetingController;
use App\Http\Controllers\Apps\MstProvinceController;
use App\Http\Controllers\Apps\NewsController;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\Landing\LandingController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// SHOULD USE LANDING DOMAIN GROUP
Route::middleware('domain.landing')->group(function () {
    // LANDING PAGE GROUP
    Route::name('landing.')->group(function () {
        Route::get('/', [LandingController::class, 'index'])->name('welcome');
        Route::get('/news', [LandingController::class, 'news'])->name('news');
        Route::get('/user-guides', [LandingController::class, 'userGuides'])->name('user-guides');
        Route::get('/contact', [LandingController::class, 'contact'])->name('contact');
    });
});

// SHOULD USE APP DOMAIN GROUP
Route::middleware('domain.app')->group(function () {

    // Custom Authentication Routes
    Route::post('/store', [AuthenticationController::class, 'store']);
    Route::get('/logout', [AuthenticationController::class, 'logout']);

    // Fire socket example
    Route::get('/socket/fire', function () {
        SocketFired::dispatch('Hello from socket!');
        return "Socket Triggered !";
    });

    // Authenticated Users Goes Here
    Route::middleware(['auth'])->group(function () {
        // Dashboard
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

        // Sample greeting page
        Route::get('/greet/{name?}', [GreetingController::class, 'index'])->name('greeting');

        // News Group
        Route::prefix('manage-news')->name('manage-news.')->group(function () {
            Route::get('/', [NewsController::class, 'index'])->name('index');
        });
    });
});

// CKEDITOR HANDLE UPLOAD
Route::post('ckeditor/upload', function (Request $request) {
    $file_path = $request->file('image')->storePublicly('CKEditor');
    $file_path = $file_path ? "storage/$file_path" : null;
    return response()->json(['success' => true, 'url' => url($file_path)]);
});
