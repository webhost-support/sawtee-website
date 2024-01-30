<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Post;
use App\Models\Tag;

class PostSeeder extends Seeder
{
    protected $model = Post::class;
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Post::factory()->count(100)->create()->each(function ($post) {
            $post->tags()->attach(Tag::inRandomOrder()->limit(3)->get());
        });
    }
}
