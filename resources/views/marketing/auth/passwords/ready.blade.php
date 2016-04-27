@extends('layouts.marketing')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="alert alert-success">
                	<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                	<strong>Yay!</strong> {{ $status }}
                </div>
            </div>
        </div>
    </div>
@endsection