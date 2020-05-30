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


// Route::GET('/inns', function () {
//     App\Inn::all();
// }); 
Route::POST('/inns', function () {
    //valdate
    //persist
    App\Inn::create(request(
        [
            'user_id', 'photo', 'title', 'description', 'catagory', 'type', 'capacity',  'bedrooms', 'beds', 'bathrooms', 'address', 'city', 'state', 'zipcode', 'start_avability', 'end_avability', 'price'
        ]
    ));
    // redirect
});
