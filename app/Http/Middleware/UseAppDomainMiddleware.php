<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class UseAppDomainMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Check origin domain (ignore when origin is localhost)
        if ($request->getHost() != 'localhost' && env('DOMAIN_APP') != null) {
            if ($request->getHost() != env('DOMAIN_APP')) {
                $target = $request->getScheme() . '://' . env('DOMAIN_APP');
                $target = (substr($target, -1) == '/') ? $target . $request->path() : $target . '/' . $request->path();
                $target = ($request->path() == '/') ? substr($target, 0, -2) : $target;
                // Redirect to required domain if origin doesn't match
                return redirect()->away($target);
            }
        }

        return $next($request);
    }
}
