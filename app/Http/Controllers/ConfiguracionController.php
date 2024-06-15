<?php

namespace App\Http\Controllers;

use App\Models\TipoCambio;
use Illuminate\Http\Request;
use Inertia\Inertia;
class ConfiguracionController extends Controller
{
    public function index()
    {
        $tipoCambio=TipoCambio::all();
        return Inertia::render('Configuracion', ['tipoCambio' => $tipoCambio]);
    }

    public function store_tipo_cambio(Request $request){

    }
}
