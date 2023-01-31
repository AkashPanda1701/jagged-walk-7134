import mongoose from 'mongoose';
mongoose.set('strictQuery', false);

const connectDB = async (req, res) => {
  return mongoose.connect(process.env.MONGODB_URL)
};

export default connectDB;