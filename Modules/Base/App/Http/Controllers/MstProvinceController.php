<?php

namespace Modules\Base\App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Modules\Base\App\Models\MstCountry;
use Modules\Base\App\Models\MstProvince;

class MstProvinceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
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
            'country_id' => ['required', 'exists:mst_countries,id'],
            'province_name' => ['required', Rule::unique('mst_provinces')->where(function ($query) use ($request) {
                return $query->where('country_id', $request->country_id);
            })]
        ]);

        MstProvince::create([
            'country_id' => $request->country_id,
            'province_name' => $request->province_name
        ]);

        return redirect()->route('master.province.index')->with('message', 'Successfully added new province data!');
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
        return redirect()->route('master.province.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $request->validate([
            'id' => ['required']
        ]);

        MstProvince::destroy($request->id);

        return redirect()->route('master.province.index')->with('message', 'Successfully deleted province data!');
    }
}
