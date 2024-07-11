<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTipoCreditosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tipo_creditos', function (Blueprint $table) {
            $table->id();
            $table->decimal('monto_minimo', 10, 2);
            $table->decimal('monto_maximo', 10, 2);
            $table->decimal('interes_anual', 5, 2);
            $table->decimal('interes_mensual', 5, 2);
            $table->integer('plazo_maximo');
            $table->string('nombre');
            $table->foreignId('credito_id')->constrained('creditos')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tipo_creditos');
    }
}
