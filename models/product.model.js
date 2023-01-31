import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    images : {
        type : Array,
        required : true
    },
   
    title : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    mrp : {
        type : Number,
        required : true
    },
    discount : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    }

}, {
    versionKey: false,
}
);



export default mongoose.models.product || mongoose.model('product', productSchema);