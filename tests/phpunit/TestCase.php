<?php

class TestCase extends Illuminate\Foundation\Testing\TestCase
{
    /**
     * The base URL to use while testing the application.
     *
     * @var string
     */
    protected $baseUrl = 'http://lab.dev';

    /**
     * Creates the application.
     *
     * @return \Illuminate\Foundation\Application
     */
    public function createApplication()
    {
        $app = require __DIR__.'/../../bootstrap/app.php';

        $app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

        return $app;
    }

    /**
     * Define logic behind validation keys.
     *
     * @param string $key
     * @return string
     */
    public function getValidationKey($key)
    {
        // Remove the confirmation from the request key as the error returned will
        // always be the original key without it.
        return str_replace('_confirmation', '', $key);
    }
}
