import { GET_LABCART_ERROR, GET_LABCART_LOADING, GET_LABCART_SUCCESS, POST_LABCART_ERROR, POST_LABCART_LOADING, POST_LABCART_SUCCESS } from "./actionTypes";

// Don't make any changes to this file. 
const initialState = {
    data: [],
    loading: false,
    error: false,
    
};

    export const labcartReducer = (state = initialState, { type, payload }) => {
        switch (type) {
            case GET_LABCART_LOADING: {
                return {
                    ...state,
                    loading: true,
                    error: false,
                };
            }
            case GET_LABCART_SUCCESS: {
                return {
                    ...state,
                    data: payload,
                    loading: false,
                    error: false,
                };
            }
            case GET_LABCART_ERROR: {
                return {
                    ...state,
                    loading: false,
                    error: true,
                };
            }

            case POST_LABCART_LOADING: {
                // console.log("post loading");
                return {
                    ...state,
                    loading: true,
                    error: false,
                };
            }
            case POST_LABCART_SUCCESS: {
                return {
                    ...state,
                    data: [...state.data, payload],
                    loading: false,
                    error: false,
                };
            }
            case POST_LABCART_ERROR: {
                return {
                    ...state,
                    loading: false,
                    error: true,
                };
            }
            default: {
                return state;
            }
        }

    }