// Don't make any changes to this file. 
const initialState = {
   allProducts :{
        data :[],
        loading: false, 
        error: false,
   },
   singleProduct :{
            data :{},
            loading: false,
            error: false,
    }
}

    export const productReducer = (state = initialState, { type, payload }) => {
     
        switch(type) {
            
            default : return state;
        }

    }