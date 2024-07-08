<?php

use Flarum\Database\Migration;
use Illuminate\Support\Facades\Schema;

if(!Schema::hasColumn('posts', 'maimmm_rating')){
    return Migration::addColumns('posts', [
        'maimmm_rating' => ['integer', 'nullable' => true],
    ]);

}

