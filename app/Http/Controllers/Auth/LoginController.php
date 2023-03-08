<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Auth;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /**
     * Create a new LoginController instance.
     *
     * @return void
     */
    public function __construct()
    {
        // Constructor left empty intentionally.
    }

    /**
     * Authenticate a user and generate a token.
     *
     * @param Request $request The incoming request object.
     *
     * @return \Illuminate\Http\JsonResponse The response object containing
     *                                      success/failure message, user data,
     *                                      and token information.
     */
    public function login(Request $request)
    {
        // Validate request parameters.
        $request->validate([
            'email' => 'required|string|max:255',
            'password' => 'required|string|min:6',
        ]);

        // Attempt to authenticate user with given email and password.
        if (!Auth::attempt($request->only('email', 'password'))) {
            // Return failure response if authentication fails.
            return response()->json(
                [
                    'message' => 'login was unsuccessful.',
                    'data' => '',
                ],
                401
            );
        }

        // Retrieve authenticated user.
        $user = User::where('email', $request->email)->first();

        // Return success response along with user data and generated token.
        return response()->json(
            [
                'message' => 'login was successful.',
                'data' => $user,
                'token' => $request->user()->createToken($request->email)
                    ->plainTextToken,
            ],
            200
        );
    }
}