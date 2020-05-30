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
            $table->unsignedBigInteger('user_id');
            $table->string('photo');
            $table->string('title');
            $table->string('catagory');
            $table->string('type');
            $table->longText('description');
            $table->smallInteger('capacity');
            $table->smallInteger('bedrooms');
            $table->smallInteger('beds');
            $table->smallInteger('bathrooms');
            $table->longText('address');
            $table->string('city');
            $table->string('state');
            $table->integer('zipcode');
            $table->date('start_avability');
            $table->date('end_avability');
            $table->double('price', 6, 2);
            $table->timestamps();


            // $table->foreign('user_id')
            //     ->references('id')
            //     ->on('users')
            //     ->onDelete('cascade');
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
