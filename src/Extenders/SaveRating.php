<?php

namespace Kilowhat\Ratings\Extenders;

use Flarum\Extend\ExtenderInterface;
use Flarum\Extension\Extension;
use Flarum\Post\Event\Saving;
use Flarum\User\AssertPermissionTrait;
use Illuminate\Contracts\Container\Container;
use Illuminate\Support\Arr;
use Illuminate\Support\Optional;
use Kilowhat\Ratings\Validators\RatingValidator;

class SaveRating implements ExtenderInterface
{
    public function extend(Container $container, Extension $extension = null)
    {
        $container['events']->listen(Saving::class, [$this, 'saveRating']);
    } 

    public function saving(Saving $event)
    {
        $attributes = Arr::get($event->data, 'attributes', []);

        
    }
}
