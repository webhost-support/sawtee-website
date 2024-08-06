<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $posts = app('db')->table('posts')->count();
        $publications = app('db')->table('publications')->count();
        $researchs = app('db')->table('research')->count();

        return Inertia::render('Backend/Dashboard', [
            'posts' => $posts,
            'publications' => $publications,
            'researchs' => $researchs
        ]);
    }
}
