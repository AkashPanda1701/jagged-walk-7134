import {
    ADD_ITEM_CART_TO_CART_ERROR,
    ADD_ITEM_CART_TO_CART_LOADING,
    ADD_ITEM_CART_TO_CART_SUCCESS,
    CLEAR_CART_MESSAGE,
    DELETE_CART_ERROR,
    DELETE_CART_LOADING,
    DELETE_CART_SUCCESS,
    GET_CART_ERROR,
    GET_CART_LOADING,
    GET_CART_SUCCESS,
    PATCH_CART_ERROR,
    PATCH_CART_LOADING,
    PATCH_CART_SUCCESS,
    PLACED_ORDER_LOADING,
    PLACED_ORDER_SUCCESS,
    PLACED_ORDER_ERROR,
} from "./type";

// Don't make any changes to this file.
const initialState = {
    data: [],
    loading: false,
    error: false,
    message: "",
};

export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CART_LOADING: {
            // console.log("get loading");
            return {
                ...state,
                loading: true,
                error: false,
            };
        }
        case GET_CART_SUCCESS: {
            return {
                ...state,
                data: payload,
                loading: false,
                error: false,
            };
        }
        case GET_CART_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
            };
        }

        case PATCH_CART_LOADING: {
            console.log("post loading");
            return {
                ...state,
                loading: true,
                error: false,
            };
        }
        case PATCH_CART_SUCCESS: {
            return {
                ...state,
                data: state.data.map((item) => {
                    if (item._id === payload._id) {
                        item.quantity = payload.quantity;
                    }
                    return item;
                }),
                loading: false,
                error: false,
            };
        }
        case PATCH_CART_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
            };
        }

        case DELETE_CART_LOADING: {
            // console.log("delete loading");
            return {
                ...state,
                loading: true,
                error: false,
            };
        }
        case DELETE_CART_SUCCESS: {
            return {
                ...state,
                data: state.data.filter((item) => item._id !== payload._id),
                loading: false,
                error: false,
            };
        }
        case DELETE_CART_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
            };
        }

      

        case ADD_ITEM_CART_TO_CART_LOADING: {
            // console.log("post loading");
            return {
                ...state,
                loading: true,
                error: false,
            };
        }
        case ADD_ITEM_CART_TO_CART_SUCCESS: {
            return {
                ...state,
                data: [...state.data, payload.data],
                loading: false,
                error: false,
                message: payload.message,
            };
        }
        case ADD_ITEM_CART_TO_CART_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
                message: payload.message,
            };
        }
        case CLEAR_CART_MESSAGE : {
            return {
                ...state,
                message: "",
                error: false,
            };
        }
        case PLACED_ORDER_LOADING: {
            // console.log("post loading");
            return {
                ...state,
                loading: true,
                error: false,
            };
        }
        case PLACED_ORDER_SUCCESS: {
            return {
                ...state,
                data: [],
                loading: false,
                error: false,
                message: payload.message,
            };
        }
        case PLACED_ORDER_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
                message: payload.message,
            };
        }
        


        default:
            return state;
    }
};
