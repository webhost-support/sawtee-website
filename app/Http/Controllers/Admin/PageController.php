<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Page;
use Inertia\Inertia;
use Illuminate\Support\Str;

// use Jawira\CaseConverter\Convert;

class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pages = Page::withCount('sections')->get();
        return Inertia::render("Backend/Page/Index", ['pages' => $pages]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Backend/Page/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|unique:pages|max:255|',
            'slug' => 'nullable|string|unique:pages|max:255',
            'content' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:255',
        ]);
        $validated["slug"] = Str::slug($validated['name'], '-');
        if ($request->meta_title == null) {
            $validated["meta_title"] = $validated['name'];
        }
        $page = Page::create($validated);
        if ($request->hasFile('image')) {
            $page->addMediaFromRequest('image')->toMediaCollection('page-media');
        }
        return redirect(route('admin.pages.index'));
    }





    /**
     * Display the specified resource.
     */
    public function show()
    {

        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Page $page)
    {
        return Inertia::render('Backend/Page/Edit', ['page' => $page->load('media')]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Page $page)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:255',
        ]);
        $validated["slug"] = Str::slug($validated['name'], '-');
        if ($request->meta_title == null) {
            $validated["meta_title"] = $validated['name'];
        }
        if ($request->hasFile('image')) {
            $page->addMediaFromRequest('image')->toMediaCollection('page-media');
        }
        $page->update($request->all());
        return redirect(route('admin.pages.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Page $page)
    {
        $page->delete();
        return redirect(route('admin.pages.index'));
    }
}
