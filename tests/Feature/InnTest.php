<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class InnTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    /** @test */
    public function a_user_can_create_a_inn()
    {

        $this->withoutExceptionHandling();

        $attributes = [
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

        $this->post('/api/inns', $attributes)->assertRedirect('/inns');

        $this->assertDatabaseHas('inns', $attributes);

        $this->get('/api/inns')->assertSee($attributes['title']);
    }
}
