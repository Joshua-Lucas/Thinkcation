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

    public function store()
    {
        //valdate
        //persist
        Inn::create(request(
            [
                'user_id', 'photo', 'title', 'description', 'catagory', 'type', 'capacity',  'bedrooms', 'beds', 'bathrooms', 'address', 'city', 'state', 'zipcode', 'start_avability', 'end_avability', 'price'
            ]
        ));
        // redirect
        return redirect('/inns');
    }
}