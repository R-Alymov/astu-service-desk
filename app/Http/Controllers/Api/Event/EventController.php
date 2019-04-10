<?php

namespace App\Http\Controllers\Api\Event;

use App\Http\Controllers\Api\ApiController;
use App\Models\Storage\Ticket\Event;
use Illuminate\Http\Request;

class EventController extends ApiController
{

    public function index()
    {
        return Event::orderBy('date')->paginate(15);
    }

    public function show(Event $event)
    {
        return $event;
    }

    public function store(Request $request)
    {
        $data = $this->validate($request, [
            'name' => 'required|max:255',
            'date' => 'required|date',
            'computers_number' => 'required|integer|min:1',
        ]);
        $event = Event::create($data);
        return response()->json($event, 201);
    }

    public function update(Request $request, Event $event)
    {
        $data = $this->validate($request, [
            'name' => 'required|max:255',
            'date' => 'required|date',
            'computers_number' => 'required|integer|min:1',
        ]);
        $event->update($data);
        return response()->json($event);
    }

    public function destroy(Event $event)
    {
        $event->delete();
        return response()->json(null, 204);
    }

}