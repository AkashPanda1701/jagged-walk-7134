import Labcart from "../../../models/labcart.model";
import Labtest from "../../../models/labtest.model";
import connectDB from "../../../middleware/connectDB";
import authMiddleware from "../../../middleware/authMiddleware";

const LabcartItems = async (req, res) => {
await connectDB();
if(req.method === "PUT") {
    return  authMiddleware(updateLabcartItems)(req, res)
}
if(req.method === "DELETE") {
    return  authMiddleware(deleteLabcartItem)(req, res)
}
}


async function updateLabcartItems(req, res) {
    const userId = req.userId
    try {
        const { id } = req.query;
        const LabcartItem = await Labcart.findById(id);
        
        if (LabcartItem && LabcartItem.userId.toString() === userId) {
            
            const {  patients } = req.body;
            const labcart = await Labcart.findByIdAndUpdate(id, { userId,testId:LabcartItem.testId, patients }, { new: true }).populate('testId').select('-userId');
            return res.status(200).send({ message: 'Labcart updated successfully', updatedItem: labcart });
    
        }
        else{
            return res.status(404).send({ message: 'Item does not exist in Labcart' });
        }
    } catch (error) {
        return res.status(404).send({ message: 'Something went wrong' });
    }
        
}

async function deleteLabcartItem(req, res) {
    const userId = req.userId
    try {
        const { id } = req.query;
        const LabcartItem = await Labcart.findById(id);
        if (LabcartItem && LabcartItem.userId.toString() === userId) {
        
        const labcart = await Labcart.findByIdAndDelete(id).populate('testId').select('-userId');
    
        return res.status(200).send({ message:`Test delete from the Labcart`,deletedItem:labcart });
        }
        else{
            return res.status(404).send({ message: 'Item does not exist in Labcart' });
        }
    } catch (error) {
        return res.status(404).send({ message: 'Something went wrong' });
    }

}

export default LabcartItems;