<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tipo_creditos extends Model
{
    use HasFactory;

    protected $fillable = [
        'monto_minimo',
        'monto_maximo',
        'interes_anual',
        'interes_mensual',
        'plazo_maximo',
        'nombre',
        'credito_id',
    ];

    public function credito()
    {
        return $this->belongsTo(Credito::class);
    }
}
