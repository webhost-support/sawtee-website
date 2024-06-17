<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TagController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tags = Tag::withCount(['posts'])->latest()->paginate(10);
        return Inertia::render('Backend/Tag/Index', [
            'tags' => $tags,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Backend/Tag/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255'
        ]);

        $tag = Tag::create($validated);

        return redirect()->route('admin.tags.index');
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
    public function edit(Tag $tag)
    {
        return Inertia::render('Backend/Tag/Edit', ['tag' => $tag]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Tag $tag)
    {
        $tag->update($request->all());
        return redirect()->route('admin.tags.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tag $tag)
    {
        $tag->delete();
        return redirect()->route('admin.tags.index');
    }
}
