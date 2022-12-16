
import User from "../../../models/user.model";
import connectDB from "../../../middleware/connectDB";
import jwt from 'jsonwebtoken';
import sendMail from '../../../middleware/mail';

const Signup = async (req, res) => {
    await connectDB();
    if(req.method === "GET") {
        return  res.send({ message: 'GET method not allowed' })
    }
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
            const token = jwt.sign({ _id: user._id,name:user.name,role:user.role }, 'abcd', { expiresIn: '1d' });
            
            return res.status(200).send({ message: 'Login successful' , token,user : user.name});
        }

        if(!name || !email || !password || !phone){
        
            return res.status(404).send({ message: 'Please fill all the fields for registration' });
        }
        

        
        const newUser=await User.create({ name,email, password ,role,phone});
        const token = jwt.sign({ _id: newUser._id,name:newUser.name,role:newUser.role }, 'abcd', { expiresIn: '1d' });
        sendMail(email,  name);
        return res.status(201).send({ message : 'User Registered Successfully'  , token,user : newUser.name});
        
        

       }
       
        } catch (error) {
        return res.status(404).send({ error: 'Something went wrong' });
    }
}

export default Signup;