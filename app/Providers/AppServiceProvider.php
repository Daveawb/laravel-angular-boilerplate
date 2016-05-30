<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Laracasts\Generators\GeneratorsServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Providers to be loaded based on environment.
     * @var array
     */
    protected $providers = [
        'local' => [
            GeneratorsServiceProvider::class
        ]
    ];

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->loadEnvironmentProviders();
    }

    /**
     * Register environment providers.
     *
     * @return void
     */
    private function loadEnvironmentProviders()
    {
        $providers = array_get($this->providers, $this->app->environment(), []);

        foreach($providers as $provider) {
            $this->app->register($provider);
        }
    }
}
