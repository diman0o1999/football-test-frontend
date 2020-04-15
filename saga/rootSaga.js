import { all } from 'redux-saga/effects'

import authors from './authors'

function* rootSaga() {
  yield all([
    authors(),
  ])
}

export default rootSaga
