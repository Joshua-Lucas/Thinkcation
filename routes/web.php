<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::POST('/inns', function () {
    //valdate
    //persist
    App\Inn::create(request(
        [
            'host_id', 'state', 'capacity', 'catagory', 'type', 'guestspcae', 'bedrooms', 'beds', 'bathrooms', 'address', 'city', 'zip', 'emenities', 'photos', 'title', 'description', 'guest_instructions', 'start_avability', 'end_avability', 'price'
        ]
    ));
    // redirect
});
