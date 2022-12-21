import User from '../models/user.model';
import jwt from 'jsonwebtoken';

 const authMiddleware = (handler)=> async (req, res) => {
    const token = req.headers.token;

    if (!token) {
        return res.status(401).send({ message: 'token not found' });
    }

    try {
        const decoded = jwt.verify(token, 'abcd');
        if (!decoded) {
            return res.status(401).send({ message: 'User not Authenticated' });
        }
        const userId  =  decoded._id;
        const user = await User.findById(decoded);

        if (!user) {
            return res.status(401).send({ message: 'User not Authenticated' });
        }
        req.userId = userId;
        req.user = user;

        return handler(req, res);
    } catch (error) {
        return res.status(401).send({ error: error.message });
    }
};

export default authMiddleware;