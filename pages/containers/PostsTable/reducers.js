import {GET_POSTS, GET_POSTS_SUCCESS} from "./actionTypes";


const initialState = {
    posts: [],
    isLoading: false,
}

export default (state=initialState, action) => {
    state.isLoading = false
    switch (action.type) {
        case GET_POSTS:
            return {...state, isLoading: true}
        case GET_POSTS_SUCCESS:
            return {...state, posts: action.payload}
        default:
            return state
    }
}