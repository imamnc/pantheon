<?php

namespace Database\Factories;

use App\Models\News;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\News>
 */
class NewsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $models = News::class;

    public function definition(): array
    {
        return [
            'title' => fake()->sentence(10, false),
            'description' => fake()->sentence(50, false),
            'content' => fake()->paragraph(30, false),
            'thumbnails' => null,
        ];
    }
}
