<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Inn extends Model
{
    protected $guarded = [];

    public function path()
    {
        return "/api/inns/{$this->id}";
    }


    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
