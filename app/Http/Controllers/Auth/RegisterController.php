<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    // constructor method

    public function __construct()
    {
        // no code inside the constructor
    }

    // register method

    public function register(Request $request)
    {
        // validate the request data

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        // create a new user with the validated data

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // Assign the 'user' role to the user

        $user->assignRole('user');

        // return a JSON response with a success message, the new user data, and a token

        return response()->json(
            [
                'message' => 'registration was successful.',
                'data' => $user,
                'token' => $user->createToken($request->email)->plainTextToken,
            ],
            200
        );
    }
}
