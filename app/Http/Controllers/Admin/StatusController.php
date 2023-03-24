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
    /**
     * Constructor for the StatusController class
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Get the status of all users
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function userStatus()
    {
        $user = User::all();
        return response()->json([count($user)]);
    }

    /**
     * Get the status of all room designs
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function designStatus()
    {
        $design = RoomDesign::all();
        return response()->json([count($design)]);
    }

    /**
     * Get the status of all roles
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function roleStatus()
    {
        $role = Role::all();
        return response()->json([count($role)]);
    }

    /**
     * Get the status of all permissions
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function permissionStatus()
    {
        $permission = Permission::all();
        return response()->json([count($permission)]);
    }
}
