import mongoose from 'mongoose';

const labtestSchema = new mongoose.Schema({
    image : {
        type : String,
        required : true
    },
   
    testName : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    },

}, {
    versionKey: false,
}
);



export default mongoose.models.labtest || mongoose.model('labtest', labtestSchema);