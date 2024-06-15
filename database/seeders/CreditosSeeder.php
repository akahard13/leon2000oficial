<?php

namespace Database\Seeders;

use App\Models\Credito;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CreditosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Credito::factory()->count(3)->create();
    }
}
