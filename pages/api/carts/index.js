import Cart from "../../../models/cart.model";
import Product from "../../../models/product.model";
import connectDB from "../../../middleware/connectDB";
import authMiddleware from "../../../middleware/authMiddleware";

const CartItems = async (req, res) => {
await connectDB();
if(req.method === "GET") {
    return  authMiddleware(getCartItems)(req, res)
}
if(req.method === "POST") {
    return  authMiddleware(addCartItem)(req, res)
}
}


async function getCartItems(req, res) {
    const userId = req.userId 
    try {
    const carts = await Cart.find({userId}).populate('productId').select('-userId');
    return res.status(200).send({ carts });
        
    } catch (error) {
        return res.status(404).send({ message: error.message });
    }
        
}

async function addCartItem(req, res) {

    const userId = req.userId
    console.log('userId: ', userId);
    try {
        const { productId, quantity } = req.body;
        console.log('req.body: ', req.body);
    
        const isProductExist = await Cart.findOne({ productId, userId });
        if (isProductExist) {
            return res.status(404).send({ message: 'Product already exists in cart' });
        }
       
        
        const cart = await Cart.create({ userId,productId, quantity });
        
        const newCartItem = await Cart.findById(cart._id).populate('productId').select('-userId');
        return res.status(201).send({ message:`Product Added Successfully in cart`  ,  newCartItem});
    } catch (error) {
        return res.status(404).send({ message: 'Something went wrong' });
    }

}

export default CartItems;