@extends('layouts.user')

@section('content')
    <header ui-view="navbar"></header>

    <div ui-view="sidebar" class="sidebar"></div>

    <div ui-view="content" class="content"></div>
@endsection