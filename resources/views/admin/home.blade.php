@section('scripts')
    <script type="text/javascript" src="/js/vendor.js" defer></script>
    <script type="text/javascript" src="{{ elixir('js/templates.js') }}" defer></script>
    <script type="text/javascript" src="{{ elixir('js/app.js') }}" defer></script>
@endsection

@section('content')
    <ui-view></ui-view>
@endsection
