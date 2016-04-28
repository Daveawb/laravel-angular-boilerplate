<?php

namespace App\Http\Controllers\Marketing;

use App\Http\Requests;
use App\Http\Controllers\Controller;

/**
 * Class WelcomeController
 * @package App\Http\Controllers\Marketing
 */
class WelcomeController extends Controller {

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('marketing.welcome');
    }
}
