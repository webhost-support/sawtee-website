<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Image>
 */
class ImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name" => fake()->file("public", 'uploads/', false),
            "path" => fake()->file("public/", 'uploads/', true),
            "imageable_type" => "App\Models\Posts",
            "imageable_id" => numberBetween(1, 100)
        ];
    }
}
