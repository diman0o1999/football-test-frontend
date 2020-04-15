import { combineReducers } from 'redux'

import authors from './authors/reducer'

const rootReducer = combineReducers({
  authors,
})

export default rootReducer
