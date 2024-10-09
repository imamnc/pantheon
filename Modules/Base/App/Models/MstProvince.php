<?php

namespace Modules\Base\App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Base\Database\factories\MstProvinceFactory;

class MstProvince extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $table = 'mst_provinces';
    protected $fillable = [
        'province_name',
        'country_id'
    ];

    protected static function newFactory(): MstProvinceFactory
    {
        return MstProvinceFactory::new();
    }

    public function country()
    {
        return $this->belongsTo(MstCountry::class, 'country_id', 'id');
    }

    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('d-m-Y H:m:s');
    }
}
