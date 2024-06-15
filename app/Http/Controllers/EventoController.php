<?php

namespace App\Http\Controllers;

use App\Models\Evento;
use App\Models\InformacionFinanciera;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class EventoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $eventos = Evento::all();
        return Inertia::render('Eventos/Main', ['eventos' => $eventos]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Eventos/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'titulo' => 'required|string|max:255',
            'descripcion' => 'required|string|max:1000',
            'imagen' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'fecha' => 'required|date',
        ]);

        $path = $request->file('imagen')->store('public/eventos');

        $evento = new Evento();
        $evento->titulo = $request->titulo;
        $evento->descripcion = $request->descripcion;
        $evento->imagen = Storage::url($path);
        $fecha = \DateTime::createFromFormat('Y-m-d', $request->fecha);
        $evento->fecha = $fecha;
        $evento->save();

        return redirect()->route('eventos.index')->with('success', 'Evento creado con éxito.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Evento $evento)
    {
        return inertia('Eventos/Show', ['evento' => $evento]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Evento $evento)
    {
        return inertia('Eventos/Edit', ['evento' => $evento]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Evento $evento)
    {
        $request->validate([
            'titulo' => 'required|string|max:255',
            'descripcion' => 'required|string|max:1000',
            'imagen' => 'sometimes|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'fecha' => 'required|date',
        ]);

        if ($request->hasFile('imagen')) {
            Storage::delete(str_replace('/storage', 'public', $evento->imagen));
            $path = $request->file('imagen')->store('public/eventos');
            $evento->imagen = Storage::url($path);
        }

        $evento->titulo = $request->titulo;
        $evento->descripcion = $request->descripcion;
        $evento->fecha = $request->fecha;
        $evento->save();

        return redirect()->route('eventos.create')->with('success', 'Evento actualizado con éxito.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Evento $evento)
    {
        Storage::delete(str_replace('/storage', 'public', $evento->imagen));
        $evento->delete();

        return redirect()->route('eventos.index')->with('success', 'Evento eliminado con éxito.');
    }
}
