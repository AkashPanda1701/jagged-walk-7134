import { GET_LABCART_ERROR, GET_LABCART_LOADING, GET_LABCART_SUCCESS, POST_LABCART_ERROR, POST_LABCART_LOADING, POST_LABCART_SUCCESS,UPDATE_LABCART_LOADING ,UPDATE_LABCART_SUCCESS,UPDATE_LABCART_ERROR, DELETE_LABCART_LOADING, DELETE_LABCART_SUCCESS, DELETE_LABCART_ERROR, TEST_BOOKING_LOADING, TEST_BOOKING_SUCCESS, TEST_BOOKING_ERROR
} from "./actionTypes";
import axios from "axios";
var t='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzliMThiMDdhMTE2MjdjNzFhYzEyZTAiLCJuYW1lIjoiQWthc2giLCJyb2xlIjoidXNlciIsImlhdCI6MTY3MTI4NDY0OCwiZXhwIjoxNjcxODg5NDQ4fQ.8bxKpHVjS767qUKmJ1WbI9v07cRqxev7Bb8RI9TyesQ'
export const getLabcart = () => async ( dispatch ) => {
    
        try {
            dispatch({
                type: GET_LABCART_LOADING,
            });
            const res = await axios.get(`https://medspharma.netlify.app/api/labcarts`,
            {
                headers: {
                'Content-Type': 'application/json',
                token: t
            }});

            dispatch({
                type: GET_LABCART_SUCCESS,
                payload: res.data.Labcarts
            });
        } catch (error) {
            dispatch({
                type: GET_LABCART_ERROR,
            });
        }
};

export const postLabcart = (test) => async ( dispatch ) => {
    console.log('test: ', test);

    try {
        dispatch({
            type: POST_LABCART_LOADING,
        });
        const res = await axios.post(`https://medspharma.netlify.app/api/labcarts`, test ,{
            headers: {
            'Content-Type': 'application/json',
            token: t
        }});
        console.log('data: ', res);
        dispatch({
            type: POST_LABCART_SUCCESS,
            payload: res.data.newLabcartItem

        });
    } catch (error) {
        console.log('error: ', error);
        dispatch({
            type: POST_LABCART_ERROR,
        });
    }
};

export const updateLabcart = (id,patients) => async ( dispatch ) => {

    try {
        dispatch({
            type: UPDATE_LABCART_LOADING,
        });
        await axios.put(`https://medspharma.netlify.app/api/labcarts/${id}`, {patients} ,{
            headers: {
            'Content-Type': 'application/json',
            token: t
        }});
        
        dispatch({
            type: UPDATE_LABCART_SUCCESS,
            payload: {
                id,
                patients
            }

        });
    } catch (error) {
        dispatch({
            type: UPDATE_LABCART_ERROR,
        });
    }
}


export const deleteLabcart = (id) => async ( dispatch ) => {

    try {
        dispatch({
            type: DELETE_LABCART_LOADING,
        });
        await axios.delete(`https://medspharma.netlify.app/api/labcarts/${id}`, {
            headers: {
            'Content-Type': 'application/json',
            token: t
        }});
        
        dispatch({
            type: DELETE_LABCART_SUCCESS,
            payload: id

        });
    } catch (error) {
        console.log('error: ', error);
        dispatch({
            type: DELETE_LABCART_ERROR,
        });
    }
}

export const testBooking = () => async ( dispatch ) => {
        
            try {
                dispatch({
                    type: TEST_BOOKING_LOADING,
                });
                const res = await axios.delete(`https://medspharma.netlify.app/api/labcarts`,{
                    headers: {
                        'Content-Type': 'application/json',
                        token: t
                    }});
                    console.log('res: ', res);
    
                dispatch({
                    type: TEST_BOOKING_SUCCESS,
                });
            } catch (error) {
                dispatch({
                    type: TEST_BOOKING_ERROR,
                });
            }
    }