<?php

namespace App\Providers;

use App\Models\InformacionFinanciera;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\View;

class MenuItemsServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    public function boot()
    {
        View::composer('*', function ($view) {
            $view->with('informacion_financiera', InformacionFinanciera::all());
        });
    }

}
