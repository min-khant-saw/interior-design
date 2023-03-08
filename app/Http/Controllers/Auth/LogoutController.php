<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LogoutController extends Controller
{
    /**
     * Create a new LogoutController instance.
     *
     * @return void
     */
    public function __construct()
    {
        // Constructor left empty intentionally.
    }

    /**
     * Logout a user by deleting their current access token.
     *
     * @param Request $request The incoming request object.
     *
     * @return mixed
     */
    public function logout()
    {
        // Delete current access token for authenticated user.
        Auth::user()
            ->currentAccessToken()
            ->delete();

        return response()->json([
            'message' => 'Logout',
            'data' => '',
        ]);
    }
}
