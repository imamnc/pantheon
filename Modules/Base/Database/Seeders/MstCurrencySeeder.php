<?php

namespace Modules\Base\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Base\App\Models\MstCurrency;

class MstCurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // $this->call([]);
        MstCurrency::create([
            'symbol' => 'Rp',
            'label' => 'IDR',
            'currency_name' => 'Rupiah'
        ]);
    }
}
