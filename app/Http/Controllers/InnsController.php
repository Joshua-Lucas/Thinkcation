<?php

namespace App\Http\Controllers;

use App\Inn;
use App\User;
use Illuminate\Http\Request;

class InnsController extends Controller
{
    public function index()
    {
        $user = User::whereName('Cleve Kuhn PhD')->first();

        return $user->inns;
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
            'rating' => 'required'
        ]);

        //persist
        auth()->user()->inns()->create($attributes);


        // redirect
        return redirect('/inns');
    }
}
