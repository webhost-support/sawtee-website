<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Publication;
use App\Models\Category;
use App\Models\File;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class PublicationController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $publications = Publication::with(['category'])
      ->latest()
      ->paginate(10);
    return Inertia::render('Backend/Publication/Index', ['publications' => $publications]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    $categories = Category::where('type', 'publication')->get()->all();
    return Inertia::render('Backend/Publication/Create', ['categories' => $categories]);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $validated = $request->validate([
      'category_id' => 'required|numeric|exists:categories,id',
      'title' => 'required|string|max:255',
      'slug' => 'nullable|string|unique:pubications|max:255',
      'subtitle' => 'nullable|string|max:255',
      'description' => 'nullable|string|max:2000',
      'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
      'file' => 'required|file|mimes:pdf,doc,docx,ppt,pptx|max:10240',
    ]);
    $slug = $validated['title'] . ' ' . $validated['subtitle'];

    $validated['slug'] = Str::slug($slug, '-');
    $publication = Publication::create($validated);
    if ($request->hasFile('image')) {
      $publication->addMediaFromRequest('image')->toMediaCollection('publication_featured_image');
    }

    if ($request->file('file')) {
      $name = $request->file('file')->getClientOriginalName();
      $path = $request->file('file')->move(public_path('publications'), $name);
      $file = new File();
      $file->path = $path;
      $file->name = $name;
      $publication->file()->save($file);
    }
    return redirect()->route('admin.publications.index');
  }

  /**
   * Display the specified resource.
   */
  public function show(Publication $publication)
  {
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Publication $publication)
  {
    $publication->load('media', 'file');
    $categories = Category::where('type', 'publication')->get();
    return Inertia::render('Backend/Publication/Edit', ['publication' => $publication, 'categories' => $categories]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Publication $publication)
  {
    $validated = $request->validate([
      'category_id' => 'required|numeric|exists:categories,id',
      'title' => 'required|string|max:255',
      'slug' => 'nullable|string|unique:pubications|max:255',
      'subtitle' => 'nullable|string|max:255',
      'description' => 'nullable|string|max:2000',
    ]);
    $slug = $validated['title'] . ' ' . $validated['subtitle'];
    $validated['slug'] = Str::slug($slug, '-');

    if ($request->hasFile('image')) {
      $publication->addMediaFromRequest('image')->toMediaCollection('publication_featured_image');
    }
    if ($request->file('file')) {
      $publication->file()->delete();
      $name = $request->file('file')->getClientOriginalName();
      $path = $request->file('file')->move(public_path('publications'), $name);
      $file = new File();
      $file->path = $path;
      $file->name = $name;
      $publication->file()->save($file);
    }
    $publication->update($request->all());

    return redirect()->route('admin.publications.index');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Publication $publication)
  {
    $publication->delete();
    return redirect()->route('admin.publications.index');
  }
}
