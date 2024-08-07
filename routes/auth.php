<?php

use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\MenuController;
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
use App\Http\Controllers\ProfileController;

Route::middleware('guest')->group(function () {
    // Route::get('register', [RegisteredUserController::class, 'create'])
    //             ->name('register');

    // Route::post('register', [RegisteredUserController::class, 'store']);

    Route::get('/admin', function () {
        return to_route('login');
    });

    Route::get('/admin/login', [AuthenticatedSessionController::class, 'create'])
        ->name('login');


    Route::post('/admin/login', [AuthenticatedSessionController::class, 'store']);

    Route::get(
        'forgot-password',
        [PasswordResetLinkController::class, 'create']
    )
        ->name('password.request');

    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
        ->name('password.email');

    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
        ->name('password.reset');

    Route::post('reset-password', [NewPasswordController::class, 'store'])
        ->name('password.store');
});


Route::middleware('auth')->prefix('admin')->as('admin.')->group(function () {
    Route::get('verify-email', EmailVerificationPromptController::class)
                ->name('verification.notice');

    Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
                ->middleware(['signed', 'throttle:6,1'])
                ->name('verification.verify');

    Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
                ->middleware('throttle:6,1')
                ->name('verification.send');

    Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
                ->name('password.confirm');

    Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

    Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
                ->name('logout');
});

Route::middleware(['auth', 'verified'])->prefix('admin')->as('admin.')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('/categories', CategoryController::class);
    // Route::resource('/posts', PostController::class);
    Route::resource('/themes', ThemeController::class);
    Route::resource('/tags', TagController::class);
    Route::resource('/sections', SectionController::class);
    Route::resource('/publications', PublicationController::class);
    Route::resource('/research', ResearchController::class);
    Route::resource('/sliders', SliderController::class);
    Route::resource('/slides', SlideController::class);
    Route::resource('/pages', PageController::class);
    Route::resource('/teams', TeamController::class);


    Route::get('/posts{categoryId?}', [PostController::class, 'index'])->name('posts.index');
    Route::get('/posts/create', [PostController::class, 'create'])->name('posts.create');
    Route::get('/posts/edit/{id}', [PostController::class, 'edit'])->name('posts.edit');
    Route::post('/posts/store', [PostController::class, 'store'])->name('posts.store');
    Route::patch('/posts/update/{id}', [PostController::class, 'update'])->name('posts.update');
    Route::delete('/posts/delete/{id}', [PostController::class, 'destroy'])->name('posts.destroy');

    Route::post('/post/uploadmedia', [PostController::class, 'uploadmedia'])->name('post.upload');
    Route::get("/menus", [MenuController::class, 'index'])->name('menus.index');
    Route::get('/menus/manage-menus/{id?}', [MenuController::class, 'manage'])->name('manage.menus');
    Route::post('/menus/create', [MenuController::class, 'store'])->name('create.menu');
    Route::patch('/menus/update', [MenuController::class, 'update'])->name('update.menu');
    Route::delete('/menus/delete/{id}', [MenuController::class, 'delete'])->name('delete.menu');
    Route::post('/menus/add-menu-items-to-menu', [MenuController::class, 'addMenuItemToMenu'])->name('addMenuItems.menu');
    Route::patch('/menus/edit-menu-item/{id}', [MenuController::class, 'editMenuItem'])->name('editMenuItem.menu');
    Route::delete('/menus/delete-menu-item/{id}', [MenuController::class, 'deleteMenuItem'])->name('deleteMenuItem.menu');
    Route::post('/menus/add-custom-link', [MenuController::class, 'addCustomLink'])->name('addCustomLink.menu');
    Route::get('/subscribers', [SubscriptionController::class, 'index'])->name('subscribers.list');
});
