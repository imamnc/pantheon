<?php

namespace Modules\Base\App\Http\Controllers;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;
use Modules\Base\App\Models\MstCountry;

class MstCountryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $countries = MstCountry::orderBy('created_at', 'desc')->paginate(10);

        return Inertia::render('App/Master/MstCountry', [
            'page_info' => [
                'title' => 'Master Country',
                'breadcrumbs' => [],
            ],
            'countries' => $countries
        ]);
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
    public function store(Request $request): RedirectResponse
    {
        //
        $request->validate([
            'country_name' => ['required', 'unique:mst_countries,country_name']
        ]);

        MstCountry::create([
            'country_name' => $request->country_name
        ]);

        return redirect()->route('master.country.index')->with('message', 'Successfully added new country data!');
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
    public function update(Request $request, $id): RedirectResponse
    {
        //
        return redirect('master.country.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        //
        $request->validate([
            'id' => ['required']
        ]);

        MstCountry::destroy($request->id);

        return redirect()->route('master.country.index')->with('message', 'Successfully deleted country data!');
    }
}
