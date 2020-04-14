import {authorsWatcher} from "./pages/containers/AuthorsList/actions";
import {all} from "redux-saga/effects";
import {postsWatcher} from "./pages/containers/PostsTable/actions";


export default function* rootSaga() {
    yield all([authorsWatcher(), postsWatcher()]);
}