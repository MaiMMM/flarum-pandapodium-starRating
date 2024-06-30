<?php


namespace maimmm\starRating\Listener;


use Flarum\Post\Event\Deleted;
use Flarum\Post\Event\Saving;
use Illuminate\Contracts\Events\Dispatcher;


class SaveRatingToDataBase
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Saving::class, [$this, 'whenPostIsSaving']);
        $events->listen(Deleted::class, [$this, 'whenPostIsDeleted']);
    }

    public function whenPostIsSaving(Saving $event)
    {
        $data = $event->data;
        $post = $event->post;

        if (isset($data['attributes']['maimmm_rating'])) {
            $post->maimmm_rating = $data['attributes']['maimmm_rating'];
        }
    }

    public function whenPostIsDeleted(Deleted $event)
    {
        $post = $event->post;

        $post->ratings()->delete();
    }
}