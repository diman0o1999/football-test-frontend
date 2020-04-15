import produce from 'immer'
// import reject from 'lodash/reject'
// import isNull from 'lodash/isNull'

import {
  FETCH_AUTHORS_REQUESTED,
  FETCH_AUTHORS_SUCCEEDED,
  FETCH_AUTHORS_FAILED,
} from './actionTypes'

export const defaultAuthors = {
  authors: [],
  loading: true,
}

const initialState = defaultAuthors
/* eslint no-param-reassign: "error" */
const commentsReducer = produce((draft = initialState, action) => {
  switch (action.type) {
    case FETCH_AUTHORS_REQUESTED:
      draft.loading = true
      return draft

    case FETCH_AUTHORS_SUCCEEDED:
      draft.authors = action.payload.users
      draft.loading = false
      return draft

    case FETCH_AUTHORS_FAILED:
      draft.error = action.payload.error
      draft.loading = true
      return draft

    default:
      return draft
  }
})

export default commentsReducer
