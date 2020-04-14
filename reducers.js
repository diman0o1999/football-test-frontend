import {combineReducers} from "redux";
import authorsList from './pages/containers/AuthorsList/reducers'
import postsTable from './pages/containers/PostsTable/reducers'


export default combineReducers({authorsList, postsTable})