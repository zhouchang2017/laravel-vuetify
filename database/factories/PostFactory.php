<?php

use Faker\Generator as Faker;

$factory->define(App\Post::class, function (Faker $faker) {
    return [
        'title'=>$faker->text(60),
        'body'=>$faker->randomHtml(),
        'avatar'=>$faker->imageUrl(),
        'user_id'=>1,
        'originate'=>$faker->company,
        'read_num'=>$faker->randomNumber(),
        'fake_read_num'=>$faker->randomNumber()
    ];
});
