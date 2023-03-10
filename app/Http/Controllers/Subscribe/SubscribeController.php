<?php

namespace App\Http\Controllers\Subscribe;

use App\Http\Controllers\Controller;
use App\Jobs\Subscribe\SubscribeJob;
use App\Models\Subscrebe;
use Illuminate\Http\Request;

class SubscribeController extends Controller
{
    public function __construct()
    {
        // This is the constructor for the SubscribeController class.
        // In this case, it's empty because there's no initialization code that needs to be run.
    }

    public function subscribe(Request $request)
    {
        // This method handles the "subscribe" endpoint. It accepts a POST request with an "email" parameter,
        // validates it, creates a new "subscribe" record in the database, and then dispatches a job to send
        // a confirmation email to the subscriber.

        // First, we validate the request input data. It should contain an "email" parameter that is a
        // string with a maximum length of 255 characters, and it should not already exist in the "subscribes" table.
        $request->validate([
            'email' => 'required|string|max:255|unique:subscrebes',
        ]);

        // If the input data is valid, we create a new "subscribe" record in the database using the
        // "Subscrebe" model, which represents the "subscribes" table in the database.
        $subscribe = Subscrebe::create(['email' => $request->email]);

        // Finally, we dispatch a new job to send a confirmation email to the subscriber using the "SubscribeJob" class.
        // The job takes the subscriber's email as its only parameter.
        dispatch(new SubscribeJob($subscribe->email));

        // The method returns a JSON response indicating that the request was successful.
        return response()->json([
            'message' => 'successful send.',
        ]);
    }
}
