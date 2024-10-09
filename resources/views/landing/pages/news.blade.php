@extends('landing.layout')

@section('content')
    <div class="mb-n20 position-relative z-index-2 pt-15" style="background-color: #ecf0f1;">
        <div class="container">
            <div class="text-center">
                <h3 class="fs-2hx text-dark mb-5" id="clients">
                    Procurement News
                </h3>
                <div class="fs-5 text-muted fw-bold">
                    Here is the recent news of our procurement proccess
                </div>
            </div>

            <div class="row justify-content-center mt-5 mb-17">
                <div class="col-md-4">
                    <input type="search" class="form-control" placeholder="Search...">
                </div>
            </div>

            <div class="row g-lg-10 mb-10 mb-lg-20">
                @for ($i = 0; $i < 6; $i++)
                    <div class="col-lg-4">
                        <div class="card mb-md-0 mb-10">
                            <div class="card-body">
                                <div
                                    class="d-flex flex-column justify-content-between h-lg-100 px-10 px-lg-0 pe-lg-10 mb-15 mb-lg-0">
                                    <div class="mb-7">
                                        <div class="fs-2 fw-bold text-dark mb-3">
                                            Hello this is an example of procurement news {{ $i + 1 }}
                                        </div>
                                        <div class="rating mb-6">
                                            <i class="fa fa-calendar me-3 text-success"></i>
                                            <span class="text-dark">20 Mei 2024</span>
                                        </div>
                                        <div class="text-gray-500 fw-semibold fs-4">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, dolorem accusamus
                                            error
                                            cupiditate et magnam exercitationem beatae non quibusdam pariatur sunt,
                                            perspiciatis
                                            distinctio repudiandae eaque!
                                        </div>
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
                @endfor
                <div class="col-md-12 text-center">
                    <ul class="pagination">
                        <li class="page-item previous disabled">
                            <a href="#" class="page-link"><i class="previous"></i></a>
                        </li>
                        <li class="page-item "><a href="#" class="page-link">1</a></li>
                        <li class="page-item active"><a href="#" class="page-link">2</a></li>
                        <li class="page-item "><a href="#" class="page-link">3</a></li>
                        <li class="page-item "><a href="#" class="page-link">4</a></li>
                        <li class="page-item "><a href="#" class="page-link">5</a></li>
                        <li class="page-item "><a href="#" class="page-link">6</a></li>
                        <li class="page-item next">
                            <a href="#" class="page-link"><i class="next"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
@endsection
