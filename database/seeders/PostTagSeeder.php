<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
            \App\Models\Post::factory(100)->create()->each(function ($post) {
            $post->tags()->attach(\App\Models\Tag::inRandomOrder()->limit(3)->get());
        });
    }
}
