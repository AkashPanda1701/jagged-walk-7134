import mongoose from 'mongoose';

const connectDB = async (req, res) => {
  return mongoose.connect('mongodb+srv://Akash:852654@cluster0.9xzz5v6.mongodb.net/pharma?retryWrites=true&w=majority')
};

export default connectDB;