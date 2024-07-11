<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Models\Credito;
use App\Models\tipo_creditos;
use Inertia\Inertia;
use Illuminate\Http\Request;

class CalculadoraController extends Controller
{
    public function index()
    {
        $creditos = Credito::all();
        return Inertia::render('Configuracion/Calculadora/Calculadora', ['creditos' => $creditos]);
    }

    public function obtener_intereses(Request $request)
    {
        $credito_id = (int) $request->credito;
        $monto = (float) $request->monto;
        $plazo = (int) $request->plazo;
        // Consulta utilizando Eloquent ORM
        $intereses = DB::table('tipo_creditos')
            ->where(function ($query) use ($credito_id, $monto, $plazo) {
                $query->when($credito_id == 2 && $plazo < 7, function ($q) {
                    $q->where('id', 5);
                }, function ($q) use ($credito_id, $monto, $plazo) {
                    $q->where('credito_id', $credito_id)
                        ->where('monto_minimo', '<=', $monto)
                        ->where('monto_maximo', '>=', $monto)
                        ->where('plazo_maximo', '>=', $plazo);
                });
            })
            ->select('interes_anual', 'interes_mensual', 'nombre')
            ->first(); // Utiliza first() en lugar de get() para obtener solo un resultado

        if ($intereses) {
            return response()->json([
                'interes_anual' => $intereses->interes_anual,
                'interes_mensual' => $intereses->interes_mensual,
                'nombre' => $intereses->nombre
            ]);
        } else {
            return response()->json(['error' => 'No se encontraron resultados para los criterios proporcionados.'], 404);
        }

    }

}
