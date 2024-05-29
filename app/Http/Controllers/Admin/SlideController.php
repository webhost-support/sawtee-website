<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Slide;
use App\Models\Slider;
use Illuminate\Http\Request;
use Inertia\Inertia;


class SlideController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'nullable|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'slider_id' => 'required|numeric|exists:sliders,id',
        ]);
        $slide = Slide::create($validated);
        $slide->addMediaFromRequest('image')->toMediaCollection('slides');
        $slider = Slider::find($request->slider_id);
        return to_route('admin.sliders.edit',[ 'slider' => $slider], 303);
    }

    /**
     * Display the specified resource.
     */
    public function show(Slide $slide)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Slide $slide)
    {
        //

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Slide $slide)
    {
        $slide->update($request->all());
        $slider_id = $slide->slider_id;
        if ($request->hasFile('image')) {
            $slide->image()->delete();
            $slide->addMediaFromRequest('image')->toMediaCollection('slides');
        }
        $slider = Slider::find($slider_id);
        return to_route('admin.sliders.edit', ['slider' => $slider], 303);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Slide $slide)
    {
        $slider_id = $slide->slider_id;
        $slide->delete();
        return to_route('admin.sliders.edit', $slider_id);
    }
}
