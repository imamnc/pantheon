<?php

namespace Modules\Base\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class MstCurrencyFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     */
    protected $model = \Modules\Base\App\Models\MstCurrency::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'symbol' => fake()->text(3),
            'label' => fake()->text(3),
            'currency_name' => fake()->text(10),
        ];
    }
}

