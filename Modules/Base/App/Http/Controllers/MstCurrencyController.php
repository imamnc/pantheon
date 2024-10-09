<?php

namespace Modules\Base\App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;
use Modules\Base\App\Models\MstCurrency;

class MstCurrencyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $currencies = MstCurrency::orderBy('id', 'DESC')->paginate(10);

        return Inertia::render('App/Master/MstCurrency', [
            'page_info' => [
                'title' => 'Master Currency',
                'breadcrumbs' => [],
            ],
            'currencies' => $currencies
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
        // dd($request);
        $request->validate([
            'symbol' => ['required', 'unique:mst_currencies,symbol'],
            'label' => ['required', 'unique:mst_currencies,label'],
            'currency_name' => ['required', 'unique:mst_currencies,currency_name'],
        ]);

        MstCurrency::create([
            'symbol' => $request->symbol,
            'label' => $request->label,
            'currency_name' => $request->currency_name,
        ]);

        return redirect()->route('master.currency.index')->with('message', 'Successfully added new currency data!');
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
        return redirect()->route('master.currency.index')->with('message', 'Successfully updated currency data!');
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

        MstCurrency::destroy($request->id);

        return redirect()->route('master.currency.index')->with('message', 'Successfully deleted currency data!');
    }
}
