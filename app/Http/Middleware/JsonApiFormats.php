<?php

namespace App\Http\Middleware;

use Closure;

/**
 * Class JsonApiFormats
 * @package App\Http\Middleware
 */
class JsonApiFormats
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
        // Set the content-type header key
        $request->setFormat('jsonapi:v1', ['application/vnd.api+json']);

        return $next($request);
    }
}
