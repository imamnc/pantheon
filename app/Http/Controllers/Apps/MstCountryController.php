<?php

namespace App\Http\Controllers\Apps;

use App\Http\Controllers\Controller;
use App\Models\Master\MstCountry;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MstCountryController extends Controller
{
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

    public function store(Request $request)
    {
        $request->validate([
            'country_name' => ['required', 'unique:mst_countries,country_name']
        ]);

        MstCountry::create([
            'country_name' => $request->country_name
        ]);

        return redirect()->route('master.country.index')->with('message', 'Successfully added new country data!');
    }

    public function destroy(Request $request)
    {
        $request->validate([
            'id' => ['required']
        ]);

        MstCountry::destroy($request->id);

        return redirect()->route('master.country.index')->with('message', 'Successfully deleted country data!');
    }
}
