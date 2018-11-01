import { FETCH_PRODUCTOS_SUCCESS } from './../actions/types';

const initialState = {
    productos: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_PRODUCTOS_SUCCESS:
            return {
                ...state,
                productos: action.payload
            }
        default:
            return state;
    }
}