import User from "../../../models/user.model";
import connectDB from "../../../middleware/connectDB";


export default async function Login(req, res) {
    await connectDB();
    const { phone } = req.body;
    try {
        const user = await User.findOne({ phone })
        console.log('user: ', user);
        if(user){
            return res.status(200).send ({message: "User exists"});
        }
        return res.status(200).send ({message: "User does not exist"});
    } catch (error) {
        console.log('error: ', error);
        return res.status(500).send ({message: "Server Error"});
    }
}