<?php

use Faker\Generator as Faker;

$factory->define(App\Comment::class, function (Faker $faker) {
    return [
        'post_id'=>random_int(1,1000),
        'body'=>$faker->text(),
        'user_id'=>1,
        'follow_num'=>$faker->randomNumber(),
        'oppose_num'=>$faker->randomNumber(),
    ];
});
