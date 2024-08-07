<?php



use App\Http\Controllers\FrontendController;
use App\Http\Controllers\SubscriptionController;
use Illuminate\Support\Facades\Route;

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

require __DIR__ . '/auth.php';

Route::post('/subscribers/subscribe', [SubscriptionController::class, 'store'])->name('subscription.store');
Route::get('/subscribers/verify/{token}', [SubscriptionController::class, 'verify'])->name('subscription.verify');
Route::get('/unsubscribe/{email}', [SubscriptionController::class, 'unsubscribe'])->name('unsubscribe');

// Route::post('/subscribe', [SubscriptionController::class, 'subscribe'])->name('subscribe');
Route::get('/search', [FrontendController::class, 'search'])->name('search');

Route::get('/', [FrontendController::class, 'index'])->name('home');
Route::get('/{pages:slug}', [FrontendController::class, 'page'])->name('page.show');
Route::get('/category/{categories:slug}/{subcategory?}/{post?}', [FrontendController::class, 'category'])->name('category.show');




