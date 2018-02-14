<?php

use Illuminate\Database\Seeder;

class CatelogTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Catelog::class,10)->create();
    }
}
