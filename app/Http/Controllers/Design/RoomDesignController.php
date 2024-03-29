<?php

namespace App\Http\Controllers\Design;

use App\Http\Controllers\Controller;
use App\Models\RoomDesign;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Storage;

class RoomDesignController extends Controller
{
    public function __construct()
    {
        // constructor method, can be used for any initialization tasks
    }

    /**
     * Add a new design to the RoomDesign model.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function addNewDesign(Request $request)
    {
        // Validate the request data
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'category' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'image' => 'required|mimes:jpg,jpeg,png,gif,svg',
        ]);

        // Save the uploaded image to the Dropbox disk
        $filename = $request->file('image')->getClientOriginalName();
        Storage::disk('dropbox')->put(
            'design/' . $filename,
            file_get_contents($request->file('image'))
        );

        // Create a new RoomDesign model with the uploaded image filename
        $room_design = RoomDesign::create([
            'title' => $request->title,
            'description' => $request->description,
            'category' => $request->category,
            'image' => $filename,
            'type' => $request->type,
            'user_id' => auth()->id(),
        ]);

        // Return the newly created RoomDesign model in the response
        return response()->json($room_design);
    }

    /**
     * Get all designs from the RoomDesign model.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getDesign(Request $request)
    {
        $perPage = $request->get('perPage');
        $room_design = RoomDesign::with('user')
            ->orderByDesc('id')
            ->paginate($perPage);

        // Map each RoomDesign model to include the URL of its associated image
        $room_design->map(function ($room_design) {
            $url = Storage::disk('dropbox')->url(
                'design/' . $room_design->image
            );
            $room_design->image = $url;
            return $room_design;
        });

        // Return the RoomDesign models with their associated image URLs in the response
        return response()->json(['data' => $room_design]);
    }
    public function getMainDesign(Request $request)
    {
        // Get the number of items per page from the request
        $perPage = $request->get('perPage');

        // Get the design category from the request
        $design = $request->get('design');

        // Retrieve all RoomDesign models that belong to the specified category,
        // with their associated user model, ordered by id in descending order
        $room_design = RoomDesign::with('user')
            ->where('category', $design)
            ->orderByDesc('id')
            ->paginate($perPage);

        // Map each RoomDesign model to include the URL of its associated image
        $room_design->map(function ($room_design) {
            $url = Storage::disk('dropbox')->url(
                'design/' . $room_design->image
            );
            $room_design->image = $url;
            return $room_design;
        });

        // Return the RoomDesign models with their associated image URLs in the response
        return response()->json($room_design);
    }

    public function getRoom($id)
    {
        // Find the RoomDesign model with the specified ID, with its associated user model
        $room = RoomDesign::with('user')->findOrFail($id);

        // Get the URL of the associated image
        $url = Storage::disk('dropbox')->url('design/' . $room->image);

        // Replace the image filename with its URL in the RoomDesign model
        $room->image = $url;

        // Return the RoomDesign model with its associated image URL in the response
        return response()->json($room);
    }
}
