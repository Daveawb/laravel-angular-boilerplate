@extends('layouts.user')

@section('content')
    <header ui-view="navbar"></header>

    <div ui-view="content" class="content" min-height></div>
@endsection