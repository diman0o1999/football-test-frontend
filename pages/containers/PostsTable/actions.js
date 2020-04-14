import {GET_POSTS, GET_POSTS_FAILURE, GET_POSTS_SUCCESS} from "./actionTypes";
import {put, takeEvery} from "redux-saga/effects";
import {fetchPosts} from "../../../api/posts_api";


export const getPosts = () => ({type: GET_POSTS})

function* getPostsGen() {
    try {
        const posts = yield fetchPosts()
        yield put({type: GET_POSTS_SUCCESS, payload: posts});
    } catch (err) {
        yield put({type: GET_POSTS_FAILURE, payload: `Internal error: ${err.message}`})
    }
}

export function* postsWatcher() {
    yield takeEvery(GET_POSTS, getPostsGen)
}