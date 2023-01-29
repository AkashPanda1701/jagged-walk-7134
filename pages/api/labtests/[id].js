import Labtest from "../../../models/labtest.model";
import connectDB from "../../../middleware/connectDB";

const SingleLabtest  = async (req, res) => {
    await connectDB();
    if(req.method === "GET") {
        return  getSingleLabtest(req, res)
}
    if(req.method === "PUT") {
        return  updateLabtest(req, res)
    }
    if(req.method === "DELETE") {
        return  deleteLabtest(req, res)
    }
}

async function getSingleLabtest(req, res) {
    try {
        const { id } = req.query;
        const labtest = await Labtest.findById(id);
        if (!labtest) {
            return res.status(404).send({ message: 'Labtest not found' });
        }
        return res.status(200).send({ labtest });
    } catch (error) {
        return res.status(404).send({ error: error.message });
    }
}


async function updateLabtest(req, res) {
    try {
        const {role} = req.headers;
        if(role !== 'admin') {
            return res.status(401).send({ error: 'Not authorized' });
        }
        const { id } = req.query;
        const { image,testName, price, description } = req.body;
        const labtest = await Labtest.findByIdAndUpdate(id, { image,testName, price, description  }, { new: true });
    
        return res.status(200).send({ labtest });
        } catch (error) {
        return res.status(404).send({ error: 'Something went wrong' });
        }
    }


    async function deleteLabtest(req, res) {
        try {
            const {role} = req.headers;
            if(role !== 'admin') {
                return res.status(401).send({ error: 'Not authorized' });
            }
            const { id } = req.query;
            const labtest = await Labtest.findByIdAndDelete(id);
        
            return res.status(200).send({ labtest });
            } catch (error) {
            return res.status(404).send({ error: 'Something went wrong' });
            }
    }
export default SingleLabtest;