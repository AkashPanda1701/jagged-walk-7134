import Labtest from "../../../models/labtest.model";
import connectDB from "../../../middleware/connectDB";

export default async function LabTest(req, res) {
    await connectDB();
    if(req.method === "GET") {
        return getAllLabtests(req, res)
    }
    if(req.method === "POST") {
        return  addLabtest(req, res)
    }
}

async function getAllLabtests(req, res) {
    try {
    const Labtests = await Labtest.find();
    
    return res.status(200).send({ Labtests });
    } catch (error) {
    return res.status(404).send({ error: error.message });
    }
}

async function addLabtest(req, res) {
    try {
        const {role} = req.headers;
        if(role !== 'admin') {
            return res.status(401).send({ error: 'Not authorized' });
        }
        const { image ,testName ,price ,description } = req.body;
        const Labtest = await Labtest.create({ image ,testName ,price ,description});
    
        return res.status(200).send({ Labtest });
        } catch (error) {
        return res.status(404).send({ error: 'Something went wrong' });
        }
    }