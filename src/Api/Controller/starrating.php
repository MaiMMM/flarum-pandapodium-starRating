<?php

namespace Maimmm\Starrating\Api\Controller;

use Flarum\Api\Controller\AbstractSerializeController;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Collection;
use Tobscure\JsonApi\Resource;
use Tobscure\JsonApi\SerializerInterface;
use Serializer;

class starrating extends AbstractSerializeController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = Serializer::class;

    /**
     * {@inheritdoc}
     */
    protected function createElement($data, SerializerInterface $serializer)
    {
        // See https://docs.flarum.org/extend/api.html#api-endpoints for more information.

        // return new Collection($data, $serializer);
        // return new Resource($data, $serializer);
    }
}
