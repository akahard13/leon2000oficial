<?php
// app/Http/Controllers/FormularioController.php

namespace App\Http\Controllers;

use App\Models\Departamento;
use App\Models\Formulario;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FormularioController extends Controller
{
    public function index()
    {
        $formularios = Formulario::with(['departamento', 'municipio', 'sucursal', 'frecuenciaPago', 'tipo_credito'])->get();;
        
        
        return Inertia::render('Dashboard', [
            'formularios' => $formularios
        ]);
    }

    public function store(Request $request)
    {
        Formulario::create($request->all());
        return redirect()->route('formularios.index');
    }

    public function show(Formulario $formulario)
    {
        return Inertia::render('Formularios/Show', [
            'formulario' => $formulario
        ]);
    }

    public function update(Request $request, Formulario $formulario)
    {
        $formulario->update($request->all());
        return redirect()->route('formularios.index');
    }

    public function destroy(Formulario $formulario)
    {
        $formulario->delete();
        return redirect()->route('formularios.index');
    }
}

