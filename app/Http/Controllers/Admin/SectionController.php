<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Image;
use Illuminate\Http\Request;
use App\Models\Section;
use App\Models\Page;
use Inertia\Inertia;
use Intervention\Image\Facades\Image as ResizeImage;

class SectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sections = Section::with('page')->orderBy('id', 'DESC')->simplePaginate(50);
        // dd($categories);
        return Inertia::render('Backend/Section/Index', [
            'sections' => $sections
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $pages = Page::all();
        return Inertia::render('Backend/Section/Create', ['sections' => Section::all(), 'pages' => $pages ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'description' => 'nullable|string',
            'parent_id' => 'nullable|numeric|exists:sections,id',
            'page_id' => 'nullable|numeric|exists:pages,id',
            'order' => 'nullable|numeric',
            'image' => 'nullable|image|mimes:png,jpg,jpeg,webp|max:2048'
        ]);
        $section = Section::create($validatedData);
        if ($request->hasFile('image'))
            $section->addMediaFromRequest('image')->toMediaCollection('featured-image');
        return redirect()->route('admin.sections.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Section $section)
    {
       //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Section $section)
    {
        $pages = Page::all();
        $sections = Section::all();
        return Inertia::render('Backend/Section/Edit', [
            'section' => $section->load('media'),
            'sections' => $sections,
            'pages' => $pages
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Section $section)
    {
        if ($request->hasFile('image'))
            $section->addMediaFromRequest('image')->toMediaCollection('section-media');
        $section->update($request->all());
        return redirect()->route('admin.sections.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Section $section)
    {
        $section->delete();

        return redirect()->route('admin.sections.index');
    }
}
