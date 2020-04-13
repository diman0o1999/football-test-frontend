import React from "react"
import AuthorPanel from "./containers/AuthorsList"
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import {applyMiddleware, createStore} from "redux";
import {authorsWatcher} from "./containers/AuthorsList/actions";
import {all} from "redux-saga/effects";


function* rootSaga() {
    yield all([authorsWatcher()]);
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default () => (
    <Provider store={store}>
        <div>
            <AuthorPanel />
        </div>
    </Provider>
)