<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Menu;
use App\Models\MenuItem;
use App\Models\Page;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() {
        return Inertia::render('Backend/Menu/Index', ['menus' => Menu::all()]);
    }

    public function manage($id = null)
    {
        $desiredMenu = $id ? Menu::where('id', $id)->firstOrFail() : Menu::orderby('id', 'DESC')->first();
        $menu_items = $desiredMenu ? Menuitem::with(['children' ])->where('menu_id', $desiredMenu->id)->orderBy('order', 'ASC')->get() : null;

        // $categories =
        // dd($menu_items);
        return Inertia::render('Backend/Menu/ManageMenus', [
            'categories' => Category::with(['parent'])->get(),
            'pages' => Page::all(),
            'menus' => Menu::all(),
            'desiredMenu' => $desiredMenu,
            'menuItems' => $menu_items,
        ]);
    }

    public function addMenuItemToMenu(Request $request)
    {
        $menu_id = $request->menu_id;
        $validated = $request->validate([
            'menu_id' => 'numeric',
            'name' => 'string|max:255',
            'title' => 'string|max:255',
            'url' => 'nullable|string',
            'order' => 'nullable|numeric',
            'parent_id' => 'nullable|numeric',
        ]);
        MenuItem::create($validated);
        return redirect()->route('admin.manage.menus', $menu_id);
    }

    public function editMenuItem(Request $request, $id)
    {
        // dd($id);
        $menuItem = MenuItem::find($id);
        $menuItem->update($request->all());
        return redirect()->route('admin.manage.menus', $menuItem->menu_id);
    }

    public function deleteMenuItem($id)
    {
        // dd($id);
        $menuItem = MenuItem::find($id);
        $menuItemChildrens = MenuItem::where('parent_id', $menuItem->id)->get();
        foreach ($menuItemChildrens as $menuItemChildren) {
            $menuItemChildren->delete();
        }
        $menu_id = $menuItem->menu_id;
        $menuItem->delete();
        return redirect()->route('admin.manage.menus', $menu_id);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Backend/Menu/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|unique:menus,title|max:100',
            'location' => 'required|unique:menus,location|max:100',
        ]);
        if (Menu::create($data)) {
            $newdata = Menu::orderby('id', 'DESC')->first();
            return redirect()->route('admin.manage.menus', $newdata->id);
        } else {
            return redirect()->back()->with('error', 'Failed to save menu !');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Menu $menu)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Menu $menu)
    {
        return Inertia::render('Backend/Menu/Edit', ['menu' => $menu]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Menu $menu)
    {
        $menu->update($request->all());
        return redirect()->route('admin.manage.menus');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function delete($id)
    {
        $menu = Menu::findOrFail($id);
        $menu->delete();
        $new_menu = Menu::orderby('id', 'DESC')->first();
        return redirect()->route('admin.manage.menus', $new_menu->id);
    }
}
