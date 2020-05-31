<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class InnTest extends TestCase
{

    use RefreshDatabase;

    /** @test */
    public function it_has_a_path()
    {
        $inn = factory('App\Inn')->create();

        $this->assertEquals('/api/inns/' . $inn->id, $inn->path());
    }
}
