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
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        Db::table("pages")->insert([
            'name' => 'Our Work',
            'slug'=> 'our-work',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        Db::table("pages")->insert([
            'name' => 'Contact',
            'slug'=> 'contact',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        Db::table("pages")->insert([
            'name' => 'Career',
            'slug'=> 'career',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
