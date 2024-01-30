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
        $menu_items = $desiredMenu ? Menuitem::with('children')->where('menu_id', $desiredMenu->id)->orderBy('order', 'ASC')->get() : null;


        // dd($menu_items);
        return Inertia::render('Backend/Menu/ManageMenus', [
            'categories' => Category::all(),
            'pages' => Page::all(),
            'menus' => Menu::all(),
            'desiredMenu' => $desiredMenu,
            'menuItems' => $menu_items,
        ]);
    }

    public function addMenuItemToMenu(Request $request)
    {
        $menu_id = $request->menu_id;
        $ids = $request->ids;
        $type = $request->type;

        foreach ($ids as $id) {
            $data = $type === 'categories' ? Category::find($id) : Page::find($id);
            MenuItem::create([
                'menu_id' => $menu_id,
                'name' => $data->name,
                'title' => $data->name,
                'url' => $data->slug,
                'order' => 0,
                'parent_id' => null,
            ]);
        }

        return redirect()->route('admin.manage.menus', $menu_id);
    }

    public function addCustomLink(Request $request)
    {
        $menu_id = $request->menu_id;

        MenuItem::create([
            'menu_id' => $menu_id,
            'name' => $request->name,
            'title' => $request->title,
            'url' => $request->url,
            'order' => 0,
            'parent_id' => null,
        ]);
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
