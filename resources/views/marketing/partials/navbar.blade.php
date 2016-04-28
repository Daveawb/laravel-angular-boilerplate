<nav class="navbar">
    <a class="navbar-brand" href="{{ action('Marketing\WelcomeController@index') }}">Boilerplate</a>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" uib-collapse="navbar.isCollapsed">
        <!--<ul class="nav navbar-nav">-->
        <!--<li class="active"><a href="#">Link</a></li>-->
        <!--<li><a href="#">Link</a></li>-->
        <!--</ul>-->
        <ul class="nav navbar-nav navbar-right">
            <!-- Authentication Links -->
            @if (Auth::guest())
                <li><a href="{{ url('/login') }}">Login</a></li>
                <li><a href="{{ url('/register') }}">Register</a></li>
            @else
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                        {{ Auth::user()->name }} <span class="caret"></span>
                    </a>

                    <ul class="dropdown-menu" role="menu">
                        <li><a href="{{ url('/logout') }}"><i class="fa fa-btn fa-sign-out"></i>Logout</a></li>
                        <li><a href="{{ url('/admin') }}"><i class="fa fa-btn fa-cogs"></i>Admin</a></li>
                    </ul>
                </li>
            @endif
        </ul>
    </div><!-- /.navbar-collapse -->
</nav>