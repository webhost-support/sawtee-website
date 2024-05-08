<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Laravel\Scout\Attributes\SearchUsingFullText;
use Laravel\Scout\Attributes\SearchUsingPrefix;


class Publication extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;
    use Searchable;

    protected $fillable = ['title', 'subtitle', 'description', 'category_id'];

    protected $with = ['media', 'file'];

      /**
     * Get the indexable data array for the model.
     *
     * @return array<string, mixed>
     */

    #[SearchUsingPrefix(['title', 'subtitle'])]
    #[SearchUsingFullText(['description'])]

    public function toSearchableArray(): array
    {
        return [
            'title' => $this->title,
            'subtitle' => $this->subtitle,
            'description' => $this->description,
        ];
    }


    public function file()
    {
        return $this->morphOne(File::class, 'fileable');
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function registerMediaConversions(Media $media = null): void
    {
        $this
            ->addMediaConversion('preview')
            ->fit(Manipulations::FIT_MAX, 180, 240)
            ->quality(70)
            ->sharpen(10)
            ->keepOriginalImageFormat()
            ->nonQueued();
    }


    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('publication_featured_image')
            ->singleFile();

        $this->addMediaCollection('files')
            ->singleFile();
    }


}
