import User from "../../../models/user.model";
import Labtest from "../../../models/labtest.model";
import Labcart from "../../../models/labcart.model";
import connectDB from "../../../middleware/connectDB";

const LabcartItems = async (req, res) => {
await connectDB();
if(req.method === "GET") {
    return  getLabcartItems(req, res)
}
if(req.method === "POST") {
    return  addLabcartItem(req, res)
}
if(req.method === "DELETE") {
    return  deleteLabcartItem(req, res)
}
}


async function getLabcartItems(req, res) {
    const {userid:userId} = req.headers
    console.log('get labcart userId: ', userId);
    try {
    const Labcarts = await Labcart.find({userId}).populate('testId').select('-userId');
    return res.status(200).send({ Labcarts });
        
    } catch (error) {
        return res.status(404).send({ message: error.message });
    }
        
}

async function addLabcartItem(req, res) {
    const {userid:userId} = req.headers
    console.log('userId: ', userId);
    try {
        const { testId, patients, appointmentDate } = req.body;
        console.log('req.body: ', req.body);
    
        const isTestExist = await Labcart.find({  testId, userId });
        if (isTestExist.length>0) {
            return res.status(200).send({ message: 'Test already exists in Labcart' });
        }
       
        
        const labcart = await Labcart.create({ userId, testId, patients  , appointmentDate });
        
        const newLabcartItem = await Labcart.findById(labcart._id).populate('testId').select('-userId');
        return res.status(201).send({ message:`Test Added Successfully in Labcart`  ,  newLabcartItem});
    } catch (error) {
        return res.status(404).send({ message: 'Something went wrong',
        error: error.message });
    }

}

async function deleteLabcartItem(req, res) {
    const {userid:userId} = req.headers
    try {
        await Labcart.deleteMany({userId});
        return res.status(200).send({ message:`All Tests Booked from the Labcart` });
    } catch (error) {
        return res.status(404).send({ message: 'Something went wrong' });
    }

}


export default LabcartItems;