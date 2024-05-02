<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title inertia>{{ config('app.name', 'SAWTEE') }}</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />

        {{-- Loads Inter --}}
        @googlefonts

        @googlefonts('Roboto')

        {{-- Loads IBM Plex Mono --}}
        @googlefonts('code')
        <!-- Load nprogress style -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
     </head>

    <body>
        @inertia
    </body>

</html>
