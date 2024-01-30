<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Post;
use Illuminate\Support\Str;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    protected $model = Post::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    public function definition(): array
    {
        $title = fake()->sentence(6, true);
        $slug = Str::of($title)->slug('-') ;
        return [
            "category_id" => fake()->numberBetween(1, 9),
            "theme_id" => fake()->randomElement([null, fake()->numberBetween(1, 7)]),
            "title" => $title,
            "slug" => $slug,
            "content" => fake()->paragraphs(4, true),
            "excerpt" => fake()->text(200),
            "author" => fake()->name(),
            "status" => "published",
            "link" => fake()->url(),
            "published_at" => fake()->date('Y-m-d', 'now'),
            "updated_at" => null,
        ];
    }
}
