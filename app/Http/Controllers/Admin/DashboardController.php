<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $posts = app('db')->table('posts')->count();
        $categories = app('db')->table('categories')->count();
        $publications = app('db')->table('publications')->count();
        $researchs = app('db')->table('research')->count();

        return Inertia::render('Backend/Dashboard', [
            'posts' => $posts,
            'categories' => $categories,
            'publications' => $publications,
            'researchs' => $researchs
        ]);
    }
}
