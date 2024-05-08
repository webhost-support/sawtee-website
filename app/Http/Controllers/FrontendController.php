<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Page;
use App\Models\Post;
use App\Models\Publication;
use App\Models\Research;
use App\Models\Section;
use App\Models\Slide;
use App\Models\Slider;
use App\Models\Team;
use App\Models\Theme;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Spatie\Newsletter\Facades\Newsletter;

/**
 * A function to retrieve posts based on category and slug.
 *
 * @param Category $category The category object.
 * @param string $slug The slug parameter.
 * @return \Illuminate\Pagination\LengthAwarePaginator|array The paginated list of posts or grouped posts.
 */
function getPosts($category, $slug)
{
    $subcategory_ids = $category->children->pluck('id')->toArray();
    $parent_and_subcategory_ids = array_merge(array($slug === 'programme' ? null : $category->id), $subcategory_ids);
    $posts = Post::query()
        ->with('category', 'category.parent', 'media')
        ->whereIn('category_id', $parent_and_subcategory_ids)
        ->orderByDesc('id')
        ->where('status', 'published')
        ->paginate(10);

    // If route is for research category
    if ($slug === 'research') {
        $collection = Research::with('media', 'file')->orderByDesc('id')->get();
        $posts = collect($collection)->groupBy('year')->all();
    }

    // If route is for teams category
    if ($slug === 'teams') {
        $posts = Team::with('media')->orderByDesc('order')->get();
    }

    return $posts;
}

class FrontendController extends Controller
{

    /**
     * Retrieves data for the home page and renders the 'Frontend/Pages/Home' view.
     *
     * @return \Inertia\Response
     */
    public function index()
    {

        $subcategorySlugs = ["trade-insight", "books", "issue-paper", "policy-brief"];
        $publications = [];

        // Retrieve the category named "publication" along with its subcategories
        $category = Category::where('slug', 'publications')
            ->with(['children' => function ($query) use ($subcategorySlugs) {
                // Filter subcategories by the provided slugs
                $query->whereIn('slug', $subcategorySlugs);
            }])
            ->first();

        // Loop through each subcategory and retrieve 2 posts per subcategory
        foreach ($category->children as $subcategory) {
            // Retrieve 2 posts per subcategory
            $subcategoryPosts = Publication::with(['media', 'file', 'category'])->where('category_id', $subcategory->id)
                ->orderBy('id', "DESC")
                ->limit(2)
                ->get();

            // Merge posts into the main array
            $publications = array_merge($publications, $subcategoryPosts->toArray());
        }

        $infocusId = Category::where('slug', 'infocus')->first()->id;
        $sawteeInMediaId = Category::where('slug', 'sawtee-in-media')->first()->id;
        $eventsId = Category::where('slug', 'featured-events')->first()->id;
        $newsletterCategoryId = Category::where('slug', 'newsletters')->first()->id;
        $slider = Slider::first();
        $slides = Slide::where('slider_id', $slider->id)->get();
        $infocus = Post::where('category_id', strval($infocusId))->where('status', 'published')->orderBy('id', 'DESC')->take(10)->get();
        $sawteeInMedia = Post::where('category_id', strval($sawteeInMediaId))->where('status', 'published')->orderBy('id', 'DESC')->take(6)->get();
        $events = Post::where('category_id', strval($eventsId))->where('status', 'published')->orderBy('id', 'DESC')->take(5)->get();
        $newsletters = Post::where('category_id', strval($newsletterCategoryId))->where('status', 'published')->orderBy('id', 'DESC')->take(10)->get();
        return Inertia::render('Frontend/Pages/Home', [
            'slides' => $slides->load(['media']),
            'infocus' => $infocus->load(['category']),
            'sawteeInMedia' => $sawteeInMedia->load('category'),
            'events' => $events->load(['category', 'media', 'tags']),
            'publications' => $publications,
            'newsletters' => $newsletters,
        ]);
    }

    /**
     * Retrieves a page by its slug and loads associated sections and themes if necessary.
     *
     * @param datatype $slug The slug of the page to retrieve
     * @throws ModelNotFoundException if the page is not found
     * @return \Inertia\Response
     */
    public function page($slug)
    {
        $page = Page::where('slug', $slug)->firstOrFail();

        $sections = Section::where('page_id', $page->id)->get();
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


    /**
     * Retrieves the category, subcategory, and post information based on the provided slugs.
     *
     * @param string $slug The slug of the category.
     * @param string|null $subcategory The slug of the subcategory (optional).
     * @param string|null $post The slug of the post (optional).
     * @return \Inertia\Response The rendered Inertia response.
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException If the category is not found.
     */
    public function category($slug, $subcategory = null, $post = null)
    {
        $segments = request()->segments();
        $eventsId = Category::where('slug', 'featured-events')->first()->id;
        $infocusId = Category::where('slug', 'infocus')->first()->id;
        $sawteeInMediaId = Category::where('slug', 'sawtee-in-media')->first()->id;

        $infocus = Post::where('category_id', strval($infocusId))
            ->where('status', 'published')
            ->orderBy('id', 'DESC')
            ->take(5)->get();
        $sawteeInMedia = Post::where('category_id', strval($sawteeInMediaId))
            ->where('status', 'published')
            ->orderBy('id', 'DESC')
            ->take(5)->get();
        $events = Post::where('category_id', strval($eventsId))
            ->where('status', 'published')
            ->orderBy('id', 'DESC')
            ->take(5)->get();
        $category = Category::where('slug', $slug)->firstOrFail();
        $featured_image = $category->getFirstMediaUrl('category_media');
        $srcSet = $category->getFirstMedia('category_media')?->getSrcset('responsive');
        $posts = getPosts($category, $slug);


        // If route is for publications category
        if ($slug === 'publications' && !$subcategory) {
            $publications = array();
            foreach ($category->children as $subcategory) {
                $posts = $subcategory->publications()->orderByDesc('id')->take(6)->get();
                $publications[$subcategory->slug] = $posts->toArray();
            }
            return Inertia::render('Frontend/Archives/PublicationsArchive', [
                'category' => $category,
                'infocus' => $infocus,
                'sawteeInMedia' => $sawteeInMedia,
                'publications' => $publications,
                'srcSet' => $srcSet
            ]);
        }

        if ($slug === 'teams' && !$subcategory) {
                $teams = Team::with('media')->orderByDesc('id')->simplePaginate(12);
                return Inertia::render('Frontend/Archives/TeamsArchive', [
                    'category' => $category,
                    'teams' => $teams,
                    'featured_image' => $featured_image,
                    'srcSet' => $srcSet
                ]);
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
                $publications = Publication::where('category_id', $category->id)->orderByDesc('id')->paginate(12);
                return Inertia::render('Frontend/Archives/PublicationCategory', [
                    'category' => $category,
                    'publications' => $publications,
                    'infocus' => $infocus,
                    'sawteeInMedia' => $sawteeInMedia,
                    'featured_image' => $featured_image,
                    'srcSet' => $srcSet
                ]);
            }

            if (!$category) {
                $category = Category::with('parent')->where('slug', $segments[1])->first();
                $post = Post::where('slug', $segments[2])->firstOrFail();
                return Inertia::render('Frontend/Post', ['post' => $post->load('category', 'category.parent', 'media')]);
            }

            return Inertia::render('Frontend/Category', [
                'category' => $category->load(['parent', 'children']),
                'posts' => $posts,
                'infocus' => $infocus,
                'sawteeInMedia' => $sawteeInMedia,
                'featured_image' => $featured_image,
                'srcSet' => $srcSet
            ]);
        }

        return Inertia::render('Frontend/Category', [
            'category' => $category->load(['parent', 'children']),
            'posts' => $posts,
            'infocus' => $infocus,
            'sawteeInMedia' => $sawteeInMedia,
            'events' => $events->load(['category', 'media']),
            'featured_image' => $featured_image,
            'srcSet' => $srcSet
        ]);
    }

    public function search(Request $request)
    {

        // $publications = Publication::search($request->search)->get();
        // $research = Research::search($request->search)->get();
        $posts = Post::search($request->search)->take(10)->get();
        return response()->json($posts);
    }


}
