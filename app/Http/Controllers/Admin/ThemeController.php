<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Theme;
use Illuminate\Http\Request;
use App\Http\Requests\ThemeRequest;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;

class ThemeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $themes = Theme::withCount(['posts'])->latest()->paginate(10);
        return Inertia::render('Backend/Theme/Index', ['themes' => $themes]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Backend/Theme/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ThemeRequest $request): RedirectResponse
    {
        Theme::create($request->validated());
        return redirect()->route('admin.themes.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Theme $theme)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Theme $theme)
    {
        return Inertia::render('Backend/Theme/Edit', ['theme' => $theme]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Theme $theme)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Theme $theme)
    {
        //
    }
}
