<?php

namespace App\Http\Controllers\Admin;

use App\Events\Status\DesignStatusEvent;
use App\Events\Status\PermissionStatusEvent;
use App\Events\Status\RoleStatusEvent;
use App\Events\Status\UserStatusEvent;
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
        event(new UserStatusEvent(count($user)));
        return response()->json([count($user)]);
    }
    public function designStatus()
    {
        $design = RoomDesign::all();
        event(new DesignStatusEvent(count($design)));
        return response()->json([count($design)]);
    }
    public function roleStatus()
    {
        $role = Role::all();
        event(new RoleStatusEvent($role));
        return response()->json([count($role)]);
    }
    public function permissionStatus()
    {
        $permission = Permission::all();
        event(new PermissionStatusEvent(count($permission)));
        return response()->json([count($permission)]);
    }
}
