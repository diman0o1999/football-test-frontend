const initialState = {
    isLoading: false,
    authors: [],
    error: null
}

export default (state=initialState, action) => {
    state.error = null
    switch (action.type) {
        case 'GET_AUTHORS' || 'COUNT_POSTS':
            return {...state, isLoading: true}
        case 'GET_AUTHORS_SUCCESS':
            return {...state, authors: action.payload, isLoading: false}
        case 'GET_AUTHORS_FAILURE':
            return {...initialState, error: action.payload}
        default:
            return state
    }
}