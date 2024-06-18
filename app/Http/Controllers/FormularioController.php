<?php
// app/Http/Controllers/FormularioController.php

namespace App\Http\Controllers;

use App\Models\Departamento;
use App\Models\Formulario;
use App\Models\Municipio;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FormularioController extends Controller
{
    public function index()
    {
        $formularios = Formulario::with(['departamento', 'municipio', 'sucursal', 'frecuenciaPago', 'tipo_credito'])->get();
        ;


        return Inertia::render('Dashboard', [
            'formularios' => $formularios
        ]);
    }
    public function create()
    {
        return Inertia::render('Formulario/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombres' => 'required|string|max:255',
            'apellidos' => 'required|string|max:255',
            'cedula' => 'required|string|max:16',
            'telefono' => 'required|string|max:8',
            'departamento' => 'required|integer',
            'municipio' => 'required|integer',
            'direccion' => 'required|string|max:500',
            'sucursal' => 'required|integer',
            'frecuencia_pago' => 'required|integer',
            'tipo_credito' => 'required|integer',
            'plazo_meses' => 'required|integer',
            'monto' => 'required|numeric',
            'autorizacion' => 'required|boolean|in:1',
        ]);
        Formulario::create($request->all());
        return redirect()->route('public.home');
    }

    public function show(Formulario $formulario)
    {
        $form=Formulario::with(['departamento', 'municipio', 'sucursal', 'frecuenciaPago', 'tipo_credito'])->find($formulario->id);
        return Inertia::render('Formulario/Show', [
            'formulario' => $form
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

    public function municipiosPorDepartamento(Request $request)
    {
        $departamento_id = $request->departamento;
        $municipios = Municipio::where('id_dpto', $departamento_id)->get();
        return response()->json($municipios);
    }


}

