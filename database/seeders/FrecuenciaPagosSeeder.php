<?php

namespace Database\Seeders;

use App\Models\FrecuenciaPago;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FrecuenciaPagosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        FrecuenciaPago::factory()->count(3)->create();
    }
}
