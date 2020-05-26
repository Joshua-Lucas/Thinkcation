<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInnsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inns', function (Blueprint $table) {
            $table->id();
            $table->foreignId('host_id');
            $table->string('state');
            $table->smallInteger('capacity');
            $table->string('catagory');
            $table->string('type');
            $table->boolean('guestspcae');
            $table->smallInteger('bedrooms');
            $table->smallInteger('beds');
            $table->smallInteger('bathrooms');
            $table->longText('address');
            $table->string('city');
            $table->integer('zip');
            $table->longText('emenities');
            $table->string('photos');
            $table->string('title');
            $table->longText('description');
            $table->longText('guest_instructions');
            $table->date('start_avability');
            $table->date('end_avability');
            $table->double('price', 6, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inns');
    }
}
