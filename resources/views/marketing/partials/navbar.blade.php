<div class="navbar">
    <a class="navbar-brand" href="{{ action('Marketing\WelcomeController@index') }}">Boilerplate</a>
    <ul class="nav navbar-nav">
        <li class="active">
            <a href="{{ action('Auth\AuthController@showRegistrationForm') }}">Register</a>
        </li>
        <li>
            <a href="{{ action('Auth\AuthController@showLoginForm') }}">Login</a>
        </li>
    </ul>
</div>