<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Db::table("pages")->insert([
            'name' => 'About',
            'slug'=> 'about',
            'created_at' => fake()->dateTimeThisDecade(now(), 'Asia/Kathmandu'),
            'updated_at' => fake()->dateTimeThisDecade(now(), 'Asia/Kathmandu'),
        ]);
        Db::table("pages")->insert([
            'name' => 'Our Work',
            'slug'=> 'our-work',
            'created_at' => fake()->dateTimeThisDecade(now(), 'Asia/Kathmandu'),
            'updated_at' => fake()->dateTimeThisDecade(now(), 'Asia/Kathmandu'),
        ]);
        Db::table("pages")->insert([
            'name' => 'Contact',
            'slug'=> 'contact',
            'created_at' => fake()->dateTimeThisDecade(now(), 'Asia/Kathmandu'),
            'updated_at' => fake()->dateTimeThisDecade(now(), 'Asia/Kathmandu'),
        ]);
        Db::table("pages")->insert([
            'name' => 'Career',
            'slug'=> 'career',
            'created_at' => fake()->dateTimeThisDecade(now(), 'Asia/Kathmandu'),
            'updated_at' => fake()->dateTimeThisDecade(now(), 'Asia/Kathmandu'),
        ]);
    }
}
