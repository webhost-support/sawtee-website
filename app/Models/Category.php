<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Category extends Model implements HasMedia
{
    use InteractsWithMedia;
    use HasFactory;

    protected $fillable = ['name', 'slug', 'type', 'parent_id', 'meta_title', 'meta_description'];

    public function children(): HasMany
    {
        return $this->hasMany(Category::class, 'parent_id');
    }

    public function parent(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }

    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }

    public function publications(): HasMany
    {
        return $this->hasMany(Publication::class);
    }

    public function research(): HasMany
    {
        return $this->hasMany(Publication::class);
    }


    public function registerMediaConversions(Media $media = null): void
    {
        $this
            ->addMediaConversion('preview')
            ->fit(Manipulations::FIT_CROP, 200, 120)
            ->nonQueued();
    }

    // protected $with = ['media'];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('category_media')
            ->singleFile();
    }

    public function getCategoriesIds($category)
    {
        if (!empty($category)) {
            $array = array($category->id);
            if (count($category->children) == 0)
                return $array;
            else
                return array_merge($array, $this->getChildrenIds($category->children));
        } else
            return null;
    }

    public function getChildrenIds($children)
    {
        $array = array();
        foreach ($children as $subcategory) {
            array_push($array, $subcategory->id);
            if (count($subcategory->children))
                $array = array_merge($array, $this->getChildrenIds($subcategory->children));
        }
        return $array;
    }


    /**
     * Get the route key for the model.
     *
    //  * @return string
     */
    // public function getRouteKeyName()
    // {
    //     return 'slug';
    // }

}
