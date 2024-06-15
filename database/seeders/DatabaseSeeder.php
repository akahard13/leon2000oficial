<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([
            DepartamentosSeeder::class,
            MunicipiosSeeder::class,
            CreditosSeeder::class,
            FrecuenciaPagosSeeder::class,
            SucursalsSeeder::class
        ]);
    }
}

