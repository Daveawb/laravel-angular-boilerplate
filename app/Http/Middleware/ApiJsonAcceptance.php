<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Response;

class ApiJsonAcceptance
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request->getContentType() !== 'json') {
            return response('Bad request.', Response::HTTP_BAD_REQUEST);
        }

        return $next($request);
    }
}
