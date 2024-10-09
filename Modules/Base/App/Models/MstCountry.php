<?php

namespace Modules\Base\App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Base\Database\factories\MstCountryFactory;

class MstCountry extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $table = 'mst_countries';
    protected $fillable = [
        'country_name',
    ];

    protected static function newFactory(): MstCountryFactory
    {
        return MstCountryFactory::new();
    }

    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('d-m-Y H:m:s');
    }
}
