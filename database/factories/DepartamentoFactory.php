<?php

namespace Database\Factories;

use App\Models\Departamento;
use Illuminate\Database\Eloquent\Factories\Factory;

class DepartamentoFactory extends Factory
{
    protected $model = Departamento::class;

    // Lista de departamentos en el orden deseado
    private $departamentos = [
        'Boaco', 'Carazo', 'Chinandega', 'Chontales', 'Estelí',
        'Granada', 'Jinotega', 'León', 'Madriz', 'Managua',
        'Masaya', 'Matagalpa', 'Nueva Segovia', 'Rivas', 'Río San Juan',
        'RAAN',
        'RAAS'
    ];

    private $index = 0;
    

    public function definition()
    {
        $nombre = $this->departamentos[$this->index];
        $this->index++;

        return [
            'nombre' => $nombre,
        ];
    }
}

