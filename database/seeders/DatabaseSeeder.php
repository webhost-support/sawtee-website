<?php

namespace Database\Seeders;
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
                // TagSeeder::class,
                // PostSeeder::class,
            PageSeeder::class,
            SectionSeeder::class,

        ]);

    }
}
