<?php

namespace Flarum\starRating\Api;

use Flarum\Discussion\Discussion;
use Flarum\Http\RequestUtil;
use Flarum\Post\Post;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Query\Expression;
use Psr\Http\Message\ServerRequestInterface;

class LoadRatingRelationship
{
    public static $maxLikes = 4;
    
    public static function mutateRelation(BelongsToMany $query, ServerRequestInterface $request): BelongsToMany
    {
        $actor = RequestUtil::getActor($request);

        $grammar = $query->getQuery()->getGrammar();

        return $query
            // So that we can tell if the current user has liked the post.
            ->orderBy(new Expression($grammar->wrap('user_id').' = '.$actor->id), 'desc')
            // Limiting a relationship results is only possible because
            // the Post model uses the \Staudenmeir\EloquentEagerLimit\HasEagerLimit
            // trait.
            ->limit(self::$maxLikes);
    }
}