<?php

/*
 * This file is part of maimmm/flarum-ext-starrating.
 *
 * Copyright (c) 2024 maimmm.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace maimmm\starRating;

use Flarum\Extend;
use Flarum\Post\Post;
use Flarum\Api\Serializer\PostSerializer;
use Flarum\Post\Event\Saving;
// use Flarum\maimmm\starRating\Listener\SaveRatingToDataBase;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__.'/locale'),

    // create a new model for maimmm_rating for flarum_db.posts
    // find relationships here (https://docs.flarum.org/extend/models#relationships)
    (new Extend\Model(Post::class))
        ->cast('maimmm_rating', 'integer'),

    // extend PostSerializer to include maimmm_rating
    (new Extend\ApiSerializer(PostSerializer::class))
        ->attribute('maimmm_rating', function ($serializer, $model) {
            return (int) $model->maimmm_rating;
        }),

    (new Extend\Event())
        ->listen(Saving::class, function (Saving $event) {
            $data = $event->data;
            $post = $event->post;

            if (isset($data['attributes']['maimmm_rating'])) {
                $post->maimmm_rating = $data['attributes']['maimmm_rating'];
            }
        }),

    (new Extend\Settings())
        ->default('maimmm-star-rating.tag',true)
    // create a new api controller for maimmm_rating
    // (new Extend\ApiController())
];
  