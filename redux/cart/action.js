import axios from "axios"
import { GET_CART_SUCCESS } from "./type";


const getCart = (payload) => async (dispatch) => {
    try {
        let res = await axios.get(`http://localhost:2707/cart`);
        let data = res.data;
        dispatch({ type: GET_CART_SUCCESS, payload: data });
    } catch (e) {
        console.log("getting error")
    }
}