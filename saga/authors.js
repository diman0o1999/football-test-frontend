import { call, put, takeEvery } from 'redux-saga/effects'

import { FETCH_AUTHORS_REQUESTED } from '../store/authors/actionTypes';
import {
  fetchAuthorsFailed,
  fetchAuthorsSucceeded,
} from '../store/authors/action';
import apiClient from '../lib/api-client'

const _getAuthorsRequested = () => {
  return apiClient
    .get('/users')
    .then((response) =>response)
    .catch((e) => e.response)
}

function* fetchAuthors() {
  try {
    const response = yield call(_getAuthorsRequested)
    console.log('!!!!!fetchAuthors',response);
    yield put(fetchAuthorsSucceeded(response.data))
  } catch (error) {
    console.log('error', error)
    yield put(fetchAuthorsFailed(error))
  }
}

function* CompetitionsSaga() {
  yield takeEvery(FETCH_AUTHORS_REQUESTED, fetchAuthors)
}

export default CompetitionsSaga
