<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Departamento;

class DepartamentosSeeder extends Seeder
{
    public function run()
    {
        Departamento::factory()->count(17)->create();
    }
}

