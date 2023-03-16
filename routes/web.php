<?php

use App\Models\RoomDesign;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    // $role = Role::where('name', 'admin')->firstOrFail();
    // $role->givePermissionTo('admin');
    // $user = User::where('email', 'interior_design@gmail.com')
    //     ->firstOrFail()
    //     ->getRoleNames();
    // dd($user);
    // $room_design = RoomDesign::with('user')->get();
    // dd($room_design);
    $dropBox = Storage::disk('dropbox')->get(
        'design/edc080122ashe-leandro-002-1652810097.jpg'
    );
    dd($dropBox);
    return view('welcome');
});

// $role = Role::whereNotIn('name', ['admin'])->get();
// $role->givePermissionTo('super');