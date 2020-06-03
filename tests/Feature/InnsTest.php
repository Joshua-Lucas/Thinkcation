<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class InnsTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    /** @test */
    public function only_an_auth_User_can_host_inn()
    {
        // $this->withoutExceptionHandling();

        $attributes =  factory('App\Inn')->raw();

        $this->post('api/inns', $attributes)->assertRedirect('login');
    }


    /** @test */
    public function a_user_can_create_a_inn()
    {

        $this->withoutExceptionHandling();

        $this->actingAs(factory('App\User')->create());

        $attributes =  factory('App\Inn')->raw();

        $this->post('/api/inns', $attributes)->assertRedirect('/inns');

        $this->assertDatabaseHas('inns', $attributes);

        $this->get('/api/inns')->assertSee($attributes['title']);
    }

    /** @test */
    public function a_user_can_view_an_inn()
    {
        $this->withoutExceptionHandling();
        $inns = factory('App\Inn')->create();

        $this->get($inns->path())
            ->assertSee($inns->title)
            ->assertSee($inns->description)
            ->assertSee($inns->price);
    }

    /** @test */
    public function an_inn_requires_a_title()
    {
        $this->actingAs(factory('App\User')->create());

        $attributes =  factory('App\Inn')->raw(['title' => '']);
        $this->post('api/inns', $attributes)->assertSessionHasErrors('title');
    }

    /** @test */
    public function an_inn_requires_a_description()
    {
        $this->actingAs(factory('App\User')->create());

        $attributes =  factory('App\Inn')->raw(['description' => '']);
        $this->post('api/inns', $attributes)->assertSessionHasErrors('description');
    }
}
