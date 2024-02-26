<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
    // return $request->user();
// });

Route::controller(UserController::class)->prefix('user')->group(function () {
	Route::get('index', 'index');
    Route::post('store', 'store');
    Route::get('detail/{id}', 'show');
    Route::post('update/{id}', 'update');
    Route::patch('delete/{id}', 'destroy');
});

Route::controller(ProductController::class)->prefix('product')->group(function () {
	Route::get('index', 'index');
    Route::post('store', 'store');
    Route::get('detail/{id}', 'show');
    Route::post('update/{id}', 'update');
    Route::patch('delete/{id}', 'destroy');
});