import {put, takeEvery} from "redux-saga/effects";
import {fetchAuthors} from "../../../api/authors_api";
import {
    CLEAR_AUTHOR_DETAIL,
    GET_AUTHOR_DETAIL,
    GET_AUTHORS,
    GET_AUTHORS_FAILURE,
    GET_AUTHORS_SUCCESS,
} from "./actionTypes";


export const getAuthors = () => ({type: GET_AUTHORS})
export const getAuthor = (id) => ({type: GET_AUTHOR_DETAIL, payload: id})
export const clearAuthor = () => ({type: CLEAR_AUTHOR_DETAIL})

function* getAuthorsGen() {
    try {
        const authors = yield fetchAuthors()
        yield put({type: GET_AUTHORS_SUCCESS, payload: authors});
    } catch (err) {
        yield put({type: GET_AUTHORS_FAILURE, payload: `Internal error: ${err.message}`})
    }
}

export function* authorsWatcher() {
    yield takeEvery(GET_AUTHORS, getAuthorsGen)
}