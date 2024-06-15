<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class ClienteController extends Controller
{
    public function index()
    {
        $clientes = Cliente::all();
        return Inertia::render('Configuracion/Clientes/MainClientes', ['clientes' => $clientes]);
    }

    public function create()
    {
        return Inertia::render('Configuracion/Clientes/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:255',
            'apellidos' => 'required|string|max:255',
            'historia' => 'required|string|max:3000',
            'imagen' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'fecha' => 'required|date',
            'mostrar' => 'boolean',
        ]);

        $path = $request->file('imagen')->store('public/clientes');

        $cliente = new Cliente();
        $cliente->nombre = $request->nombre;
        $cliente->apellidos = $request->apellidos;
        $cliente->historia = $request->historia;
        $cliente->imagen = Storage::url($path);
        $cliente->fecha = \DateTime::createFromFormat('Y-m-d', $request->fecha);
        $cliente->mostrar = $request->mostrar;
        $cliente->save();

        return redirect()->route('clientes.index')->with('success', 'Cliente creado exitosamente.');
    }

    public function edit(Cliente $cliente)
    {
        return Inertia::render('Configuracion/Clientes/Edit', ['cliente' => $cliente]);
    }

    public function update(Request $request, Cliente $cliente)
    {
        $request->validate([
            'nombre' => 'required|string|max:255',
            'apellidos' => 'required|string|max:255',
            'historia' => 'required|string',
            'imagen' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'fecha' => 'required|date',
            'mostrar' => 'boolean',
        ]);

        if ($request->hasFile('imagen')) {
            // Eliminar la imagen anterior
            if ($cliente->imagen) {
                $imagePath = str_replace('/storage', 'public', $cliente->imagen);
                Storage::delete($imagePath);
            }

            $path = $request->file('imagen')->store('public/clientes');
            $cliente->imagen = Storage::url($path);
        }

        $cliente->nombre = $request->nombre;
        $cliente->apellidos = $request->apellidos;
        $cliente->historia = $request->historia;
        $fecha = \DateTime::createFromFormat('Y-m-d', $request->fecha);
        $cliente->fecha = $fecha;
        $cliente->mostrar = $request->mostrar;
        $cliente->save();

        return redirect()->route('clientes.index')->with('success', 'Cliente actualizado exitosamente.');
    }


    public function destroy(Cliente $cliente)
    {
        $imagePath = str_replace('/storage', 'public', $cliente->imagen);
        Storage::delete($imagePath);
        $cliente->delete();
        return redirect()->route('clientes.index')->with('success', 'Cliente eliminado exitosamente.');
    }
    public function toggleMostrar(Cliente $cliente)
    {
        $cliente->mostrar = !$cliente->mostrar;
        $cliente->save();

        return back();
    }

}
