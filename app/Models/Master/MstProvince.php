<?php

namespace App\Models\Master;

use App\Models\Master\MstCountry;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MstProvince extends Model
{
    use HasFactory;

    protected $table = 'mst_provinces';
    protected $fillable = [
        'province_name',
        'country_id'
    ];

    public function country()
    {
        return $this->belongsTo(MstCountry::class, 'country_id', 'id');
    }

    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('d-m-Y H:m:s');
    }
}
