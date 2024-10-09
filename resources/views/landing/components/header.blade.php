<div class="landing-header" data-kt-sticky="true" data-kt-sticky-name="landing-header"
    data-kt-sticky-offset="{default: '200px', lg: '300px'}">
    <div class="container">
        <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center flex-equal">
                <button class="btn btn-icon btn-active-color-primary me-3 d-flex d-lg-none" id="kt_landing_menu_toggle">
                    <i class="ki-duotone ki-abstract-14 fs-2hx">
                        <span class="path1"></span>
                        <span class="path2"></span>
                    </i>
                </button>
                <a href="{{ route('landing.welcome') }}">
                    <img alt="Logo" src="assets/media/logos/landing.svg" class="logo-default h-25px h-lg-30px" />
                    <img alt="Logo" src="assets/media/logos/landing-dark.svg"
                        class="logo-sticky h-20px h-lg-25px" />
                </a>
            </div>
            <div class="d-lg-block" id="kt_header_nav_wrapper">
                <div class="d-lg-block p-5 p-lg-0" data-kt-drawer="true" data-kt-drawer-name="landing-menu"
                    data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true"
                    data-kt-drawer-width="200px" data-kt-drawer-direction="start"
                    data-kt-drawer-toggle="#kt_landing_menu_toggle" data-kt-swapper="true"
                    data-kt-swapper-mode="prepend"
                    data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav_wrapper'}">
                    <div class="menu menu-column flex-nowrap menu-rounded menu-lg-row menu-title-gray-600 menu-state-title-primary nav nav-flush fs-5 fw-semibold"
                        id="kt_landing_menu">
                        <div class="menu-item">
                            <a class="menu-link nav-link @if (request()->route()->getName() == 'landing.welcome') active @endif py-3 px-4 px-xxl-6"
                                href="{{ route('landing.welcome') }}" data-kt-drawer-dismiss="true">
                                Home
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link nav-link @if (request()->route()->getName() == 'landing.news') active @endif py-3 px-4 px-xxl-6"
                                href="{{ route('landing.news') }}" data-kt-drawer-dismiss="true">
                                Procurement News
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link nav-link @if (request()->route()->getName() == 'landing.user-guides') active @endif py-3 px-4 px-xxl-6"
                                href="{{ route('landing.user-guides') }}" data-kt-drawer-dismiss="true">
                                Manual Books
                            </a>
                        </div>
                        <div class="menu-item">
                            <a class="menu-link nav-link @if (request()->route()->getName() == 'landing.contact') active @endif py-3 px-4 px-xxl-6"
                                href="{{ route('landing.contact') }}" data-kt-drawer-dismiss="true">
                                Contact
                            </a>
                        </div>
                    </div>
                    <!--end::Menu-->
                </div>
            </div>
            <!--end::Menu wrapper-->
            <!--begin::Toolbar-->
            <div class="flex-equal text-end ms-1">
                <a href="{{ route('login') }}" class="btn btn-primary">
                    @if (auth()->check())
                        {{ auth()->user()->name }}
                    @else
                        Sign In
                    @endif
                </a>
            </div>
            <!--end::Toolbar-->
        </div>
        <!--end::Wrapper-->
    </div>
    <!--end::Container-->
</div>
