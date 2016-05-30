<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ResetsPasswords;

class PasswordController extends Controller
{

    /**
     * @var string
     */
    protected $linkRequestView = "marketing.auth.passwords.email";

    /**
     * @var string
     */
    protected $resetView = "marketing.auth.passwords.reset";

    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;

    /**
     * @param $response
     * @return \Illuminate\Http\RedirectResponse
     */
    protected function getSendResetLinkEmailSuccessResponse($response)
    {
        return view('marketing.auth.passwords.ready')->with('status', trans($response));
    }

    /**
     * Create a new password controller instance.
     */
    public function __construct()
    {
        $this->middleware('guest');
    }
}
