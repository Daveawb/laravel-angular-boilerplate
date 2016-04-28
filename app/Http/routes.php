<?php

/** @var \Illuminate\Routing\Router $router */
$router = app('router');

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Password Reset Routes...

$router->group(['middleware' => ['guest']], function($router) {
    $router->get('/', 'Marketing\WelcomeController@index');
});

$router->group(['middleware' => ['auth']], function($router) {
    $router->get('/', 'User\WelcomeController@index');
});

$router->group(['prefix' => 'api', 'namespace' => 'Api', 'middleware' => ['api']], function($router) {
    $router->resource('user', 'UserController', ['except' => ['create', 'edit']]);
});

$router->auth();
