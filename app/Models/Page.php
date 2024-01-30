<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Page extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected $fillable = ['name', 'slug', 'content', 'meta_title', 'meta_description'];

    public function sections(): HasMany
    {
        return $this->hasMany(Section::class);
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
