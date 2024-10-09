<?php

namespace Modules\Base\App\Http\Controllers;

use App\Exports\ExampleExport;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class ExamplesController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function excel()
    {
        return Inertia::render('App/Examples/Excel', [
            'page_info' => [
                'title' => 'Example Excel',
                'breadcrumbs' => [],
            ],
        ]);
    }

    public function download()
    {
        return Excel::download(new ExampleExport, 'example.xlsx');
    }

    public function index()
    {
        return view('base::index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('base::create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Show the specified resource.
     */
    public function show($id)
    {
        return view('base::show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return view('base::edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
    }
}
