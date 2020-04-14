import {
    GET_AUTHORS,
    GET_AUTHORS_SUCCESS,
    GET_AUTHORS_FAILURE,
    GET_AUTHOR_DETAIL, CLEAR_AUTHOR_DETAIL
} from "./actionTypes";


const initialState = {
    isLoading: false,
    authors: [],
    authorDetail: null,
    error: null
}

export default (state=initialState, action) => {
    state.error = null
    state.isLoading = false
    switch (action.type) {
        case GET_AUTHORS:
            return {...state, isLoading: true}
        case GET_AUTHORS_SUCCESS:
            return {...state, authors: action.payload}
        case GET_AUTHORS_FAILURE:
            return {...initialState, error: action.payload}
        case GET_AUTHOR_DETAIL:
            const authorDetail = state.authors.find(author => author.id === action.payload)
            return {...state, authorDetail}
        case CLEAR_AUTHOR_DETAIL:
            return {...state, authorDetail: null}
        default:
            return state
    }
}