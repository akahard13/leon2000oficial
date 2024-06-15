<?php

namespace Database\Factories;

use App\Models\Credito;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Credito>
 */
class CreditoFactory extends Factory
{
    protected $model = Credito::class;

    // Lista de departamentos en el orden deseado
    private $creditos = [
        'Consumo Personal',
        'Microempresa',
        'Consumo Vivienda'
    ];

    private $index = 0;


    public function definition()
    {
        $nombre = $this->creditos[$this->index];
        $this->index++;

        return [
            'nombre' => $nombre,
        ];
    }
}
