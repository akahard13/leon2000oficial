<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormulariosTable extends Migration
{
    public function up()
    {
        Schema::create('formularios', function (Blueprint $table) {
            $table->id();
            $table->string('nombres');
            $table->string('apellidos');
            $table->string('cedula')->unique();
            $table->unsignedBigInteger('departamento');
            $table->unsignedBigInteger('municipio');
            $table->string('direccion');
            $table->string('telefono');
            $table->unsignedBigInteger('sucursal');
            $table->unsignedBigInteger('frecuencia_pago');
            $table->string('tipo_credito');
            $table->integer('plazo_meses');
            $table->float('monto');
            $table->boolean('autorizacion');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('formularios');
    }
}

