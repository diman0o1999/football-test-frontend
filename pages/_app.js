import 'bootstrap/dist/css/bootstrap.min.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css'

import withReduxSaga from 'next-redux-saga'
import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'

import createStore from '../store/store'

const MyApp = (props) => {
  // eslint-disable-next-line react/prop-types
  const { Component, pageProps, store } = props
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default withRedux(createStore)(withReduxSaga(MyApp))
