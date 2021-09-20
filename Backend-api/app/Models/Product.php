<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'slug',
        'name',
        'category',
        'brand',
        'price',
        'description',
        'shortDescription',
        'imageUrl_1',
        'imageUrl_2',
        'imageUrl_3',
    ];
}
