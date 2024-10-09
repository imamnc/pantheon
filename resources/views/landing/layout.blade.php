<!DOCTYPE html>
<html lang="en">

<head>
    <title>{{ env('APP_NAME') }} - Eprocurement Lite</title>
    <meta charset="utf-8" />
    <meta name="description" content="This is e-procurement lite By ITPI Technology" />
    <meta name="keywords" content="eprocurement, agora, itpi, eproc, eproc lite" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="{{ env('APP_NAME') }} - Eprocurement Lite" />
    <meta property="og:url" content="https://itpi.co.id" />
    <meta property="og:site_name" content="Keenthemes | Metronic" />
    <link rel="canonical" href="https://preview.itpi.co.id" />
    <link rel="shortcut icon" href="assets/media/logos/favicon.ico" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
    <link href="assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" />
    @vite('resources/css/app.scss')
    <script>
        // Frame-busting to prevent site from being loaded within a frame without permission (click-jacking)
        if (window.top != window.self) {
            window.top.location.replace(window.self.location.href);
        }
    </script>
</head>

<body id="kt_body" data-bs-spy="scroll" data-bs-target="#kt_landing_menu" class="bg-body position-relative">
    <script>
        var defaultThemeMode = "light";
        var themeMode;
        if (document.documentElement) {
            if (document.documentElement.hasAttribute("data-bs-theme-mode")) {
                themeMode = document.documentElement.getAttribute("data-bs-theme-mode");
            } else {
                if (localStorage.getItem("data-bs-theme") !== null) {
                    themeMode = localStorage.getItem("data-bs-theme");
                } else {
                    themeMode = defaultThemeMode;
                }
            }
            if (themeMode === "system") {
                themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            }
            document.documentElement.setAttribute("data-bs-theme", themeMode);
        }
    </script>

    <div class="d-flex flex-column flex-root">

        <div class="mb-0" id="home">
            <div class="bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom landing-dark-bg"
                style="background-image: url(assets/media/svg/illustrations/landing.svg)">
                {{-- Header --}}
                @include('landing.components.header')
                {{-- Hero --}}
                @yield('hero')
            </div>
            {{-- Curves --}}
            @if (request()->route()->getName() == 'landing.welcome')
                <div class="landing-curve landing-dark-color mb-10 mb-lg-20">
                    <svg viewBox="15 12 1470 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 11C3.93573 11.3356 7.85984 11.6689 11.7725 12H1488.16C1492.1 11.6689 1496.04 11.3356 1500 11V12H1488.16C913.668 60.3476 586.282 60.6117 11.7725 12H0V11Z"
                            fill="currentColor"></path>
                    </svg>
                </div>
            @endif
        </div>

        @yield('content')

        <!--begin::Footer Section-->
        @include('landing.components.footer')
        <!--end::Footer Section-->
    </div>

    {{-- Scroll Top --}}
    @include('landing.components.scrollTop')

    <script>
        var hostUrl = "assets/";
    </script>
    <script src="assets/plugins/global/plugins.bundle.js"></script>
    <script src="assets/js/scripts.bundle.js"></script>
    <script src="assets/plugins/custom/fslightbox/fslightbox.bundle.js"></script>
    <script src="assets/plugins/custom/typedjs/typedjs.bundle.js"></script>
    <script src="assets/js/custom/landing.js"></script>
</body>

</html>
