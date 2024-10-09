@extends('storage::layouts.master')

@section('content')
    <h1>Hello World</h1>

    <p>Module: {!! config('storage.name') !!}</p>
@endsection
