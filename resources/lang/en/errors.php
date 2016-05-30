<?php

return [
    'json' => [
        'bad_request'       => 'Bad request, expected content-type application/json.'
    ],
    'jsonapi' => [
        'unsupported_media' => 'Please use application/vnd.api+json content-type header with not parameters.',
        'not_acceptable'    => 'Please use application/vnd.api+json accept headers only with no parameters.',
    ],
];