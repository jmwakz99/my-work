const defaultState = {
    selectedProject: {}
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_SELECTED_PROJECT':
            return {
                ...state,
                selectedProject: action.payload
            }
        default: return state
    }
}


export default reducer;