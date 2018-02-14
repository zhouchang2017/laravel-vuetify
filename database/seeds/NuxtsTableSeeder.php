<?php

use Illuminate\Database\Seeder;

class NuxtsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Nuxt::class,10)->create();
    }
}
