import axios from "axios";
import {
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
    POST_CART_ERROR,
    POST_CART_LOADING,
    POST_CART_SUCCESS,
} from "./type";

export const getCart = () => async (dispatch) => {
    dispatch({ type: GET_CART_LOADING });
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

export const postCart = (payload) => async (dispatch) => {
    dispatch({ type: POST_CART_LOADING });
    try {
        let res = await axios.patch(`http://localhost:2707/cart/${payload._id}`);
        dispatch({ type: POST_CART_SUCCESS, payload });
    } catch (e) {
        dispatch({ type: POST_CART_ERROR });
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