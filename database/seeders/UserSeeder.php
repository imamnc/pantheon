<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Employee 1
        $pegawai1 = User::create([
            'name' => 'Demo Pegawai',
            'email' => 'pegawai@demo.demo',
            'password' => Hash::make('demo'),
        ]);
        $pegawai1->givePermissionTo('view country');
        $pegawai1->givePermissionTo('add country');
        $pegawai1->givePermissionTo('delete country');

        // Employee 2
        $pegawai2 = User::create([
            'name' => 'Demo Pegawai 2',
            'email' => 'pegawai2@demo.demo',
            'password' => Hash::make('demo'),
        ]);
    }
}
