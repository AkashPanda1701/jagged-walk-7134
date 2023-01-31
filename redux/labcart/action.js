import { GET_LABCART_ERROR, GET_LABCART_LOADING, GET_LABCART_SUCCESS, POST_LABCART_ERROR, POST_LABCART_LOADING, POST_LABCART_SUCCESS,UPDATE_LABCART_LOADING ,UPDATE_LABCART_SUCCESS,UPDATE_LABCART_ERROR, DELETE_LABCART_LOADING, DELETE_LABCART_SUCCESS, DELETE_LABCART_ERROR, TEST_BOOKING_LOADING, TEST_BOOKING_SUCCESS, TEST_BOOKING_ERROR
} from "./actionTypes";
import axios from "axios";

export const getLabcart = (userid) => async ( dispatch ) => {
    
        try {
            dispatch({
                type: GET_LABCART_LOADING,
            });
            const res = await axios.get(`/api/labcarts`,
            {
                headers: {
                'Content-Type': 'application/json',
                // token: t
                userid
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

export const postLabcart = (userid,test) => async ( dispatch ) => {
    console.log('test: ', test);

    try {
        dispatch({
            type: POST_LABCART_LOADING,
        });
        const res = await axios.post(`/api/labcarts`, test ,{
            headers: {
            'Content-Type': 'application/json',
            // token: t
            userid
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

export const updateLabcart = (userid,id,patients) => async ( dispatch ) => {

    try {
        dispatch({
            type: UPDATE_LABCART_LOADING,
        });
        await axios.put(`/api/labcarts/${id}`, {patients} ,{
            headers: {
            'Content-Type': 'application/json',
            // token: t
            userid
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


export const deleteLabcart = (userid,id) => async ( dispatch ) => {

    try {
        dispatch({
            type: DELETE_LABCART_LOADING,
        });
        await axios.delete(`/api/labcarts/${id}`, {
            headers: {
            'Content-Type': 'application/json',
            // token: t
            userid
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

export const testBooking = (userid) => async ( dispatch ) => {
        
            try {
                dispatch({
                    type: TEST_BOOKING_LOADING,
                });
                const res = await axios.delete(`/api/labcarts`,{
                    headers: {
                        'Content-Type': 'application/json',
                        userid
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