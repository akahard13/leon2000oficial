<?php

namespace App\Http\Controllers;

use App\Models\TipoCambio;
use Illuminate\Http\Request;
use Inertia\Inertia;
class TipoCambioController extends Controller
{
    public function create()
    {
        return Inertia::render('Configuracion/TipoCambio/Create');
    }
    public function store(Request $request)
    {
        $request->validate([
            'valor' => 'required|numeric|regex:/^\d+(\.\d{1,2})?$/',
        ]);

        
        $tipoCambio = new TipoCambio();
        $tipoCambio->valor= $request->valor;
        $tipoCambio->save();

        return redirect()->route('configuracion')->with('success', 'Evento creado con éxito.');
    }
    public function edit(TipoCambio $tipoCambio)
    {
        return Inertia::render('Configuracion/TipoCambio/Edit', ['tipoCambio' => $tipoCambio]);
    }
    public function update(Request $request, TipoCambio $tipoCambio)
    {
        $request->validate([
            'valor' => 'required|numeric|regex:/^\d+(\.\d{1,2})?$/',
        ]);

        $tipoCambio->update($request->all());
        return redirect()->route('configuracion')->with('success', 'Evento actualizado con éxito.');
    }

    public function destroy(TipoCambio $tipoCambio)
    {
        $tipoCambio->delete();
        return redirect()->route('configuracion')->with('success', 'Evento eliminado con éxito.');
    }
}
