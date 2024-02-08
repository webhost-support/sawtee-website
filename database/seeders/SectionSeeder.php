<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("sections")->insert([
            'id' => 1,
            'title' => 'Genesis',
            'type' => 'default',
            'description' => "<p>Beginning the mid-1980s, most countries, across all regions of the world, started to rapidly embark on the path of globalization and liberalization. The global wave of globalization and liberalization also created a compelling situation for South Asian countries to follow suit. This led South Asian governments and stakeholders alike to design strategies and implement measures that enhance their capacities to benefit from regional and global integration, and respond to the adverse implications of globalization for their economies.</p>

            <p>In order to complement the efforts of South Asian governments and stakeholders, and to bring to the fore the views and concerns of the marginalized and poor segments of society, South Asia Watch on Trade, Economics and Environment (SAWTEE) was launched in 1994 as a loose regional network of non-governmental organizations (NGOs) from five South Asian countries: Bangladesh, India, Nepal, Pakistan and Sri Lanka. Taking into consideration the emerging need for fair, effective and meaningful integration of South Asian countries into the regional as well as global economies, the major motto of this regional initiative has been “GLOBALIZATION YES, BUT WITH SAFETY NETS”</p>.

            <p>From 1994 to 1997, its secretariat was housed in Kolkata, India at the office of Consumer Unity & Trust Society (CUTS), a founding member institution of the network. With the emergence of consensus among network members, in 1997, SAWTEE's secretariat was moved to Kathmandu, Nepal. Since then, SAWTEE has strengthened its activities ranging from sensitization and awareness raising to independent and concrete policy research, capacity building and advocacy on trade, economic and environmental issues at local, national, regional and international levels.</p>",
            'parent_id' => null,
            'page_id' => 1,
            'link' => null,
            'created_at' => now(),
            'updated_at' => '',

        ]);
        DB::table("sections")->insert([
            'id' => 2,
            'title' => 'Registration and Recognition',
            'type' => 'default',
            'description' => '<p>SAWTEE was registered with the District Administration Office, Kathmandu, Nepal to operate as a non-profit, NGO in 1999. Due to its research capacity, policy outreach and developmental impacts, the organization has been growingly recognized as a think tank at local, national, regional and global levels. SAWTEE is also recognized in the capacity of a secretariat of a national network of Nepal-based national and international NGOs called National Alliance for Food Security in Nepal (NAFOS); a global network of civil society organizations (CSOs) working on biodiversity management and farmers rights issues called Farmers Rights Advocacy Network (FRANK); and a global network of least-developed countries (LDCs) established for the economic transformation of LDCs, called Least Developed Countries Network for Economic Transformation (LDC-NET). Its members and staff have served/been serving on the board of various international and national agencies working on trade, development, farmers rights and food security issues.</p>.',
            'parent_id' => null,
            'page_id' => 1,
            'link' => null,
            'created_at' => now(),
            'updated_at' => '',
        ]);
        DB::table("sections")->insert([
            'id' => 3,
            'title' => 'Vision, Goal and Objectives',
            'type' => 'tabs',
            'description' => '',
            'parent_id' => null,
            'page_id' => 1,
            'link' => null,
            'created_at' => now(),
            'updated_at' => '',
        ]);
        DB::table("sections")->insert([
            'id' => 4,
            'title' => 'Vision',
            'type' => 'tabs',
            'description' => '<p>Ensuring fair, equitable, inclusive, and sustainable growth and development in South Asia.</p>',
            'parent_id' => 3,
            'page_id' => 1,
            'link' => null,
            'created_at' => now(),
            'updated_at' => '',
        ]);
         DB::table("sections")->insert([
            'id' => 5,
            'title' => 'Goal',
            'type' => 'tabs',
            'description' => '<p>Enabling stakeholders, particularly the poor and marginalized, to derive net benefits from changing political economy and environmental landscapes.</p>',
            'parent_id' => 3,
            'page_id' => 1,
            'link' => null,
            'created_at' => now(),
            'updated_at' => '',
        ]);
        DB::table("sections")->insert([
            'id' => 6,
            'title' => 'Objectives',
            'type' => 'tabs',
            'description' => '<ol>
            <li>To equip stakeholders with knowledge, information and skills to represent their interests and assert their rights to development.</li>
            <li>To contribute to fair, equitable, inclusive, and sustainable growth and development for a society directed towards poverty reduction, food security and environmental sustainability.</li>
            <li>To contribute to informed and participatory policy-making and implementation for fair, equitable, inclusive, and sustainable growth and development.</li>
            <li>To contribute to enhancing meaningful participation of South Asian countries, particularly the least-developed and landlocked, in and their integration into the sub-regional, regional and multilateral trade, economic and environmental systems.</li>
            <li>To contribute to strengthening regional cooperation in South Asia.&nbsp;</li>
            </ol>',
            'parent_id' => 3,
            'page_id' => 1,
            'link' => null,
            'created_at' => now(),
            'updated_at' => '',
        ]);


        DB::table("sections")->insert([
            'id' => 7,
            'title' => 'Strategies',
            'type' => 'accordian',
            'description' => '',
            'parent_id' => null,
            'page_id' => 1,
            'link' => null,
            'created_at' => now(),
            'updated_at' => '',
        ]);
        DB::table("sections")->insert([
            'id' => 8,
            'title' => 'Policy Research',
            'type' => 'accordian',
            'description' => '<p>Realizing the capacity and resource constraints faced by South Asian NGOs to conduct research on various policy issues; come out with policy recommendations; and prepare well-argued advocacy strategy, SAWTEE, together with its member institutions and academics of the region, conducts policy research on issues such as World Trade Organization (WTO) rules, regional cooperation, intellectual property rights (IPRs), competition policy, farmers&rsquo; rights, climate change and development dimension of trade liberalization. The research findings are widely disseminated among South Asian as well as international audiences comprising, inter alia, trade negotiators, NGOs, the media, the academia, research institutions, international and regional inter-governmental organizations and the donor community, in English as well as various South Asian vernaculars.</p>
            <p>Policy research conducted by SAWTEE includes: &nbsp;</p>
            <ul>
            <li>Mechanism for pruning the sensitive list under SAFTA</li>
            <li>Trade and climate change in the context of South Asia</li>
            <li>Traditional health services in South Asia</li>
            <li>Liberalization of services trade in South Asia</li>
            <li>Mechanisms for protecting farmers&rsquo; rights to livelihood in the Hindu-Kush Himalayan Region</li>
            <li>Positive trade agenda for South Asian LDCs</li>
            <li>Agricultural liberalization in South Asia</li>
            <li>Gender implications of Nepal&rsquo;s accession to the WTO&nbsp;</li>
            </ul>',
            'parent_id' => 7,
            'page_id' => 1,
            'link' => null,
            'created_at' => now(),
            'updated_at' => '',
        ]);
        DB::table("sections")->insert([
            'id' => 9,
            'title' => 'Advocacy',
            'type' => 'accordian',
            'description' => '<p>SAWTEE conducts various programmes advocating the cause of social justice and economic equity in the context of globalization and liberalization in general and trade liberalization in particular. SAWTEE and its member institutions organize conferences, seminars, policy dialogues, consultation meetings, talk programmes, monthly forums and interaction programmes at regular intervals to achieve this objective. The advocacy at the policy level is also supplemented by publication and distribution of policy briefs, briefing papers and issue papers on relevant issues on a timely manner.</p>

            <p>Successful advocacy campaigns of SAWTEE and its member institutions include:</p>

            <ul>
            <li>Adoption of the concept of regional “seed bank” as an instrument for protecting food security in South Asia, which is reflected in the Declaration adopted by the 16th Summit of the South Asian Association for Regional Cooperation (SAARC) held in Bhutan in April 2010.</li>
            <li>Convincing the Government of Nepal to preserve policy space required for achieving its development objectives in the process of signing Trade and Investment Framework Agreement (TIFA) with the United States.
            Convincing the Government of Nepal to preserve the policy space required for achieving its development objectives in the process of the country’s accession to the WTO.</li>
            <li>Convincing South Asian governments not to join the International Union for the Protection of New Varieties of Plant (UPOV), which could be detrimental to the interest of nearly 800 million farmers in the region.</li>',
            'parent_id' => 7,
            'page_id' => 1,
            'link' => null,
            'created_at' => now(),
            'updated_at' => '',
        ]);
        DB::table("sections")->insert([
            'id' => 10,
            'title' => 'Capacity Building',
            'type' => 'accordian',
            'description' => "<p>Recognizing the need to build the capacity of the concerned stakeholders in South Asia so as to better equip them with information and advocacy tools to provide adequate safety nets for the protection of poor, marginalized and vulnerable communities and people through enhanced regional and international cooperation, SAWTEE conducts capacity-building activities at various levels. Training workshops, monthly forums, information dissemination, internship programmes, etc., are the major vehicles through which SAWTEE builds the capacity of its member institutions, network institutions and other NGOs.</p>
            <p>Some of the capacity-building efforts of SAWTEE and its member institutions include:</p>
            <ul>
            <li>Training of South Asian Economic Journalists on WTO issues and subsequent formation of South Asian Centre for Economic Journalists (SACEJ).</li>
            <li>Training of South Asian researchers on Computable General Equilibrium (CGE) modelling for three consecutive years since 2008.</li>
            <li>Creating a batch of young WTO practitioners from South Asia, through continuous training to the same group of people for eight years (between 1997 and 2004).</li>
            <li>Capacity building of Nepali customs officials on Nepal&rsquo;s obligations under multilateral, regional and bilateral trade agreements.&nbsp;</li>
            <li>Capacity building of Nepal's Ministry of Commerce and Supplies (MoCS) on emerging trade issues.</li>
            <li>Capacity building of Nepali trade negotiators on issues and modalities of negotiations of SAARC Framework Agreement on Services (SAFAS).</li>
            </ul>",
            'parent_id' => 7,
            'page_id' => 1,

            'link' => null,
            'created_at' => now(),
            'updated_at' => '',
        ]);
        DB::table("sections")->insert([
            'id' => 11,
            'title' => 'Sensitization',
            'type' => 'accordian',
            'description' => "<p>To inform, educate and provoke action from a wide readership, SAWTEE and its member institutions regularly publish briefing papers on issues related to globalization, liberalization, multilateral trading system, regional cooperation, competition policy, environment, IPRs, food security, farmers&rsquo; rights, etc. SAWTEE also publishes a quarterly magazine titled Trade Insight in which it includes analytical articles on contemporary trade and sustainable development issues. Besides, office bearers and staff members of SAWTEE as well as those of its member institutions publish articles on contemporary issues and agenda pursued by SAWTEE, in national, regional and international newspapers, magazines and journals.</p>
            <p>Successful sensitization programmes conducted by SAWTEE and its member institutions include:</p>
            <ul>
            <li>Sensitization of consumers on the role they need to play in the regulation of electricity.</li>
            <li>Sensitization of foreign ministry officials of South Asia through the publication of special briefs prior to the 16th SAARC Summit.</li>
            <li>Sensitization of Member of Parliaments of Nepal and Pakistan on trade and development issues.</li>
            <li>Sensitization of farmers and indigenous communities on their rights under the Convention of Biological Diversity (CBD) and the International Treaty on Plant Genetic Resources for Food and Agriculture (ITPGRFA), and how to protect these rights in the context of the attempt at ratcheting up intellectual property protection under the WTO's Agreement on Trade-Related Aspects of Intellectual Property Rights (TRIPS) and IPR provisions included in various bilateral and regional trade arrangements.</li>
            </ul>",
            'parent_id' => 7,
            'page_id' => 1,

            'link' => null,
            'created_at' => now(),
            'updated_at' => '',
        ]);
        DB::table("sections")->insert([
            'id' => 12,
            'title' => 'Networking and alliance building',
            'type' => 'accordian',
            'description' => "<p>SAWTEE as well as its member institutions are active members of various national, regional and international alliances. By virtue of this networking, they are involved in collective efforts to realize the objective of fair trade and equitable development in the region. SAWTEE has established network linkages with the media, the academia and research institutions at national, regional and international levels, and seeks and obtains critical inputs from them. At the international level, SAWTEE has established close institutional linkages with ActionAid, London, Bangkok and Kathmandu; Centre for International Environmental Law (CIEL), Geneva; Centre for Policy Dialogue (CPD), Dhaka; Consumers International (CI), London and Kuala Lumpur; EU-LDC Network, Rotterdam; Friedrich Ebert Stiftung (FES), Germany and Kathmandu; Gene Campaign, New Delhi; Institute of Agriculture and Trade Policy (IATP), Minneapolis; International Centre for Trade and Sustainable Development (ICTSD), Geneva; International Plant Genetic Resources Institute (IPGRI), Rome; International Development Research Centre (IDRC), Ottawa; Local Initiatives for Biodiversity, Research and Development (LI-BIRD), Pokhara; MS Swaminathan Research Foundation (MSSRF), Chennai; Novib, The Hague; Oxfam, New Delhi; Southern and Eastern African Trade Information and Negotiations Institute (SEATINI), Harare; Southeast Asian Council for Food Security &amp; Fair Trade (SEACON), Kuala Lumpur; The World Conservation Union (IUCN), Kathmandu; United Nations Conference on Trade and Development (UNCTAD), Geneva and New Delhi; Wageningen University, Wageningen; World Trade Institute (WTI), Berne; and World Trade Organisation (WTO), Geneva, among others. &nbsp;</p>",
            'parent_id' => 7,
            'page_id' => 1,

            'link' => null,
            'created_at' => now(),
            'updated_at' => '',
        ]);
        DB::table("sections")->insert([
            'id' => 13,
            'title' => 'Resources',
            'type' => 'default',
            'description' => "<p>SAWTEE has been sustaining itself through membership fees and contributions, sales proceeds of its publications and support from development partners. SAWTEE has received support from, among others, the following development partners:</p>
            <ul>
            <li>ActionAid, Kathmandu and Bangkok</li>
            <li>The Asia Foundation, Kathmandu</li>
            <li>CARITAS, Kathmandu</li>
            <li>Development Fund, Oslo</li>
            <li>Department for International Development, Kathmandu</li>
            <li>Friedrich Ebert Stiftung, New Delhi and Kathmandu</li>
            <li>Ford Foundation, New Delhi</li>
            <li>International Centre for Integrated Mountain Development (ICIMOD), Kathmandu</li>
            <li>International Development Research Centre (IDRC), Ottawa</li>
            <li>MS Nepal, Kathmandu</li>
            <li>Oxfam Novib, The Hague</li>
            <li>United Nations Conference on Trade and Development (UNCTAD), Geneva</li>
            <li>United Nations Development Programme (UNDP), Kathmandu, Regional Centre in Colombo and Regional Centre in Bangkok</li>
            <li>United Nations Fund for Women (UNIFEM) Regional Office, New Delhi</li>
            <li>USC Canada, Kathmandu</li>
            </ul>",
            "parent_id"=> null,
            'page_id' => 1,

            'link' => null,
            'created_at' => now(),
            'updated_at' => '',
        ]);
        DB::table("sections")->insert([
            'id' => 14,
            'title' => 'Intro',
            'type' => 'default',
            'description' => "<p>Dedicated to fair, equitable, inclusive, and sustainable growth and development in South Asia, SAWTEE is working towards poverty reduction, food and livelihood security, gender equity, and biodiversity conservation and environmental sustainability. With these guiding elements, our major thematic areas for research and advocacy are the following:</p>",
            "parent_id" => null,
            'page_id' => 2,
            'link' => null,
            'created_at' => now(),
            'updated_at' => '',
        ]);
        DB::table("sections")->insert([
            'id' => 15,
            'title' => 'Sectors',
            'type' => 'tabs',
            'description' => "",
            "parent_id" => null,
            'page_id' => 2,
            'link' => null,
            'created_at' => now(),
            'updated_at' => '',
        ]);
        DB::table("sections")->insert([
            'id' => 16,
            'title' => 'Our Programmes',
            'type' => 'tabs',
            'description' => "",
            "parent_id" => 15,
            'page_id' => 2,
            'link' => "programmes",
            'created_at' => now(),
            'updated_at' => '',
        ]);
        DB::table("sections")->insert([
            'id' => 17,
            'title' => 'Research',
            'type' => 'tabs',
            'description' => "",
            "parent_id" => 15,
            'page_id' => 2,
            'link' => "research",
            'created_at' => now(),
            'updated_at' => '',
        ]);
    }
}

