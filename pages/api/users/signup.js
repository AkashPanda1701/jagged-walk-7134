import User from "../../../models/user.model";
import connectDB from "../../../middleware/connectDB";
import sendMail from "../../../middleware/mail";


const signup = async (req, res) => {
    await connectDB();
    if(req.method === 'POST') {
        const { name, email, password, phone} = req.body;
        try {
            const newuser = await User.create({
                name,
                email,
                password,
                phone,
                
            });
            sendMail(email, name);
                
          return res.status(201).json({ 
            message: "User created Successfully",
            user: {
                name: newuser.name,
                email: newuser.email,
                role: newuser.role,
                phone: newuser.phone,
            }});
                    
        } catch (error) {
          return res.status(400).json({ message : error.message });
        }
    } else {
       return res.status(400).json({message: "Invalid request method"});
    }
}

export default signup;