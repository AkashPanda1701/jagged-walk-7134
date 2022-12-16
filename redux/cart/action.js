import axios from "axios";
import {
    ADD_ADDRESS_LOADING,
    ADD_ITEM_CART_TO_CART_ERROR,
    ADD_ITEM_CART_TO_CART_LOADING,
    ADD_ITEM_CART_TO_CART_SUCCESS,
    DELETE_CART_ERROR,
    DELETE_CART_LOADING,
    DELETE_CART_SUCCESS,
    GET_ALL_CART_ERROR,
    GET_ALL_CART_LOADING,
    GET_ALL_CART_SUCCESS,
    GET_CART_ERROR,
    GET_CART_LOADING,
    GET_CART_SUCCESS,
    PATCH_CART_ERROR,
    PATCH_CART_LOADING,
    PATCH_CART_SUCCESS,
} from "./type";

export const getCart = () => async (dispatch) => {
    dispatch({ type: GET_CART_LOADING });
    // console.log("hello from getCart:")
    try {
        let res = await axios.get(`http://localhost:2707/cart`);
        let data = res.data;
        dispatch({ type: GET_CART_SUCCESS, payload: data });
    } catch (e) {
        dispatch({ type: GET_CART_ERROR });
    }
};

export const deleteCart = (payload) => async (dispatch) => {
    dispatch({ type: DELETE_CART_LOADING });
    try {
        let res = await axios.delete(`http://localhost:2707/cart/${payload._id || payload.id}`);
        dispatch({ type: DELETE_CART_SUCCESS, payload });
    } catch (e) {
        dispatch({ type: DELETE_CART_ERROR });
    }
};

export const patchCart = ({ item, quantity }) => async (dispatch) => {
    console.log('item:', item);
    const payload = {
        "quantity": quantity
    }
    // dispatch({ type: PATCH_CART_LOADING });
    try {
        let res = await axios.patch(`http://localhost:2707/cart/${item._id || item.id}`, payload);
        let resAll = await axios.get(`http://localhost:2707/cart/`);
        let data = resAll.data;
        dispatch({ type: PATCH_CART_SUCCESS, payload: data });
    } catch (e) {
        dispatch({ type: PATCH_CART_ERROR });
    }
};

//get ALL data filter on category
export const getAllItem = (payload) => async (dispatch) => {
    // console.log('payload:', payload);
    dispatch({ type: GET_ALL_CART_LOADING });
    try {
        let res = await axios.get(`http://localhost:2707/healthcare`);
        let data = res.data;
        dispatch({ type: GET_ALL_CART_SUCCESS, payload: data });
    } catch (e) {
        console.log(e.message);
        dispatch({ type: GET_ALL_CART_ERROR });
    }
};

//adding item inside Cart
export const addItemCart = (payload) => async (dispatch) => {
    dispatch({ type: ADD_ITEM_CART_TO_CART_LOADING });
    try {
        let res = await axios.post(`http://localhost:2707/cart/`, payload);
        let data = res.data;
        dispatch({ type: ADD_ITEM_CART_TO_CART_SUCCESS, payload: data });
    } catch (e) {
        dispatch({ type: ADD_ITEM_CART_TO_CART_ERROR });
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