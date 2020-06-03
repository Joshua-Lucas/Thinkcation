<?php

namespace App\Http\Controllers;

use App\Inn;
use Illuminate\Http\Request;

class InnsController extends Controller
{
    public function index()
    {
        $inns = Inn::all();

        return $inns;
    }

    public function show(Inn $inn)
    {

        return $inn;
    }

    public function store()
    {

        //valdate
        $attributes = request()->validate([
            'photo' => 'required',
            'title' => 'required',
            'description' => 'required',
            'catagory' => 'required',
            'type' => 'required',
            'capacity' => 'required',
            'bedrooms' => 'required',
            'beds' => 'required',
            'bathrooms' => 'required',
            'address' => 'required',
            'city' => 'required',
            'state' => 'required',
            'zipcode' => 'required',
            'start_avability' => 'required',
            'end_avability' => 'required',
            'price' => 'required',
            'rating'
        ]);

        $attributes['user_id'] = auth()->id();

        //persist
        Inn::create($attributes);
        // redirect
        return redirect('/inns');
    }
}
