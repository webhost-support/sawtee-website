<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Laravel\Scout\Searchable;
use Laravel\Scout\Attributes\SearchUsingFullText;
use Laravel\Scout\Attributes\SearchUsingPrefix;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
class Post extends Model implements HasMedia
{

    use InteractsWithMedia;
    use HasFactory;
    use Searchable;
    use HasSlug;

    protected $fillable = ['title', 'slug', 'content', 'excerpt', 'category_id', 'theme_id', 'author', 'genre', 'status', 'link', 'published_at', 'meta_title', 'meta_description'];



    /**
     * Get the indexable data array for the model.
     *
     * @return array<string, mixed>
     */

    #[SearchUsingPrefix([ 'title', 'author'])]

    public function toSearchableArray(): array
    {
        return [
            'title' => $this->title,
            'author' => $this->author,
            'excerpt' => $this->excerpt,
        ];
    }

    /**
     * Determine if the model should be searchable.
     */
    public function shouldBeSearchable(): bool
    {
        return $this->status === "published";
    }

    /**
     * Get the options for generating the slug.
     */
    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug')
            ->startSlugSuffixFrom(2);
    }

    // /**
    //  * Get the route key for the model.
    //  *
    //  * @return string
    //  */
    // public function getRouteKeyName()
    // {
    //     return 'slug';
    // }

    public function postContentFiles()
    {
        return $this->morphMany(File::class, 'fileable');
    }

    public function registerMediaConversions(Media $media = null): void
    {
        $this
            ->addMediaConversion('preview')
            ->fit(Manipulations::FIT_MAX, 400, 300)
            ->quality(70)
            ->sharpen(10)
            ->keepOriginalImageFormat()
            ->nonQueued();

        $this
            ->addMediaConversion('responsive')
            ->performOnCollections('post-featured-image')
            ->quality(90)
            ->keepOriginalImageFormat()
            ->withResponsiveImages()
            ->nonQueued();
    }


    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('post-featured-image')
            ->singleFile();

        $this->addMediaCollection('post-content-media');

        $this->addMediaCollection('post-files');
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function theme(): BelongsTo
    {
        return $this->belongsTo(Theme::class);
    }

    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class)->as('tags');
    }

    public function scopeIdDescending($query)
    {
        return $query->orderBy('id', 'DESC');
    }


}
