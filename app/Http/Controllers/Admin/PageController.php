<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Page;
use File;
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
        $pages = Page::withCount('sections')->latest()->get();
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
     *
     * @param Request $request The HTTP request object.
     * @return \Illuminate\Http\RedirectResponse The redirect response.
     */
    public function store(Request $request)
    {
        $validated = $request->validate(['name' => 'required|string|unique:pages|max:255',
            'slug' => 'nullable|string|unique:pages|max:255',
            'content' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:255',
            'page_template' => 'nullable|string|max:255',
        ]);
        if (!$request->meta_title) {
            $validated["meta_title"] = $validated['name'];
        }


        $page = Page::create($validated);
        if ($request->image) {
            $page->addMediaFromRequest('image')->toMediaCollection('page-media');
        }

        if($request->file){
            $file = $request->file;
            $filename = $file->getClientOriginalName();
            $file->move(public_path('tmp'), $filename);
            $jsonData = File::json(public_path('tmp/'. $filename ));
            $page->pageData = $jsonData;
            $page->save();
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
     * @param Request $request The HTTP request object.
     * @param Page $page The model to update.
     * @return \Illuminate\Http\RedirectResponse The redirect response.
     */
    public function update(Request $request, Page $page)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048','meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:255',
            'page_template' => 'nullable|string|max:255',

        ]);
        if (!$request->meta_title) {
            $validated["meta_title"] = $validated['name'];
        }
        if ($request->image) {
            $page->addMediaFromRequest('image')->toMediaCollection('page-media');
        }
        if (!$request->image) {
            $media = $page->getFirstMedia('page-media');
            $media?->delete();
        }
        if($request->file){
            $file = $request->file;
            $filename = $file->getClientOriginalName();
            $file->move(public_path('tmp'), $filename);
            $jsonData = File::json(public_path('tmp/'. $filename ));
            $page->pageData = $jsonData;
            $page->save();
        }
        $page->update($validated);
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
