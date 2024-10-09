<?php

namespace Modules\Base\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Modules\Base\App\Models\MstCountry;

class MstProvinceFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     */
    protected $model = \Modules\Base\App\Models\MstProvince::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'country_id' => MstCountry::inRandomOrder()->first()->id,
            'province_name' => fake()->text(10)
        ];
    }
}

