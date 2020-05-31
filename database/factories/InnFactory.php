<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Inn;
use Faker\Generator as Faker;

$factory->define(Inn::class, function (Faker $faker) {
    return [
        'user_id' => $this->faker->randomDigit,
        'photo' => $this->faker->imageUrl($width = 640, $height = 480),
        'title' => $this->faker->sentence($nbWords = 3, $variableNbWords = true),
        'description' => $this->faker->text($maxNbChars = 200),
        'catagory' => $this->faker->word,
        'type' => $this->faker->word,
        'capacity' => $this->faker->numberBetween($min = 1, $max = 10),
        'bedrooms' => $this->faker->numberBetween($min = 1, $max = 5),
        'beds' => $this->faker->numberBetween($min = 1, $max = 5),
        'bathrooms' => $this->faker->numberBetween($min = 1, $max = 5),
        'address' => $this->faker->streetAddress,
        'city' => $this->faker->city,
        'state' => $this->faker->state,
        'zipcode' => $this->faker->postcode,
        'start_avability' => $this->faker->dateTimeBetween($startDate = 'now', $endDate = 'now', $timezone = null),
        'end_avability' => $this->faker->dateTimeBetween($startDate = 'now', $endDate = '1 year', $timezone = null),
        'price' => $this->faker->randomFloat($nbMaxDecimals = 2, $min = 50, $max = 2000)
    ];
});
