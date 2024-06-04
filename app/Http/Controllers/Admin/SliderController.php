<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Slide;
use App\Models\Slider;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SliderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sliders = Slider::latest()->paginate(10);
        return Inertia::render('Backend/Slider/Index', ['sliders' => $sliders]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Backend/Slider/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|unique:sliders|max:255',
        ]);
        Slider::create($validated);
        return to_route('admin.sliders.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Slider $slider)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Slider $slider)
    {
        $slides = Slide::where('slider_id', $slider->id)->paginate();
        return Inertia::render('Backend/Slider/Edit', ['slider' => $slider, 'slides' => $slides]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Slider $slider, Slide $slide)
    {
        if ($request->hasFile('image')) {
            $slide->image()->delete();
            $slide->addMediaFromRequest('image')->toMediaCollection('slides');
        }
        $slider->update($request->all());
        return to_route('admin.sliders.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Slider $slider)
    {
        $slider->delete();
        return to_route('admin.sliders.index', 302);
    }
}
