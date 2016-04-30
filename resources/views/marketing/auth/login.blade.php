@extends('layouts.marketing')

@section('navbar')
@endsection

@section('content')
    <div class="container-flex-center">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12 col-lg-8 col-lg-offset-2">
                    <div class="panel panel-default panel-login">
                        {{--<div class="panel-heading">Login</div>--}}
                        {{--<div class="panel-body">--}}
                        <div class="branding">
                            <h1>Boilerplate</h1>
                        </div>
                        <div class="login">

                            <div class="row spacer-xs-12">
                                <div class="col-sm-12 text-center">
                                    <span class="h2">Login with social media</span>
                                </div>
                            </div>

                            <div class="row spacer-xs-12">
                                <div class="social-login col-sm-12 text-center spacer-12">
                                    <button class="btn btn-facebook"><i class="fa fa-fw fa-facebook-official fa-2x"></i></button>
                                    <button class="btn btn-google-plus"><i class="fa fa-fw fa-google-plus fa-2x"></i></button>
                                    <button class="btn btn-twitter"><i class="fa fa-fw fa-twitter fa-2x"></i></button>
                                </div>
                            </div>
                            <div class="row spacer-xs-12">
                                <div class="col-sm-12 text-center"><span class="h2">Or</span></div>
                            </div>

                            <div class="row">
                                <div class="col-xs-12 col-sm-8 col-sm-offset-2">
                                    <form class="form-horizontal" role="form" method="POST" action="{{ url('/login') }}">
                                        {!! csrf_field() !!}

                                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                                            <input type="email" class="form-control" name="email" value="{{ old('email') }}" placeholder="Email address">

                                            @if ($errors->has('email'))
                                                <span class="help-block">
                                                <strong>{{ $errors->first('email') }}</strong>
                                            </span>
                                            @endif
                                        </div>

                                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                                            <input type="password" class="form-control" name="password" placeholder="Password">

                                            @if ($errors->has('password'))
                                                <span class="help-block">
                                                <strong>{{ $errors->first('password') }}</strong>
                                            </span>
                                            @endif
                                        </div>

                                        <div class="form-group">
                                            <div class="checkbox">
                                                <label>
                                                    <input type="checkbox" name="remember"> Remember Me
                                                </label>
                                                <button type="submit" class="btn btn-primary pull-right">
                                                    <i class="fa fa-btn fa-sign-in"></i>Login
                                                </button>
                                                <div class="clearfix"></div>
                                            </div>
                                        </div>
                                    </form>

                                    <div class="row">
                                        <div class="col-sm-12 text-center">
                                            <a class="btn btn-link" href="{{ url('/password/reset') }}">Forgot Your Password?</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        {{--</div>--}}
                    </div>
                </div>
            </div>
        </div></div>
@endsection
