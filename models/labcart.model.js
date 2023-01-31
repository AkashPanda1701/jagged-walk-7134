import mongoose from 'mongoose';

const  labcartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    testId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'labtest',
        required: true
    },
    patients: {
        type:Number,
        required: true,
        default: 1,
        min: 1
    },
    bookedDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    appointmentDate: {
        type: Date,
        required: true,
    },

}, {
    versionKey: false,
}
);

export default mongoose.models.labcart || mongoose.model('labcart', labcartSchema);
