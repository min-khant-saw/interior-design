<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\RoomDesign;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class StatusController extends Controller
{
    public function __construct()
    {
    }
    public function userStatus()
    {
        $user = User::all();
        return response()->json([count($user)]);
    }
    public function designStatus()
    {
        $design = RoomDesign::all();
        return response()->json([count($design)]);
    }
    public function roleStatus()
    {
        $role = Role::all();
        return response()->json([count($role)]);
    }
    public function permissionStatus()
    {
        $permission = Permission::all();
        return response()->json([count($permission)]);
    }
}
