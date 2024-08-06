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
        $themes = Theme::withCount(['posts'])->latest()->get();
        return Inertia::render('Backend/Theme/Index', ['themes' => $themes]);
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
     * Update the specified resource in storage.
     */
    public function update(Request $request, Theme $theme)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
        ]);
        $theme->update($validated);
        return redirect()->route('admin.themes.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Theme $theme)
    {
        $theme->delete();
        return redirect()->route('admin.themes.index');
    }
}
