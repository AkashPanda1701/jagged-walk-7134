import { GET_LABCART_ERROR, GET_LABCART_LOADING, GET_LABCART_SUCCESS, POST_LABCART_ERROR, POST_LABCART_LOADING, POST_LABCART_SUCCESS } from "./actionTypes";
import axios from "axios";
var t='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzliMThiMDdhMTE2MjdjNzFhYzEyZTAiLCJuYW1lIjoiQWthc2giLCJyb2xlIjoidXNlciIsImlhdCI6MTY3MTIwODE2MCwiZXhwIjoxNjcxMjk0NTYwfQ.GgwNJMyCcck9jEdR9MsRi-oe4AlzIpJdR4jKgkBqDNM'
export const getLabcart = () => async ( dispatch ) => {
    
        try {
            dispatch({
                type: GET_LABCART_LOADING,
            });
            const res = await axios.get(`http://localhost:3000/api/labcarts`,
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
        const res = await axios.post(`http://localhost:3000/api/labcarts`, test ,{
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


