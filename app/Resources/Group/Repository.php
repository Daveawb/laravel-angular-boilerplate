<?php

namespace App\Resources\Group;

use App\Resources\Group;
use Daveawb\Repos\Repository as BaseRepository;

/**
 * Class Repository
 * @package App\Resources\Group
 */
class Repository extends BaseRepository
{
    /**
     * Get the models namespaced class name
     *
     * @return string
     */
    public function model()
    {
        return Group::class;
    }
}