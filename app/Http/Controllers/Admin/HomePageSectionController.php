<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\HomePageSection;
use App\Models\Section;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomePageSectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Backend/HomePageSection/Index', ['sections' => HomePageSection::get()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Backend/HomePageSection/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|unique:home_page_sections,name|max:100',
            'description' => 'nullable|string|max:255',
            'order' => 'nullable|numeric',
            'show' => 'required|boolean',
        ]);
        HomePageSection::create($validated);
        return to_route('admin.home-page-sections.index')->with('success', 'Section created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {

        return Inertia::render('Backend/HomePageSection/Edit', ['section' => HomePageSection::findOrFail($id)]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $section = HomePageSection::findOrFail($id);
        // $validated = $request->validate([
        //     'name' => 'required|string|max:100',
        //     'description' => 'nullable|string|max:255',
        //     'order' => 'nullable|numeric',
        //     'show' => 'required|boolean',
        // ]);
        $section->update($request->all());
        return redirect(route('admin.home-page-sections.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $section = HomePageSection::findOrFail($id);
        $section->delete();
        return redirect(route('admin.home-page-sections.index'));
    }
}
