<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
		DB::statement('SET FOREIGN_KEY_CHECKS=0;');
		DB::table('users')->truncate();
		DB::table('products')->truncate();
		DB::statement('SET FOREIGN_KEY_CHECKS=1;');
		
		DB::beginTransaction();
		try
		{
			$this->call([
				UserSeeder::class,
				ProductSeeder::class,
			]);
			DB::commit();
		}
		catch(Exception $e)
		{
			DB::rollback();
		}
    }
}
