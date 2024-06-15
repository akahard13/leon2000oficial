<?php

namespace Database\Factories;

use App\Models\FrecuenciaPago;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FrecuenciaPago>
 */
class FrecuenciaPagoFactory extends Factory
{
    protected $model = FrecuenciaPago::class;

    // Lista de departamentos en el orden deseado
    private $frecuencias = [
        'Semanal', 'Mensual', 'Quincenal'
    ];
    private $dias=[7,30,15];
    private $index = 0;
    public function definition(): array
    {
        $frecuencia = $this->frecuencias[$this->index];
        $dia=$this->dias[$this->index];
        $this->index++;
        return [
            'frecuencia'=>$frecuencia,
            'dias'=>$dia,
        ];
    }
}
