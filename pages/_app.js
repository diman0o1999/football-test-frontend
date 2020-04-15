import 'bootstrap/dist/css/bootstrap.min.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css'

import React from "react";
import {Provider} from "react-redux";
import withRedux from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers";
import rootSaga from "../sagas";



const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

const App = ({Component, pageProps, store}) => (
    <Provider store={store}>
        <Component {...pageProps}/>
    </Provider>
)

const makeStore = () => store
export default withRedux(makeStore)(App)