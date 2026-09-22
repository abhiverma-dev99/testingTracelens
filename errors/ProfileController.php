<?php

namespace App\Http\Controllers;

// Intentional bug: $user is null.
class ProfileController
{
    public function show($user)
    {
        return $user->email;
    }
}
