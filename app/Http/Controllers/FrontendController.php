<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Page;
use App\Models\Post;
use App\Models\Publication;
use App\Models\Research;
use App\Models\Section;
use App\Models\Slide;
use App\Models\Team;
use App\Models\Theme;
use Inertia\Inertia;

class FrontendController extends Controller
{
    public function index()
    {
        $infocusId = Category::where('slug', 'infocus')->first()->id;
        $sawteeInMediaId = Category::where('slug', 'sawtee-in-media')->first()->id;
        $eventsId = Category::where('slug', 'featured-events')->first()->id;

        $slides = Slide::with('media')->where('slider_id', 1)->get();
        $infocus = Post::where('category_id', strval($infocusId))->where('status', 'published')->orderBy('id', 'DESC')->take(7)->get();
        $sawteeInMedia = Post::with('category')->where('category_id', strval($sawteeInMediaId))->where('status', 'published')->orderBy('id', 'DESC')->take(6)->get();
        $events = Post::with('category', 'media', 'tags')->where('category_id', strval($eventsId))->where('status', 'published')->orderBy('id', 'DESC')->take(5)->get();
        $books = Publication::where('category_id', strval(Category::where('slug', 'books')->first()->id))->orderBy('id', 'DESC')->take(6)->get();
        $trade_insights = Publication::where('category_id', strval(Category::where('slug', 'trade-insight')->first()->id))->orderBy('id', 'DESC')->take(6)->get();

        return Inertia::render('Frontend/Pages/Home', [
            'slides' => $slides,
            'infocus' => $infocus,
            'sawteeInMedia' => $sawteeInMedia,
            'events' => $events,
            'books' => $books,
            'tradeInsights' => $trade_insights
        ]);
    }


    public function page($slug)
    {
        $page = Page::where('slug', $slug)->firstOrFail();

        $sections = Section::with('media')->where('page_id', $page->id)->get();
        $themes = null;

        if ($slug === 'our-work') {
            $themes = Theme::all();
        }

        return Inertia::render('Frontend/Page', [
            'page' => $page,
            'sections' => $sections->load(['media']),
            'themes' => $themes,
            'featured_image' => $page->getFirstMediaUrl('page-media'),
            'srcSet' => $page->getFirstMedia('page-media')?->getSrcset('responsive'),
        ]);
    }



    public function category($slug, $subcategory = null, $post = null)
    {
        $segments = request()->segments();
        $eventsId = Category::where('slug', 'featured-events')->first()->id;
        $infocusId = Category::where('slug', 'infocus')->first()->id;
        $sawteeInMediaId = Category::where('slug', 'sawtee-in-media')->first()->id;

        $infocus = Post::where('category_id', strval($infocusId))->where('status', 'published')->orderBy('id', 'DESC')->take(5)->get();
        $sawteeInMedia = Post::where('category_id', strval($sawteeInMediaId))->where('status', 'published')->orderBy('id', 'DESC')->take(5)->get();
        $events = Post::with('category', 'media')->where('category_id', strval($eventsId))->where('status', 'published')->orderBy('id', 'DESC')->take(5)->get();


        $category = Category::with('parent', 'children')->where('slug', $slug)->firstOrFail();
        $subcategory_ids = $category->children->pluck('id')->toArray();
        $parent_and_subcategory_ids = array_merge(array($slug === 'programmes' ? null : $category->id), $subcategory_ids);
        $posts = Post::query()->with('category', 'category.parent', 'media')->whereIn('category_id', $parent_and_subcategory_ids)->orderByDesc('id')->where('status', 'published')->paginate(10);

        // If route is for publications category
        if ($slug === 'publications' && !$subcategory) {
            $publications = array();
            foreach ($category->children as $subcategory) {
                $posts = $subcategory->publications()->orderByDesc('id')->take(6)->get();
                $publications[$subcategory->slug] = $posts->toArray();

            }
            return Inertia::render('Frontend/Archives/PublicationsArchive', ['category' => $category, 'infocus' => $infocus, 'sawteeInMedia' => $sawteeInMedia, 'publications' => $publications]);
        }

        // If route is for research category
        if ($slug === 'research' && !$subcategory) {
            $collection = Research::with('media', 'file')->orderByDesc('id')->get();
            $research = collect($collection)->groupBy('year')->all();
            return Inertia::render('Frontend/Archives/ResearchArchive', ['category' => $category, 'infocus' => $infocus, 'sawteeInMedia' => $sawteeInMedia, 'research' => $research]);
        }

        // If route is for teams category
        if ($slug === 'teams' && !$subcategory) {
            $teams = Team::with('media')->orderByDesc('order')->get();
            if (!$category) {
                $category = Team::where('slug', 'team-members')->first();
            }
            return Inertia::render('Frontend/Archives/TeamsArchive', ['infocus' => $infocus, 'sawteeInMedia' => $sawteeInMedia, 'teams' => $teams]);
        }

        // if route is for category/subcategory/post eg: sawtee.org/programmes/ongoing-programmes/post-slug
        if ($subcategory && $post) {
            $slug = $segments[3];
            $post = Post::where('slug', $slug)->firstOrFail();
            return Inertia::render('Frontend/Post', ['post' => $post->load('category', "category.parent", 'media')]);
        }

        // if route is for category/category-slug/subcategory eg: sawtee.org/category/programmes/ongoing-programmes/
        if ($subcategory) {
            $category = Category::with('parent')->where('slug', $subcategory)->first();
            if ($slug === 'publications') {
                $publications = $category->publications()->orderByDesc('id')->simplePaginate(12);
                return Inertia::render('Frontend/Archives/PublicationCategory', ['category' => $category, 'publications' => $publications->load('media', 'file'), 'infocus' => $infocus, 'sawteeInMedia' => $sawteeInMedia]);
            }
            if (!$category) {
                $category = Category::with('parent')->where('slug', $segments[1])->first();
                $post = Post::where('slug', $segments[2])->firstOrFail();
                return Inertia::render('Frontend/Post', ['post' => $post->load('category', 'media')]);

            }

            return Inertia::render('Frontend/Category', [
                'category' => $category,
                'posts' => $posts,
                'infocus' => $infocus,
                'sawteeInMedia' => $sawteeInMedia,
                'featured_image' => $category->getFirstMediaUrl('category_media'),
                'srcSet' => $category->getFirstMedia('category_media')?->getSrcset('responsive'),
            ]);
        }

        return Inertia::render('Frontend/Category', [
            'category' => $category,
            'posts' => $posts,
            'infocus' => $infocus,
            'sawteeInMedia' => $sawteeInMedia,
            'events' => $events,
            'featured_image' => $category->getFirstMediaUrl('category_media'),
            'srcSet' => $category->getFirstMedia('category_media')?->getSrcset('responsive'),
        ]);
    }
}