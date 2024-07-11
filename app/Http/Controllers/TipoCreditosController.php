<?php

namespace App\Http\Controllers;

use App\Models\Credito;
use App\Models\tipo_creditos;
use Illuminate\Http\Request;

class TipoCreditosController extends Controller
{
    public function index()
    {
        $tipoCreditos = tipo_creditos::with('credito')->orderBy('credito_id')->get();
        return inertia('Configuracion/TipoCredito/MainTipoCredito', compact('tipoCreditos'));
    }

    public function create()
    {
        $creditos=Credito::all();
        return inertia('Configuracion/TipoCredito/Create', compact('creditos'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'monto_minimo' => 'required|numeric',
            'monto_maximo' => 'required|numeric',
            'interes_anual' => 'required|numeric',
            'interes_mensual' => 'required|numeric',
            'plazo_maximo' => 'required|integer',
            'nombre' => 'required|string|max:255',
            'credito_id' => 'required|exists:creditos,id',
        ]);

        tipo_creditos::create($validated);

        return redirect()->route('tipo_creditos.index')->with('success', 'Tipo de Crédito creado con éxito.');
    }

    public function edit(tipo_creditos $tipoCredito)
    {
        $creditos=Credito::all();
        return inertia('Configuracion/TipoCredito/Edit', compact('tipoCredito', 'creditos'));
    }

    public function update(Request $request, tipo_creditos $tipoCredito)
    {
        $validated = $request->validate([
            'monto_minimo' => 'required|numeric',
            'monto_maximo' => 'required|numeric',
            'interes_anual' => 'required|numeric',
            'interes_mensual' => 'required|numeric',
            'plazo_maximo' => 'required|integer',
            'nombre' => 'required|string|max:255',
            'credito_id' => 'required|exists:creditos,id',
        ]);

        $tipoCredito->update($validated);

        return redirect()->route('tipo_creditos.index')->with('success', 'Tipo de Crédito actualizado con éxito.');
    }

    public function destroy(tipo_creditos $tipoCredito)
    {
        $tipoCredito->delete();

        return redirect()->route('tipo_creditos.index')->with('success', 'Tipo de Crédito eliminado con éxito.');
    }
}
