@extends('landing.layout')

@inject('carbon', '\Carbon\Carbon')

@section('hero')
    <div class="d-flex flex-column flex-center w-100 min-h-350px min-h-lg-500px px-9">
        {{-- Main Content --}}
        <div class="text-center mb-5 mb-lg-10 py-10 py-lg-20">
            <h1 class="text-white lh-base fw-bold fs-2x fs-lg-3x mb-15">
                Handling Procurement Process More Easy With <br>
                <span
                    style="background: linear-gradient(to right, #12CE5D 0%, #FFD80C 100%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;">
                    <span id="kt_landing_hero_text">Agora Eprocurement Lite</span>
                </span>
            </h1>
            <a href="" class="btn btn-warning text-dark">Register Vendor</a>
        </div>

        {{-- Clients --}}
        <div class="d-flex flex-center flex-wrap position-relative px-5">
            <div class="d-flex flex-center m-3 m-md-6" data-bs-toggle="tooltip" title="Fujifilm">
                <img src="assets/media/svg/brand-logos/fujifilm.svg" class="mh-30px mh-lg-40px" alt="client" />
            </div>
            <div class="d-flex flex-center m-3 m-md-6" data-bs-toggle="tooltip" title="Vodafone">
                <img src="assets/media/svg/brand-logos/vodafone.svg" class="mh-30px mh-lg-40px" alt="client" />
            </div>
            <div class="d-flex flex-center m-3 m-md-6" data-bs-toggle="tooltip" title="KPMG International">
                <img src="assets/media/svg/brand-logos/kpmg.svg" class="mh-30px mh-lg-40px" alt="client" />
            </div>
            <div class="d-flex flex-center m-3 m-md-6" data-bs-toggle="tooltip" title="Nasa">
                <img src="assets/media/svg/brand-logos/nasa.svg" class="mh-30px mh-lg-40px" alt="client" />
            </div>
            <div class="d-flex flex-center m-3 m-md-6" data-bs-toggle="tooltip" title="Aspnetzero">
                <img src="assets/media/svg/brand-logos/aspnetzero.svg" class="mh-30px mh-lg-40px" alt="client" />
            </div>
            <div class="d-flex flex-center m-3 m-md-6" data-bs-toggle="tooltip" title="AON - Empower Results">
                <img src="assets/media/svg/brand-logos/aon.svg" class="mh-30px mh-lg-40px" alt="client" />
            </div>
            <div class="d-flex flex-center m-3 m-md-6" data-bs-toggle="tooltip" title="Hewlett-Packard">
                <img src="assets/media/svg/brand-logos/hp-3.svg" class="mh-30px mh-lg-40px" alt="client" />
            </div>
            <div class="d-flex flex-center m-3 m-md-6" data-bs-toggle="tooltip" title="Truman">
                <img src="assets/media/svg/brand-logos/truman.svg" class="mh-30px mh-lg-40px" alt="client" />
            </div>
        </div>
    </div>
@endsection

@section('content')
    <div class="mb-n10 mb-lg-n20 z-index-2">
        <div class="container">
            <div class="text-center mb-17">
                <h3 class="fs-2hx text-dark mb-5" id="how-it-works" data-kt-scroll-offset="{default: 100, lg: 150}">
                    Why should you use <strong class="text-primary">Agora?</strong>
                </h3>
                <div class="fs-5 text-muted fw-bold">The following is a description of the advantages of the Agora app</div>
            </div>

            <div class="row w-100 gy-10 mb-md-20 pb-10">
                <div class="col-md-4 px-5">
                    <div class="text-center mb-10 mb-md-0">
                        <img src="assets/media/illustrations/sigma-1/2.png" class="mh-125px mb-9" alt="" />
                        <div class="d-flex flex-center mb-5">
                            <div class="fs-5 fs-lg-3 fw-bold text-dark">Powerfull Features</div>
                        </div>
                        <div class="fw-semibold fs-6 fs-lg-4 text-muted px-md-4">
                            Agora have rich features for handling all procurement transactions
                        </div>
                    </div>
                </div>

                <div class="col-md-4 px-5">
                    <div class="text-center mb-10 mb-md-0">
                        <img src="assets/media/illustrations/sigma-1/8.png" class="mh-125px mb-9" alt="" />
                        <div class="d-flex flex-center mb-5">
                            <div class="fs-5 fs-lg-3 fw-bold text-dark">Great UI/UX</div>
                        </div>
                        <div class="fw-semibold fs-6 fs-lg-4 text-muted px-md-4">
                            Agora have responsive UI and Good UX, so you can access it on all devices easily
                        </div>
                    </div>
                </div>

                <div class="col-md-4 px-5">
                    <div class="text-center mb-10 mb-md-0">
                        <img src="assets/media/illustrations/sigma-1/12.png" class="mh-125px mb-9" alt="" />
                        <div class="d-flex flex-center mb-5">
                            <div class="fs-5 fs-lg-3 fw-bold text-dark">Simple Flows</div>
                        </div>
                        <div class="fw-semibold fs-6 fs-lg-4 text-muted px-md-4">
                            Agora give you a very easy flow with simple step to bid tender
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-20 mb-n20 position-relative z-index-2 pt-15" style="background-color: #ecf0f1;">
        <div class="container">
            <div class="text-center mb-17">
                <h3 class="fs-2hx text-dark mb-5" id="clients" data-kt-scroll-offset="{default: 125, lg: 150}">
                    Procurement News
                </h3>
                <div class="fs-5 text-muted fw-bold">
                    Here is the recent news of our procurement proccess
                </div>
            </div>

            <div class="row g-lg-10 mb-10 mb-lg-20">
                @foreach ($news as $nws)
                    <div class="col-lg-4">
                        <div class="card mb-md-0 mb-10 h-100">
                            <div class="card-body">
                                <div
                                    class="d-flex flex-column justify-content-between h-lg-100 px-10 px-lg-0 pe-lg-10 mb-15 mb-lg-0">
                                    <div class="mb-7">
                                        <div class="fs-2 fw-bold text-dark mb-3">
                                            {{ $nws->title }}
                                        </div>
                                        <div class="rating mb-6">
                                            <i class="fa fa-calendar me-3 text-success"></i>
                                            <span
                                                class="text-dark">{{ $carbon::parse($nws->created_at)->format('d-m-Y H:i') }}</span>
                                        </div>
                                        <div class="text-gray-500 fw-semibold fs-4">{{ $nws->description }}</div>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <div class="symbol symbol-circle symbol-50px me-5">
                                            <img src="assets/media/avatars/300-1.jpg" alt="author" />
                                        </div>
                                        <div class="flex-grow-1">
                                            <a href="#" class="text-dark fw-bold text-hover-primary fs-6">Kacun</a>
                                            <span class="text-muted d-block fw-bold">Procurement Lead</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
                <div class="col-md-12 text-center">
                    <a href="" class="btn btn-primary">
                        <span class="fw-bold">See More News</span>
                        <i class="fa fa-chevron-right ms-3"></i>
                    </a>
                </div>
            </div>

            <div class="d-flex flex-stack flex-wrap flex-md-nowrap card-rounded shadow p-8 p-lg-12 mb-n5 mb-lg-n15"
                style="background: linear-gradient(90deg, #20AA3E 0%, #03A588 100%);">
                <div class="my-2 me-5">
                    <div class="fs-1 fs-lg-2qx fw-bold text-white mb-2">
                        Let's Register Your Vendor Here, <span class="fw-normal">Earn More Project!</span>
                    </div>
                    <div class="fs-6 fs-lg-5 text-white fw-semibold opacity-75">
                        Join over 100,000 vendor to get more project flows
                    </div>
                </div>
                <!--end::Content-->
                <!--begin::Link-->
                <a href="" class="btn btn-lg btn-outline border-2 btn-outline-white text-white flex-shrink-0 my-2">
                    Register Vendor
                </a>
                <!--end::Link-->
            </div>
            <!--end::Highlight-->
        </div>
    </div>
@endsection
