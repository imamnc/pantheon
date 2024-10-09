<?php

namespace Modules\Base\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class MstCountryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     */
    protected $model = \Modules\Base\App\Models\MstCountry::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'country_name' => fake()->unique()->text(16)
        ];
    }
}

