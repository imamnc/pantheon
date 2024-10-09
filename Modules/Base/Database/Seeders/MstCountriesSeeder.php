<?php

namespace Modules\Base\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Base\App\Models\MstCountry;

class MstCountriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // $this->call([]);
        MstCountry::factory()->count(20)->create();
    }
}
