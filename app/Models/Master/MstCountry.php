<?php

namespace App\Models\Master;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MstCountry extends Model
{
    use HasFactory;

    protected $table = 'mst_countries';
    protected $fillable = [
        'country_name',
    ];

    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('d-m-Y H:m:s');
    }
}
