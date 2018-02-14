<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
         $this->call(CatelogTableSeeder::class);
         $this->call(NuxtsTableSeeder::class);
         $this->call(PostsTableSeeder::class);
    }
}
