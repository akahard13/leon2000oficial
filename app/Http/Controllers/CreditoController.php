<?php

namespace App\Http\Controllers;

use App\Models\Credito;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CreditoController extends Controller
{
    public function index()
    {
        $creditos = Credito::all();
        return Inertia::render('Configuracion/Creditos/MainCreditos', ['creditos' => $creditos]);
    }

    public function create()
    {
        return Inertia::render('Configuracion/Creditos/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:255',
        ]);

        $credito = new Credito();
        $credito->nombre = $request->nombre;
        $credito->save();

        return redirect()->route('creditos.index')->with('success', 'Crédito creado exitosamente.');
    }

    public function edit(Credito $credito)
    {
        return Inertia::render('Configuracion/Creditos/Edit', ['credito' => $credito]);
    }

    public function update(Request $request, Credito $credito)
    {
        $request->validate([
            'nombre' => 'required|string|max:255',
        ]);

        $credito->nombre = $request->nombre;
        $credito->save();

        return redirect()->route('creditos.index')->with('success', 'Crédito actualizado exitosamente.');
    }

    public function destroy(Credito $credito)
    {
        $credito->delete();
        return redirect()->route('creditos.index')->with('success', 'Crédito eliminado exitosamente.');
    }
}
