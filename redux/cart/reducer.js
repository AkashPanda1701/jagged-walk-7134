import { DELETE_CART_SUCCESS, GET_CART_SUCCESS, POST_CART_SUCCESS } from "./type";

// Don't make any changes to this file. 
const initialState = {
    data: [],
    loading: false,
    error: false,
}

export const cartReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case GET_CART_SUCCESS: {
            return {
                ...state,
                data: payload,
            }
        }
        case POST_CART_SUCCESS: {
            // return {
            //     ...state,
            //     data: payload,
            // }
        }
        case DELETE_CART_SUCCESS: {
            // return {
            //     ...state,
            //     data: payload,
            // }
        }
        default: return state;
    }

}