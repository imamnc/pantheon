<?php

namespace Modules\Base\Database\Seeders;

use Illuminate\Database\Seeder;

class BaseDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->call([
            MstCountriesSeeder::class,
            MstProvincesSeeder::class,
            MstCurrencySeeder::class
        ]);
    }
}
