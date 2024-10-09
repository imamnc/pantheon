<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthenticationController extends Controller
{
    public function login()
    {
        return inertia('Auth/Login', [
            'page_info' => [
                'title' => 'Login'
            ]
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);

        $credentials = $request->only('email', 'password');

        if(!Auth::attempt($credentials)) {
            return back()->withErrors([
                'email' => 'The provided credentials do not match our records.',
            ]);
        }

        //regenerate session
        $request->session()->regenerate();

        //redirect route dashboard
        Inertia::share('auth', [
            'user' => Auth::user()
        ]);
        return redirect('/dashboard');
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/login');
    }
}
