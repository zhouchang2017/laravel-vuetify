<?php

use Faker\Generator as Faker;

$factory->define(App\Catelog::class, function (Faker $faker) {
    return [
        'name'=>$faker->city,
        'avatar'=>$faker->imageUrl()
    ];
});
