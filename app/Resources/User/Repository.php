<?php

namespace App\Resources\User;

use App\Resources\User;
use Daveawb\Repos\Repository as BaseRepository;

/**
 * Class Repository
 * @package App\Resources\User
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
        return User::class;
    }
}