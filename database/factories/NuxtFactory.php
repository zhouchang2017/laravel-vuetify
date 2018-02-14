<?php

use Faker\Generator as Faker;
static $num = 0;
$factory->define(App\Nuxt::class, function (Faker $faker)use($num) {
    $num ++;
    return [
        'name'   => $faker->domainName,
        'prefix' => 'nuxt_' . $num,
    ];
});
