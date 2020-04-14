import {combineReducers} from "redux";
import authorsList from './pages/containers/AuthorsList/reducers'
import postsTable from './pages/containers/PostsTable/reducers'


const initialState = {
    error: null,
}

const defaultReducer = (state=initialState, action) => {
    state.error = null
    if (action.type.match(/^.*(FAIL|ERROR).*$/))
        return {...state, error: action.payload}
    return state
}

export default combineReducers({
    default: defaultReducer,
    authorsList,
    postsTable
})