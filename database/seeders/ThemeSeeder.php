<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ThemeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('themes')->insert([
            "title" => "Economic and social reform, growth and poverty",
            "description" => "Identifies South Asia’s development interests, in particular, those of the marginalized and poor people, communities and workers, in regional economic and social reform processes; and advocates their mainstreaming into economic and social policies, and growth and development processes.",
            'created_at' => fake()->dateTimeThisDecade(now(), 'Asia/Kathmandu'),
            'updated_at' => fake()->dateTimeThisDecade(now(), 'Asia/Kathmandu'),
            ]);
            DB::table('themes')->insert([
            "title" => "Trade integration and supply-side constraints",
            "description" => "Advocates the region’s trade and development interests in bilateral, regional and multilateral trade negotiations and deals; and identifies ways and mechanisms to address South Asian countries’ supply-side constraints for their meaningful integration into the global economy.",
            'created_at' => fake()->dateTimeThisDecade(now(), 'Asia/Kathmandu'),
            'updated_at' => fake()->dateTimeThisDecade(now(), 'Asia/Kathmandu'),
            ]);
            DB::table('themes')->insert([
            "title" => "Trade and climate change",
            "description" => "Promotes mutual compatibility between trade and climate change objectives by providing support to government, private sector and civil society organizations to design and implement policies that contribute to climate change mitigation and adaptation by utilizing trade as an instrument, and supporting government agencies in international negotiations.",
            'created_at' => fake()->dateTimeThisDecade(now(), 'Asia/Kathmandu'),
            'updated_at' => fake()->dateTimeThisDecade(now(), 'Asia/Kathmandu'),
            ]);
            DB::table('themes')->insert([
            "title" => "Agriculture policies, biodiversity management and food security",
            "description" => "Calls for comprehensive agriculture policies that strengthen traditional farming systems and advance farmers' traditional knowledge for meeting long-term food security objectives; and advocates community-centred biodiversity management policies, laws and programmes, including those relating to IPRs, so as to protect farmers' rights to seeds and traditional knowledge.",
            'created_at' => now(),
            'updated_at' => now(),
            ]);
            DB::table('themes')->insert([
            "title" => "Competition, regulation and competitiveness",
            "description" => "Monitors the status and trends in markets for generating information and analysis on anti-competitive practices; advocates effective regulatory systems and measures for the protection of consumer rights and promotion of good business practices; and identifies and advocates policy and institutional measures for scaling up the competitiveness of domestic enterprises and institutions.",
            'created_at' => now(),
            'updated_at' => now(),
            ]);
            DB::table('themes')->insert([
            "title" => "Financial resource management",
            "description" => "Assesses the nature and trends of aid inflows as well as their allocation and sectoral use for identifying measures to enhance aid effectiveness; keeps track of government budget expenditures for productive investment; and advocates gender-responsive and pro-poor budget.",
            'created_at' => now(),
            'updated_at' => now(),
            ]);
            DB::table('themes')->insert([
            "title" => "Remittance and development",
            "description" => "Identifies mechanisms for improving human capital and effective remittance management; and advocates measures needed to ensure productive and decent working conditions, poverty reduction and human development.",
            'created_at' => now(),
            'updated_at' => now(),
            ]);
            // Theme::factory()->count(10)->create();
    }
}
