<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth.user' => fn () => Auth::user() ? Auth::user() : null,
            'route.current' => fn () => $request->route()->getName(),
            'flash' => [
                'message' => fn () => $request->session()->get('message')
            ]
        ]);
    }

    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Closure  $next
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function handle($request, Closure $next)
    {
        // Get current route name
        $currentRoute = explode('.', $request->route()->getName());
        // Overide default root view
        if (isset($currentRoute[0])) {
            if ($currentRoute[0] == 'auth') {
                $this->rootView = 'auth';
            } else {
                $this->rootView = 'app';
            }
        } else {
            $this->rootView = 'app';
        }

        return parent::handle($request, $next);
    }
}
