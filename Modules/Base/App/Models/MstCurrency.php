<?php

namespace Modules\Base\App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Base\Database\factories\MstCurrencyFactory;

class MstCurrency extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $table = 'mst_currencies';
    protected $fillable = ['currency_name', 'symbol', 'label'];

    protected static function newFactory(): MstCurrencyFactory
    {
        return MstCurrencyFactory::new();
    }

    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('d-m-Y H:m:s');
    }
}
