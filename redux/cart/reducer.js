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

// Don't make any changes to this file.
const initialState = {
    data: [],
    allData: [],
    loading: false,
    error: false,
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

        case POST_CART_LOADING: {
            // console.log("post loading");
            return {
                ...state,
                loading: true,
                error: false,
            };
        }
        case POST_CART_SUCCESS: {
            return {
                ...state,
                data: payload,
                loading: false,
                error: false,
            };
        }
        case POST_CART_ERROR: {
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
            let id = payload._id || payload.id;
            // console.log("id Inside Delete Reducer:", id);
            const DeleteCartItemArr = state.data.filter((item) => id !== (item._id || item.id));
            return {
                ...state,
                data: DeleteCartItemArr,
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

        case GET_ALL_CART_LOADING: {
            // console.log("get loading");
            return {
                ...state,
                loading: true,
                error: false,
            };
        }
        case GET_ALL_CART_SUCCESS: {
            return {
                ...state,
                allData: payload,
                loading: false,
                error: false,
            };
        }
        case GET_ALL_CART_ERROR: {
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
                data: [...state.data, payload],
                loading: false,
                error: false,
            };
        }
        case ADD_ITEM_CART_TO_CART_ERROR: {
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
