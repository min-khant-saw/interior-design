<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class RoomDesign extends Model
{
    use HasFactory, HasApiTokens;
    protected $fillable = [
        'title',
        'description',
        'category',
        'type',
        'image',
        'user_id',
    ];
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
