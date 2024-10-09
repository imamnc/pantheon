<!DOCTYPE html>
<html lang="en">

<head>
    <title>{{ env('APP_NAME') }} | ITPI Eprocurement Lite</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta charset="utf-8" />
    <meta name="description" content="Agora is a Lite Version of E-Procurement System by ITPI Technology" />
    <meta name="keywords" content="agora, eprocurement, itpi" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Agora - E-Procurement Lite By ITPI Technology" />
    <meta property="og:url" content="https://itpi.co.id" />
    <meta property="og:site_name" content="Agora | Eprocurement Lite" />
    <link rel="canonical" href="https://itpi.co.id" />
    <link rel="shortcut icon" href="assets/media/logos/favicon.ico" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700" />
    <link href="{{ asset('assets/plugins/global/plugins.bundle.css') }}" rel="stylesheet" type="text/css" />
    @vite('resources/css/app.scss')
    <script>
        // Frame-busting to prevent site from being loaded within a frame without permission (click-jacking)
        if (window.top != window.self) {
            window.top.location.replace(window.self.location.href);
        }
    </script>
    @vite('resources/ts/app.tsx')
    @inertiaHead
</head>

<body id="kt_body">

    @include('components.ThemeControl')

    @inertia

    @include('components.ScrollTop')

    <script>
        var hostUrl = "assets/";
    </script>
    <script src="{{ asset('assets/plugins/global/plugins.bundle.js') }}"></script>
    <script src="{{ asset('assets/js/scripts.bundle.js') }}"></script>
    <script src="{{ asset('assets/js/widgets.bundle.js') }}"></script>
    <script src="{{ asset('assets/js/custom/widgets.js') }}"></script>
    <script src="{{ asset('assets/js/custom/apps/chat/chat.js') }}"></script>
    <script src="{{ asset('assets/js/custom/utilities/modals/users-search.js') }}"></script>
</body>

</html>
