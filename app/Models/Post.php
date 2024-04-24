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

class Post extends Model implements HasMedia
{
    use InteractsWithMedia;
    use HasFactory;

    protected $fillable = ['title', 'slug', 'content', 'excerpt', 'category_id', 'theme_id', 'author', 'genre', 'status', 'link', 'published_at', 'meta_title', 'meta_description'];

    /**
     * Get the route key for the model.
     *
    //  * @return string
     */
    // public function getRouteKeyName()
    // {
    //     return 'slug';
    // }

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
