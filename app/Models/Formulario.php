<?php
// app/Models/Formulario.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Formulario extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombres',
        'apellidos',
        'cedula',
        'departamento',
        'municipio',
        'direccion',
        'telefono',
        'sucursal',
        'frecuencia_pago',
        'tipo_credito',
        'plazo_meses',
        'monto',
        'autorizacion',
    ];

    public function departamento()
    {
        return $this->belongsTo(Departamento::class, 'departamento');
    }

    public function municipio()
    {
        return $this->belongsTo(Municipio::class, 'municipio');
    }

    public function sucursal()
    {
        return $this->belongsTo(Sucursal::class, 'sucursal');
    }

    public function frecuenciaPago()
    {
        return $this->belongsTo(FrecuenciaPago::class, 'frecuencia_pago');
    }
    public function tipo_credito()
    {
        return $this->belongsTo(Credito::class, 'tipo_credito');
    }
}
