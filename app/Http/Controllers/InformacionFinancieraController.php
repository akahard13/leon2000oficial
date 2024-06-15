<?php

namespace App\Http\Controllers;

use App\Models\InformacionFinanciera;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InformacionFinancieraController extends Controller
{
    public function index()
    {
        $informacionFinancieras = InformacionFinanciera::all();
        return Inertia::render('InformacionFinanciera/Main', [
            'informacionFinancieras' => $informacionFinancieras,
        ]);
    }

    public function create()
    {
        return Inertia::render('InformacionFinanciera/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:40',
            'link' => 'required|string|max:655',
        ]);
        InformacionFinanciera::create($request->all());
        return redirect()->route('informacion_financiera');
    }

    public function edit(InformacionFinanciera $informacionFinanciera)
    {
        return Inertia::render('InformacionFinanciera/Edit', [
            'informacionFinanciera' => $informacionFinanciera,
        ]);
    }

    public function update(Request $request, InformacionFinanciera $informacionFinanciera)
    {
        $request->validate([
            'nombre' => 'required|string|max:40',
            'link' => 'required|string|max:655',
        ]);
        $informacionFinanciera->update($request->all());
        return redirect()->route('informacion_financiera');
    }

    public function destroy(InformacionFinanciera $informacionFinanciera)
    {
        $informacionFinanciera->delete();
        return redirect()->route('informacion_financiera');
    }
}
