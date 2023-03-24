<?php

use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('user.{status}', function ($user, $status) {
    return true;
});

Broadcast::channel('design.{status}', function ($design, $status) {
    return true;
});

Broadcast::channel('role.{status}', function ($permission, $status) {
    return true;
});

Broadcast::channel('permission.{status}', function ($permission, $status) {
    return true;
});