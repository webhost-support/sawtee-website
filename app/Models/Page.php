<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
class Page extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;
    use HasSlug;
    protected $fillable = ['name', 'slug', 'content', 'meta_title', 'meta_description'];


    /**
     * Get the options for generating the slug.
     */
    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug')
            // ->skipGenerateWhen(fn () => $this->status !== "published")
            ->startSlugSuffixFrom(2);
    }

    public function sections(): HasMany
    {
        return $this->hasMany(Section::class);
    }


    public function registerMediaConversions(Media $media = null): void
    {
        $this
            ->addMediaConversion('preview')
            ->fit(Manipulations::FIT_MAX, 600, 300)
            ->quality(90)
            ->sharpen(30)
            ->keepOriginalImageFormat()
            ->nonQueued();

        $this
            ->addMediaConversion('responsive')
            ->fit(Manipulations::FIT_MAX, 1920, 1080)
            ->performOnCollections('page-media')
            ->quality(90)
            ->keepOriginalImageFormat()
            ->withResponsiveImages()
            ->nonQueued();
    }

    // protected $with = ['media'];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('page-media');
    }



    /**
     * Get the route key for the model.
     *
     * @return string
     */
    // public function getRouteKeyName()
    // {
    //     return 'slug';
    // }
}
