
import Labcart from "../../../models/labcart.model";
import connectDB from "../../../middleware/connectDB";
import authMiddleware from "../../../middleware/authMiddleware";

const LabcartItems = async (req, res) => {
await connectDB();
if(req.method === "GET") {
    return  authMiddleware(getLabcartItems)(req, res)
}
if(req.method === "POST") {
    return  authMiddleware(addLabcartItem)(req, res)
}
}


async function getLabcartItems(req, res) {
    const userId = req.userId 
    try {
    const Labcarts = await Labcart.find({userId}).populate('testId').select('-userId');
    return res.status(200).send({ Labcarts });
        
    } catch (error) {
        return res.status(404).send({ message: error.message });
    }
        
}

async function addLabcartItem(req, res) {

    const userId = req.userId
    console.log('userId: ', userId);
    try {
        const { testId, patients, appointmentDate } = req.body;
        console.log('req.body: ', req.body);
    
        const isTestExist = await Labcart.findOne({  testId, userId });
        if (isTestExist) {
            return res.status(404).send({ message: 'Test already exists in Labcart' });
        }
       
        
        const labcart = await Labcart.create({ userId, testId, patients  , appointmentDate });
        
        const newLabcartItem = await Labcart.findById(labcart._id).populate('testId').select('-userId');
        return res.status(201).send({ message:`Test Added Successfully in Labcart`  ,  newLabcartItem});
    } catch (error) {
        return res.status(404).send({ message: 'Something went wrong' });
    }

}

export default LabcartItems;