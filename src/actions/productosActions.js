import { FETCH_PRODUCTOS_REQUEST, FETCH_PRODUCTOS_SUCCESS, FETCH_PRODUCTO_SUCCESS , DELETE_PRODUCTO } from './types';

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

export const fetchProductoById = id => async dispatch => {
    dispatch({
        type: FETCH_PRODUCTOS_REQUEST
    })
    const respuesta = await axios.get(`http://localhost:5000/productos/${id}`);
    dispatch({
        type: FETCH_PRODUCTO_SUCCESS,
        payload: respuesta.data
    })
}

export const deleteProductoById = (id) => async dispatch => {
    console.log('eliminaod...');
    await axios.delete(`http://localhost:5000/productos/${id}`);
    dispatch({
        type: DELETE_PRODUCTO,
        payload: id
    })
}