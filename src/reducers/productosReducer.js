import { FETCH_PRODUCTOS_SUCCESS, DELETE_PRODUCTO } from './../actions/types';

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
        case DELETE_PRODUCTO:
            return {
                ...state,
                productos: state.productos.filter((producto) => producto.id !== action.payload)
            }
            
        default:
            return state;
    }
}