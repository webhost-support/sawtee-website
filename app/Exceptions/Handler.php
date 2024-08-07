<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Inertia\Inertia;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * A list of error messages
     *
     * @var array<int, string>
     */
    protected $messages = [
        500 => 'Something went wrong',
        503 => 'Service unavailable',
        404 => 'Page Not found',
        403 => 'Not authorized',
        419 => 'Page expired, please try again.'
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //


        });
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Throwable
     */

    public function render($request, Throwable $e)
    {
        $response = parent::render($request, $e);
        $status = $response->getStatusCode();

        if (app()->environment(['local', 'testing', 'development'])) {
            return $response;
        }

        if (! array_key_exists($status, $this->messages)) {
            return $response;
        }

        if (! $request->isMethod('GET')) {
            return back()
                ->setStatusCode($status)
                ->with('error', $this->messages[$status]);
        }

        return Inertia::render('Errors/Error', [
            'status' => $status,
            'message' => $this->messages[$status],
        ])
            ->toResponse($request)
            ->setStatusCode($status);
    }





}
