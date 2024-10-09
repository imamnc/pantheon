<?php

use Illuminate\Support\Facades\Route;
use Modules\Base\App\Http\Controllers\BaseController;
use Modules\Base\App\Http\Controllers\ExamplesController;
use Modules\Base\App\Http\Controllers\MstCountryController;
use Modules\Base\App\Http\Controllers\MstCurrencyController;
use Modules\Base\App\Http\Controllers\MstProvinceController;

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

Route::middleware('domain.app')->group(function () {
    Route::middleware(['auth'])->group(function () {

        // For testing purposes, use Examples Controller
        Route::prefix('examples')->name('examples.')->group(function() {
            Route::prefix('excel')->name('excel.')->group(function() {
                Route::get('/', [ExamplesController::class, 'excel'])->name('indexExcel');
                Route::get('/download', [ExamplesController::class, 'download'])->name('downloadExcel');
            });
        });

        // Master Data Group
        Route::prefix('master')->name('master.')->group(function () {
            // // Master Country Group
            Route::prefix('country')->name('country.')->group(function () {
                Route::get('/', [MstCountryController::class, 'index'])->name('index')->middleware('can:view country');
                Route::post('/store', [MstCountryController::class, 'store'])->name('store')->middleware('can:add country');
                Route::post('/destroy', [MstCountryController::class, 'destroy'])->name('destroy')->middleware('can:delete country');
            });

            // // Master Province Group
            Route::prefix('province')->name('province.')->group(function () {
                Route::get('/', [MstProvinceController::class, 'index'])->name('index');
                Route::post('/store', [MstProvinceController::class, 'store'])->name('store');
                Route::post('/destroy', [MstProvinceController::class, 'destroy'])->name('destroy');
            });

            Route::prefix('currency')->name('currency.')->group(function () {
                Route::get('/', [MstCurrencyController::class, 'index'])->name('index');
                Route::post('/store', [MstCurrencyController::class, 'store'])->name('store');
                Route::post('/destroy', [MstCurrencyController::class, 'destroy'])->name('destroy');
            });
        });
    });
});
