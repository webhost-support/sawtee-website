<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\PostRequest;
use App\Models\Category;
use App\Models\Theme;
use App\Models\Post;
use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;



class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::with(['category', 'media', 'tags', 'theme'])->idDescending()->simplePaginate(1000);
        return Inertia::render('Backend/Post/Index', [
            'posts' => $posts
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Backend/Post/Create',[
            'categories' => Category::where('type', 'post')->get(),
            'themes' => Theme::all(),
            'tags' => Tag::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PostRequest $request)
    {

        $validated = $request->validated();
        $validated['title']=Str::of($validated['title'])->squish();
        $validated['slug'] = Str::slug($validated['title'], '-');
        $validated['meta_title'] = $validated['title'];
        $post = Post::create($validated);
        if ($request->has('tags')) {
            $post->tags()->attach($request->tags);
        }
        if ($request->hasFile('image')) {
            $post->addMediaFromRequest('image')->toMediaCollection('post-featured-image');
        }
        if ($request->hasFile('file')) {
            $post->addMediaFromRequest('file')->toMediaCollection('post-files');
        }
        return redirect()->route('admin.posts.index');
    }

    /**
     * Display the specified resource.
     */
    public function show($category, $slug)
    {
        $post = Post::with('category')->where('slug', $slug)->first();
        return Inertia::render('Frontend/Post', ['post' => $post]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        $categories = Category::where('type', 'post')->get();
        $tags = Tag::all();
        $themes = Theme::all();
        $featured_image = $post->getFirstMediaUrl('post_featured_image');
        $file = $post->getMedia('post-files');
        return Inertia::render('Backend/Post/Edit', ['post' => $post->load('tags'), 'categories' => $categories, 'tags' => $tags, 'themes' => $themes, 'featured_image' => $featured_image, 'file' => $file]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {

        $validated = $request->all();
        $validated['slug'] = Str::slug($validated['title'], '-');
         if ($request->has('tags')) {
            $post->tags()->sync($request->tags);
        }
        if ($request->hasFile('image')) {
            $post->addMediaFromRequest('image')->toMediaCollection('post-featured-image');
        }
        if ($request->hasFile('file')) {
            $post->addMediaFromRequest('file')->toMediaCollection('post-files');
        }
        $post->update($validated);
    return redirect()->route('admin.posts.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $post->delete();
        return redirect()->route('admin.posts.index');
    }

    public function uploadmedia(Request $request, Post $post)
    {
        if($request->hasFile('image')){
            $post->addMediaFromRequest('image')->toMediaCollection('post-content-media');
            return redirect()->back();
        }
    }
}
