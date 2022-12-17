import { GET_LABCART_ERROR, GET_LABCART_LOADING, GET_LABCART_SUCCESS, POST_LABCART_ERROR, POST_LABCART_LOADING, POST_LABCART_SUCCESS,UPDATE_LABCART_LOADING ,UPDATE_LABCART_SUCCESS,UPDATE_LABCART_ERROR, DELETE_LABCART_LOADING, DELETE_LABCART_SUCCESS, DELETE_LABCART_ERROR, TEST_BOOKING_LOADING, TEST_BOOKING_SUCCESS, TEST_BOOKING_ERROR } from "./actionTypes";

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
           
            case UPDATE_LABCART_LOADING: {
                return {
                    ...state,
                    loading: true,
                    error: false,
                };
            }
            case UPDATE_LABCART_SUCCESS: {
                return {
                    ...state,
                    data: state.data.map((item) => {
                        if (item._id === payload.id) {
                            return {
                                ...item,
                                patients: payload.patients,
                            };
                        }
                        return item;
                    }),
                    loading: false,
                    error: false,
                };
            }
            case UPDATE_LABCART_ERROR: {
                return {
                    ...state,
                    loading: false,
                    error: true,
                };
            }
            case DELETE_LABCART_LOADING: {
                return {
                    ...state,
                    loading: true,
                    error: false,
                };
            }
            case DELETE_LABCART_SUCCESS: {
                return {
                    ...state,
                    data: state.data.filter((item) => item._id !== payload),
                    loading: false,
                    error: false,
                };
            }
            case DELETE_LABCART_ERROR: {
                return {
                    ...state,
                    loading: false,
                    error: true,
                };
            }

            case TEST_BOOKING_LOADING: {
                return {
                    ...state,
                    loading: true,
                    error: false,
                };
            }
            case TEST_BOOKING_SUCCESS: {
                return {
                    ...state,
                    data: [],
                    loading: false,
                    error: false,
                };
            }
            case TEST_BOOKING_ERROR: {
                return {
                    ...state,
                    loading: false,
                    error: true,
                };
            }
            default:
                return state;
        }
    };
