<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		$gambar = [
			'https://cdnlogo.com/logos/b/50/bootstrap.svg',
			'https://www.cdnlogo.com/logos/v/69/vue.svg',
			'https://www.cdnlogo.com/logos/m/10/mysql.svg',
			'https://www.cdnlogo.com/logos/a/25/apache.svg',
			'https://www.cdnlogo.com/logos/p/79/php.svg'
		];
		
        for($i = 1; $i < 6; $i++)
		{
			$name = 'product'.$i;
			DB::table('products')->insert([
				'title' => $name,
				'description' => $name.'@gmail.com',
				'image' => $gambar[$i-1],
				'price' => rand(10,1000),
				'created_at' => Carbon::now(),
				'updated_at' => Carbon::now(),
			]);
		}
    }
}
