import { FETCH_PRODUCTOS_REQUEST, FETCH_PRODUCTOS_SUCCESS } from './types';

import axios from 'axios';

export const fetchProductos = () => async dispatch => {
    dispatch({
        type: FETCH_PRODUCTOS_REQUEST
    })
    const respuesta = await axios.get('http://localhost:5000/productos');
    dispatch({
        type: FETCH_PRODUCTOS_SUCCESS,
        payload: respuesta.data
    })
}