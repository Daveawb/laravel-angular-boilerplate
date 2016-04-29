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

$router->group(['prefix' => 'admin', 'middleware' => 'auth'], function($router) {
    $router->get('/', 'User\WelcomeController@index');
    $router->get('/{any}', 'User\WelcomeController@index')->where('any', '.*');
});

$router->group(['prefix' => 'api', 'namespace' => 'Api', 'middleware' => ['api']], function($router) {
    $router->resource('user', 'UserController', ['except' => ['create', 'edit']]);
});

$router->group(['middleware' => []], function($router) {
    $router->get('/', 'Marketing\WelcomeController@index');
});


$router->auth();
