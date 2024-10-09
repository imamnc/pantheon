<?php

namespace App\Http\Controllers\Apps;

use App\Http\Controllers\Controller;
use App\Models\Master\MstCountry;
use App\Models\Master\MstProvince;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MstProvinceController extends Controller
{
    //

    public function index()
    {
        $countries = MstCountry::orderBy('created_at', 'desc')->get();
        $provinces = MstProvince::with(['country'])->orderBy('created_at', 'desc')->paginate(10);

        return Inertia::render('App/Master/MstProvince', [
            'page_info' => [
                'title' => 'Master Province',
                'breadcrumbs' => [],
            ],
            'countries' => $countries,
            'provinces' => $provinces
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'country_id' => ['required', 'exists:mst_countries,id'],
            'province_name' => ['required']
        ]);

        MstProvince::create([
            'country_id' => $request->country_id,
            'province_name' => $request->province_name
        ]);

        return redirect()->route('master.province.index')->with('message', 'Successfully added new province data!');
    }

    public function destroy(Request $request)
    {
        $request->validate([
            'id' => ['required']
        ]);

        MstProvince::destroy($request->id);

        return redirect()->route('master.province.index')->with('message', 'Successfully deleted province data!');
    }
}
