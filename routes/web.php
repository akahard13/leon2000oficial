<?php
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\ConfiguracionController;
use App\Http\Controllers\FormularioController;
use App\Http\Controllers\InformacionFinancieraController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TipoCambioController;
use App\Models\TipoCambio;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\EventoController;
use App\Models\Evento;
use function Termwind\render;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('public.home');
Route::get('/Clientes', function () {
    return Inertia::render('Clientes');
})->name('public.clientes');



Route::get('/admin', function () {
    return Inertia::render('Auth/Login');
});
Route::get('/informacion_financiera', [InformacionFinancieraController::class, 'index'])->name('public.informacion_financiera');
Route::middleware(['auth', 'verified'])->group(function () {
    //Formularios-Dashboard
    Route::get('/admin/dashboard', [FormularioController::class, 'index'])->name('dashboard');
    Route::resource('formularios', FormularioController::class)->except(['index']);

    //CONFIGURACION PAGE
    Route::get('/admin/configuracion',[ConfiguracionController::class, 'index'])->name('configuracion');

    //INFORMACION FINANCIERA ROUTES
    Route::get('/admin/informacion_financiera', [InformacionFinancieraController::class, 'index'])->name('informacion_financiera');
    Route::get('/admin/informacion_financiera/create', [InformacionFinancieraController::class, 'create'])->name('informacion_financiera.create');
    Route::post('/informacion_financiera/store', [InformacionFinancieraController::class, 'store'])->name('informacion_financiera.store');
    Route::get('/admin/informacion_financiera/{informacionFinanciera}/edit', [InformacionFinancieraController::class, 'edit'])->name('informacion_financiera.edit');
    Route::put('/informacion_financiera/{informacionFinanciera}', [InformacionFinancieraController::class, 'update'])->name('informacion_financiera.update');
    Route::delete('/informacion_financiera/{informacionFinanciera}', [InformacionFinancieraController::class, 'destroy'])->name('informacion_financiera.destroy');
    //CONFIGURACION ROUTES
        //TASA DE CAMBIO
    Route::post('/admin/tipo_cambio', [TipoCambioController::class, 'store'])->name('tipo_cambio.store');
    Route::get('/admin/tipo_cambio', [TipoCambioController::class, 'create'])->name('tipo_cambio.create');
    Route::get('/admin/tipo_cambio/{tipoCambio}', [TipoCambioController::class, 'edit'])->name('tipo_cambio.edit');
    Route::put('/admin/tipo_cambio/{tipoCambio}', [TipoCambioController::class, 'update'])->name('tipo_cambio.update');
    Route::delete('/admin/tipo_cambio/{tipoCambio}', [TipoCambioController::class, 'destroy'])->name('tipo_cambio.destroy');

    //CLIENTES
    Route::resource('/admin/clientes', ClienteController::class);
    Route::put('/admin/clientes/toggle-mostrar/{cliente}', [ClienteController::class, 'toggleMostrar'])->name('clientes.toggleMostrar');
    
    //EVENTOS
    Route::get('/admin/eventos/create', [EventoController::class, 'create'])->name('eventos.create');
    Route::get('/admin/eventos', [EventoController::class, 'index'])->name('eventos.index');
    Route::post('/eventos', [EventoController::class, 'store'])->name('eventos.store');
    Route::delete('/eventos/{evento}', [EventoController::class, 'destroy'])->name('eventos.destroy');


    //PROFILE
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
