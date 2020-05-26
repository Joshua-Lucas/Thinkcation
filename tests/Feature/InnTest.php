<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class InnTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    /** @test */
    public function a_user_can_host_a_inn()
    {

        $this->withoutExceptionHandling();

        $attributes = [
            'host_id' => $this->faker->randomDigit,
            'state' => $this->faker->state,
            'capacity' => $this->faker->numberBetween($min = 1, $max = 10),
            'catagory' => $this->faker->word,
            'type' => $this->faker->word,
            'guestspcae' => $this->faker->boolean,
            'bedrooms' => $this->faker->numberBetween($min = 1, $max = 5),
            'beds' => $this->faker->numberBetween($min = 1, $max = 5),
            'bathrooms' => $this->faker->numberBetween($min = 1, $max = 5),
            'address' => $this->faker->streetAddress,
            'city' => $this->faker->city,
            'zip' => $this->faker->postcode,
            'emenities' => $this->faker->text($maxNbChars = 200),
            'photos' => $this->faker->imageUrl($width = 640, $height = 480),
            'title' => $this->faker->sentence($nbWords = 3, $variableNbWords = true),
            'description' => $this->faker->text($maxNbChars = 200),
            'guest_instructions' => $this->faker->text($maxNbChars = 200),
            'start_avability' => $this->faker->dateTimeBetween($startDate = 'now', $endDate = 'now', $timezone = null),
            'end_avability' => $this->faker->dateTimeBetween($startDate = 'now', $endDate = '1 year', $timezone = null),
            'price' => $this->faker->randomFloat($nbMaxDecimals = 2, $min = 50, $max = 2000)
        ];

        $this->post('/inns', []);

        $this->assertDatabaseHas('inns', $attributes);
    }
}
