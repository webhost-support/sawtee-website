<?php

namespace App\Http\Middleware;

use App\Models\Menu;
use App\Models\MenuItem;
use App\Models\Team;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $experts = Team::orderBy('order', 'ASC')->take(6)->get();
        $primaryMenu = MenuItem::with('children')->where('menu_id', Menu::where('location', 'header')->first()->id)->where("parent_id", null)->orderBy('order', 'ASC')->get();
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],
            'flash' => [
                'message' => fn() => $request->session()->get('message')
            ],
            'experts' => fn() => $experts->load('media'),
            'primaryMenu' => fn() => $primaryMenu,
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
        ]);
    }
}
