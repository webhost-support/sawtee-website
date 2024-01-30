<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Theme;
use App\Models\Post;
use App\Models\User;
use App\Models\Section;
use App\Models\Page;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this-> call([
            UserSeeder::class,
            CategorySeeder::class,
            ThemeSeeder::class,
            TagSeeder::class,
            PostSeeder::class,
            PageSeeder::class,
            SectionSeeder::class,

        ]);

    }
}
