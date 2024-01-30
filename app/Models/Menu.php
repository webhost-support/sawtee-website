<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Menu extends Model
{
    use HasFactory;
    protected $table = 'menus';
    protected $fillable = ['title', 'location', 'content', 'created_at', 'updated_at'];

    // public function widgets(): HasMany
    // {
    //     return $this->hasMany(Widget::class)->as('widgets');
    // }

}
