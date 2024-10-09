@extends('landing.layout')

@section('content')
    <div class="card-body p-lg-17">

        <div class="row mb-3">
            <div class="col-md-6 pe-lg-10">
                <form action="" class="form mb-15 fv-plugins-bootstrap5 fv-plugins-framework" method="post"
                    id="kt_contact_form">
                    <h1 class="fw-bold text-dark mb-9">Send Us Email</h1>
                    <div class="row mb-5">
                        <div class="col-md-6 fv-row fv-plugins-icon-container">
                            <label class="fs-5 fw-semibold mb-2">Name</label>
                            <input type="text" class="form-control form-control-solid" placeholder="Ex: John"
                                name="name">
                            <div
                                class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
                            </div>
                        </div>
                        <div class="col-md-6 fv-row fv-plugins-icon-container">
                            <label class="fs-5 fw-semibold mb-2">Email</label>
                            <input type="text" class="form-control form-control-solid" placeholder="Ex: john@mail.com"
                                name="email">
                            <div
                                class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-column mb-5 fv-row">
                        <label class="fs-5 fw-semibold mb-2">Subject</label>
                        <input class="form-control form-control-solid" placeholder="Type your subject" name="subject">
                    </div>
                    <div class="d-flex flex-column mb-10 fv-row fv-plugins-icon-container">
                        <label class="fs-6 fw-semibold mb-2">Message</label>
                        <textarea class="form-control form-control-solid" rows="6" name="message" placeholder="Type Message"></textarea>
                        <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary mt-n5" id="kt_contact_submit_button">
                        <span class="indicator-label">Send Feedback</span>
                        <span class="indicator-progress">
                            Please wait... <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                        </span>
                    </button>
                </form>
            </div>

            <div class="col-md-6 ps-lg-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5632622658727!2d112.76849197449357!3d-7.290427592717002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa49327e31a3%3A0xaedd3276000a7383!2sITPI%20Technology!5e0!3m2!1sid!2sid!4v1705912573393!5m2!1sid!2sid"
                    height="450" style="border:0; width:100%;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

        <div class="row g-5 mb-5 mb-lg-15">
            <div class="col-sm-6 pe-lg-10">
                <div class="bg-light card-rounded d-flex flex-column flex-center flex-center p-10 h-100">
                    <i class="ki-duotone ki-briefcase fs-3tx text-primary">
                        <span class="path1"></span>
                        <span class="path2"></span>
                    </i>
                    <h1 class="text-dark fw-bold my-5">Let’s Speak</h1>
                    <div class="text-gray-700 fw-semibold fs-2">(031) 5979-7538</div>
                </div>
            </div>
            <div class="col-sm-6 ps-lg-10">
                <div class="text-center bg-light card-rounded d-flex flex-column flex-center p-10 h-100">
                    <i class="ki-duotone ki-geolocation fs-3tx text-primary">
                        <span class="path1"></span>
                        <span class="path2"></span>
                    </i>
                    <h1 class="text-dark fw-bold my-5">Our Head Office</h1>
                    <div class="text-gray-700 fs-3 fw-semibold">Jl. Manyar Indah Raya No.7b, Menur Pumpungan, Kec. Sukolilo,
                        Surabaya, Jawa Timur 60118</div>
                </div>
            </div>
        </div>

    </div>
@endsection
