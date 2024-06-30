<?php

use Flarum\Database\Migration;

return Migration::dropColumns('posts', [
    'maimmm_rating' => ['tinyinteger', 'nullable' => true],
]);

return Migration::addColumns('posts', [
    'maimmm_rating' => ['int', 'nullable' => true],
]);
