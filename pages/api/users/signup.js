
import User from "../../../models/user.model";
import connectDB from "../../../middleware/connectDB";
import jwt from 'jsonwebtoken';

const Signup = async (req, res) => {
    await connectDB();
    if(req.method === "POST") {
        return  usersignup(req, res)
    }
}


async function usersignup(req, res) {
    try {
        const { name,email, password ,role,phone} = req.body;

       if(phone){
        console.log('phone: ', phone);
        const user = await User.findOne({ phone });
        console.log('user: ', user);
        
        if (user) {
            
            const token = jwt.sign({ _id: user._id,name:user.name,role:user.role }, 'abcd', { expiresIn: '1h' });
            return res.status(200).send({ message: 'Login successful' , token,user : user.name});
        }
        

        
        await User.create({ name,email, password ,role,phone});
        return res.status(201).send({ message : 'User Registered Successfully' });
        
        

       }
       
        } catch (error) {
        return res.status(404).send({ error: 'Something went wrong' });
    }
}

export default Signup;