import axios from "axios";
import {
    ADD_ADDRESS_LOADING,
    ADD_ITEM_CART_TO_CART_ERROR,
    ADD_ITEM_CART_TO_CART_LOADING,
    ADD_ITEM_CART_TO_CART_SUCCESS,
    DELETE_CART_ERROR,
    DELETE_CART_LOADING,
    DELETE_CART_SUCCESS,
    GET_CART_ERROR,
    GET_CART_LOADING,
    GET_CART_SUCCESS,
    PATCH_CART_ERROR,
    PATCH_CART_LOADING,
    PATCH_CART_SUCCESS,
} from "./type";
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzliMThiMDdhMTE2MjdjNzFhYzEyZTAiLCJuYW1lIjoiQWthc2giLCJyb2xlIjoidXNlciIsImlhdCI6MTY3MTM3MDkyNiwiZXhwIjoxNjcxOTc1NzI2fQ.rZXhHX5tUkPYIxevPlgqi6mhepNupdgYSeVvmJzE484';

export const getCart = () => async (dispatch) => {
    dispatch({ type: GET_CART_LOADING });
    // console.log("hello from getCart:")
    try {
        let res = await axios.get(`https://medspharma.netlify.app/api/carts`, {

        headers : {
            'Content-Type': 'application/json',
            token
        }
    });
        let data = res.data;
        // console.log('res: ', res);
        dispatch({ type: GET_CART_SUCCESS, payload: data.carts });
    } catch (e) {
        dispatch({ type: GET_CART_ERROR });
    }
};

export const deleteCart = (_id) => async (dispatch) => {
    dispatch({ type: DELETE_CART_LOADING });
    try {
        let res = await axios.delete(`https://medspharma.netlify.app/api/carts/${_id}`, {
            headers : {
                'Content-Type': 'application/json',
                token
            }
        });
        dispatch({ type: DELETE_CART_SUCCESS, payload : { _id } });
    } catch (e) {
        dispatch({ type: DELETE_CART_ERROR });
    }
};

export const patchCart = (_id,quantity ) => async (dispatch) => {
    
    dispatch({ type: PATCH_CART_LOADING });
    try {
        let res = await axios.put(`https://medspharma.netlify.app/api/carts/${_id}`, {quantity},
        {
            headers : {
                'Content-Type': 'application/json',
                token 
            }
        }
        );
        dispatch({ type: PATCH_CART_SUCCESS, payload: { _id, quantity } });
    } catch (e) {
        console.log('e: ', e);
        dispatch({ type: PATCH_CART_ERROR });
    }
};



//adding item inside Cart
export const addItemCart = (payload) => async (dispatch) => {
    dispatch({ type: ADD_ITEM_CART_TO_CART_LOADING });
    try {
        let res = await axios.post(`https://medspharma.netlify.app/api/carts/`, payload , {
            headers : {
                'Content-Type': 'application/json',
                token
            }
        });
        dispatch({ type: ADD_ITEM_CART_TO_CART_SUCCESS, payload: {
            message:res.data.message,
            data :res.data.newCartItem
        } });
    } catch (e) {
        console.log('e: ', e);
        dispatch({ type: ADD_ITEM_CART_TO_CART_ERROR , payload: {
            message:e.response.data.message
        } });
    }
};

// add address to server without reducer
export const addAddress = (payload) => async (dispatch) => {
    try {
        let res = await axios.post(`https://fitness-club-server.onrender.com/address`, payload);
    } catch (error) {
        console.log("Addaddress Error:", error);
    }
}

// get address to server without reducer
export const getAddress = (payload) => async (dispatch) => {
    try {
        let res = await axios.post(`https://fitness-club-server.onrender.com/address`);
    } catch (error) {
        console.log("Getaddress Error:", error);
    }
}