<?php

use App\Models\Storage\User\Role;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder {

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        $records = [
            [
                Role::FLD_CODE => Role::admin,
                Role::FLD_NAME => 'admin',
                Role::FLD_DISPLAY_NAME => 'Администратор',
            ],
            [
                Role::FLD_CODE => Role::contractor,
                Role::FLD_NAME => 'contractor',
                Role::FLD_DISPLAY_NAME => 'Исполнитель',
            ],
        ];
        fill_seeds($records, Role::class);
    }
}