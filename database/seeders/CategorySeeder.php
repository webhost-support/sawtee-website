<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Category;

class CategorySeeder extends Seeder
{
        protected $model = Category::class;
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('categories')->insert([

            "name" => "Featured Events",
            "slug" => 'featured-events',
            "type" => "post",
            "parent_id" => null,
            "created_at" => now(),
            "updated_at" => now(),
            ]);
        DB::table('categories')->insert([
            "name" => "Programmes",
            "slug" => 'programmes',
            "type" => "post",
            "parent_id" => null,
            "created_at" => now(),
            "updated_at" => now(),
        ]);
        DB::table('categories')->insert([
            "name" => "Completed Programmes",
            "slug" => 'completed-programmes',
            "type" => "post",
            "parent_id" => 2,
            "created_at" => now(),
            "updated_at" => now(),
        ]);
        DB::table('categories')->insert([
            "name" => "Ongoing Programmes",
            "slug" => 'ongoing-programmes',
            "type" => "post",
            "parent_id" => 2,
            "created_at" => now(),
            "updated_at" => now(),
        ]);
        DB::table('categories')->insert([
            "name" => "Covid",
            "slug" => 'covid',
            "type" => "post",
            "parent_id" => null,
            "created_at" => now(),
            "updated_at" => now(),
        ]);
        DB::table('categories')->insert([
            "name" => "Infocus",
            "slug" => 'infocus',
            "type" => "post",
            "parent_id" => null,
            "created_at" => now(),
            "updated_at" => now(),
        ]);
        DB::table('categories')->insert([
            "name" => "Newsletters",
            "slug" => 'newsletters',
            "type" => "post",
            "parent_id" => null,
            "created_at" => now(),
            "updated_at" => now(),
        ]);
        DB::table('categories')->insert([
            "name" => "Sawtee in Media",
            "slug" => 'sawtee-in-media',
            "type" => "post",
            "parent_id" => null,
            "created_at" => now(),
            "updated_at" => now(),
        ]);
        DB::table('categories')->insert([
            "name" => "Blog",
            "slug" => 'blog',
            "type" => "post",
            "parent_id" => null,
            "created_at" => now(),
            "updated_at" => now(),
        ]);
        DB::table('categories')->insert([
            "name" => "Publications",
            "slug" => 'publications',
            "type" => "publication",
            "parent_id" => null,
            "created_at" => now(),
            "updated_at" => now(),
        ]);
        DB::table('categories')->insert([
            "name" => "Trade Insight",
            "slug" => 'trade-insight',
            "type" => "publication",
            "parent_id" => 10,
            "created_at" => now(),
            "updated_at" => now(),
        ]);
        DB::table('categories')->insert([
            "name" => "Discussion Paper",
            "slug" => 'discussion-paper',
            "type" => "publication",
            "parent_id" => 10,
            "created_at" => now(),
            "updated_at" => now(),
        ]);
        DB::table('categories')->insert([
            "name" => "Briefing Paper",
            "slug" => 'briefing-paper',
            "type" => "publication",
            "parent_id" => 10,
            "created_at" => now(),
            "updated_at" => now(),
        ]);
        DB::table('categories')->insert([
            "name" => "Policy Brief",
            "slug" => 'policy-brief',
            "type" => "publication",
            "parent_id" => 10,
            "created_at" => now(),
            "updated_at" => now(),
        ]);
        DB::table('categories')->insert([
            "name" => "Issue Paper",
            "slug" => 'issue-paper',
            "type" => "publication",
            "parent_id" => 10,
            "created_at" => now(),
            "updated_at" => now(),
        ]);
        DB::table('categories')->insert([
            "name" => "Working Paper",
            "slug" => 'working-paper',
            "type" => "publication",
            "parent_id" => 10,
            "created_at" => now(),
            "updated_at" => now(),
        ]);
        DB::table('categories')->insert([
            "name" => "Books",
            "slug" => 'books',
            "type" => "publication",
            "parent_id" => 10,
            "created_at" => now(),
            "updated_at" => now(),
        ]);
        DB::table('categories')->insert([
            "name" => "Reseacrh Brief",
            "slug" => 'research-brief',
            "type" => "publication",
            "parent_id" => 10,
            "created_at" => now(),
            "updated_at" => now(),
        ]);

        DB::table('categories')->insert([
            "name" => "Others",
            "slug" => 'others',
            "type" => "publication",
            "parent_id" => 10,
            "created_at" => now(),
            "updated_at" => now(),
        ]);

        DB::table('categories')->insert([
            "name" => "Publications in Nepali",
            "slug" => 'publications-in-nepali',
            "type" => "publication",
            "parent_id" => 10,
            "created_at" => now(),
            "updated_at" => now(),
        ]);
        DB::table('categories')->insert([
            "name" => "Research",
            "slug" => 'research',
            "type" => "research",
            "parent_id" => null,
            "created_at" => now(),
            "updated_at" => now(),
        ]);

    }
}
