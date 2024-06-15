<?php

namespace Database\Factories;

use App\Models\Sucursal;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Sucursal>
 */
class SucursalFactory extends Factory
{
    protected $model = Sucursal::class;

    // Lista de departamentos en el orden deseado
    private $sucursales = [
        'León',
        'Chinandega',
    ];

    private $index = 0;

    public function definition(): array
    {
        $sucursal = $this->sucursales[$this->index];
        $this->index++;
        return [
            'sucursal' => $sucursal
        ];
    }
}
