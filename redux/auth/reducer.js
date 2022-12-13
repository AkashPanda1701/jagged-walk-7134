
// Don't make any changes to this file. 
const initialState = {
    signup: {
        loading: false,
        error: false,
    },
    login: {
        loading: false,
        error: false,
    },
    logout: {
        loading: false,
        error: false,
    },
    user: {
        data: null,
        token: null,
        isAuthenticated: false,

    },
    }

    export const authReducer = (state = initialState, { type, payload }) => {
     
        switch(type) {
            
            default : return state;
        }

    }