<?php

namespace App\Http\Middleware;

use App\Models\Cliente;
use App\Models\Credito;
use App\Models\Departamento;
use App\Models\Evento;
use App\Models\FrecuenciaPago;
use App\Models\InformacionFinanciera;
use App\Models\Sucursal;
use App\Models\TipoCambio;
use Illuminate\Http\Request;
use Inertia\Middleware;

class ShareData extends Middleware
{
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'info' => $this->getInfo(),
        ]);
    }

    private function getInfo()
    {
        return [
            [
                'informacion_financiera' => InformacionFinanciera::all(),
                'eventos' => Evento::latest()->take(3)->get(),
                'tasaCambio'=>TipoCambio::all(),
                'clientes'=>Cliente::all()->where('mostrar',1),
                'departamentos' => Departamento::all(),
                'sucursales'=> Sucursal::all(),
                'creditos' => Credito::all(),
                'frecuencias'=> FrecuenciaPago::all(),
            ],
        ];
    }
}


