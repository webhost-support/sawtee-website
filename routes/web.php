<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\MenuController;
use App\Http\Controllers\Admin\MenuItemController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\PublicationController;
use App\Http\Controllers\Admin\ResearchController;
use App\Http\Controllers\Admin\SlideController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\ThemeController;
use App\Http\Controllers\Admin\SectionController;
use App\Http\Controllers\Admin\PageController;
use App\Http\Controllers\Admin\TagController;
use App\Http\Controllers\Admin\TeamController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\FrontendController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SubscriptionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/admin', AuthenticatedSessionController::class . '@create');
Route::get('/admin/login', AuthenticatedSessionController::class . '@create');
Route::middleware(['auth', 'verified'])->prefix('admin')->as('admin.')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Backend/Dashboard');
    })->name('dashboard');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('/categories', CategoryController::class);
    Route::resource('/posts', PostController::class);
    Route::resource('/themes', ThemeController::class);
    Route::resource('/tags', TagController::class);
    Route::resource('/sections', SectionController::class);
    Route::resource('/publications', PublicationController::class);
    Route::resource('/research', ResearchController::class);
    Route::resource('/sliders', SliderController::class);
    Route::resource('/slides', SlideController::class);
    Route::resource('/pages', PageController::class);
    Route::resource('/teams', TeamController::class);

    Route::post('/post/uploadmedia', [PostController::class, 'uploadmedia'])->name('post.upload');
    // Route::get('/menus/manage-menus/{id?}', [MenuController::class, 'manage'])->name('manage.menus');
    // Route::post('/menus/create', [MenuController::class, 'store'])->name('create.menu');
    // Route::delete('/menus/delete/{id}', [MenuController::class, 'delete'])->name('delete.menu');
    // Route::post('/menus/add-menu-items-to-menu', [MenuController::class, 'addMenuItemToMenu'])->name('addMenuItems.menu');
    // Route::patch('/menus/edit-menu-item/{id}', [MenuController::class, 'editMenuItem'])->name('editMenuItem.menu');
    // Route::delete('/menus/delete-menu-item/{id}', [MenuController::class, 'deleteMenuItem'])->name('deleteMenuItem.menu');
    // Route::post('/menus/add-custom-link', [MenuController::class, 'addCustomLink'])->name('addCustomLink.menu');
    // Route::get('/subscribers', [SubscriptionController::class, 'index'])->name('subscribers.list');

});

Route::post('/subscribe', [SubscriptionController::class, 'subscribe'])->name('subscribe');
Route::get('/unsubscribe/{email}', [SubscriptionController::class, 'unsubscribe'])->name('unsubscribe');

// Route::post('/subscribers/subscribe', [SubscriptionController::class, 'store'])->name('subscription.store');
// Route::get('/subscribers/verify/{token}', [SubscriptionController::class, 'verify'])->name('subscription.verify');
// Route::get('/unsubscribe/{email}', [SubscriptionController::class, 'unsubscribe'])->name('unsubscribe');

Route::get('/', [FrontendController::class, 'index'])->name('home');
Route::get('/{pages:slug}', [FrontendController::class, 'page'])->name('page.show');
Route::get('/category/{categories:slug}/{subcategory?}/{post?}', [FrontendController::class, 'category'])->name('category.show');

Route::get('/search', [FrontendController::class, 'search'])->name('search');


require __DIR__ . '/auth.php';