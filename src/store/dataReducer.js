export const defaultState = {
    data: []
}

const ADD_DATA_FROM_SWAPI = "ADD_DATA_FROM_SWAPI";

export const dataReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_DATA_FROM_SWAPI:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        default:
            return state;
    }
}

export const addDataFromSwapi = (payload) => ({type: ADD_DATA_FROM_SWAPI, payload});
