<!DOCTYPE html>
<html>
    <head>
        <title>Laravel Boilerplate</title>

        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link href="{{ elixir('css/app.css') }}" rel="stylesheet" type="text/css" media="screen">
        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">

        <script type="text/javascript" src="/js/vendor.js" defer></script>
        <script type="text/javascript" src="{{ elixir('js/templates.js') }}" defer></script>
        <script type="text/javascript" src="{{ elixir('js/app.js') }}" defer></script>

        <base href="/" />
    </head>
    <body ng-app="Application">
        <ui-view></ui-view>
    </body>
</html>
