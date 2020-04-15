import {
    FETCH_AUTHORS_REQUESTED,
    FETCH_AUTHORS_SUCCEEDED,
    FETCH_AUTHORS_FAILED,
} from './actionTypes'

export function fetchAuthorsRequested() {
    return {
        type: FETCH_AUTHORS_REQUESTED,
    }
}

export function fetchAuthorsSucceeded(users = []) {
    return {
        type: FETCH_AUTHORS_SUCCEEDED,
        payload: {
            users,
        },
    }
}

export function fetchAuthorsFailed(error) {
    return {
        type: FETCH_AUTHORS_FAILED,
        payload: error,
        error: true,
    }
}
