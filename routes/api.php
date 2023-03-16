<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Design\RoomDesignController;
use App\Http\Controllers\Subscribe\SubscribeController;
use App\Http\Controllers\Admin\StatusController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return response()->json([
        'user' => $request->user(),
        'role' => $request->user()->getRoleNames(),
    ]);
});

Route::post('/register', [RegisterController::class, 'register']);
Route::post('/login', [LoginController::class, 'login']);

Route::post('/logout', [LogoutController::class, 'logout'])->middleware(
    'auth:sanctum'
);

Route::post('/subscribe', [SubscribeController::class, 'subscribe']);

Route::middleware("auth:sanctum")->group(function () {
    Route::prefix('admin')->group(function () {
        Route::get('/users_status', [StatusController::class, 'userStatus']);
        Route::get('/designs_status', [
            StatusController::class,
            'designStatus',
        ]);
        Route::get('/roles_status', [StatusController::class, 'roleStatus']);
        Route::get('/permissions_status', [
            StatusController::class,
            'permissionStatus',
        ]);
        Route::post('/create_design', [
            RoomDesignController::class,
            'addNewDesign',
        ]);
    });
});

Route::withoutMiddleware('throttle')->group(function () {
    Route::get('/rooms', [RoomDesignController::class, 'getDesign']);
});