package com.tracelens.mobile

// Intentional bug: session expired and user is null.
class SessionStore {
    fun requireUser(): User {
        val user: User? = null
        checkNotNull(user) { "User session expired" }
        return user
    }
}
