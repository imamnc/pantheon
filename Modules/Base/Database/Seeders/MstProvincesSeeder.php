<?php

namespace Modules\Base\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Base\App\Models\MstProvince;

class MstProvincesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // $this->call([]);
        MstProvince::factory()->count(40)->create();
    }
}
