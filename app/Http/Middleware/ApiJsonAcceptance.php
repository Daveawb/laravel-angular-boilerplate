<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Lang;

class ApiJsonAcceptance
{
    /**
     * Media type for JSON API v1
     */
    const JSON_API = 'application/vnd.api+json';

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // JSON API Acceptance with Content-Type header
        if ($request->getContentType() === 'jsonapi:v1' and false !== strpos($request->header('content-type'), ';')) {
            return response(Lang::get('errors.jsonapi.unsupported_media'), Response::HTTP_UNSUPPORTED_MEDIA_TYPE);
        }

        // Standard JSON request
        if ($request->getContentType() !== 'json' and $request->getContentType() !== 'jsonapi:v1') {
            return response(Lang::get('errors.json.bad_request'), Response::HTTP_BAD_REQUEST);
        }

        // JSON API Acceptance with Accept header
        foreach($request->getAcceptableContentTypes() as $contentType) {
            if ($contentType === self::JSON_API and strpos($request->header('accept'), ';')) {
                return response(Lang::get('errors.jsonapi.not_acceptable'), Response::HTTP_NOT_ACCEPTABLE);
            }
        }

        return $next($request);
    }
}
