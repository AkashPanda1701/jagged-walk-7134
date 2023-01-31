import Cart from "../../../models/cart.model";
import Product from "../../../models/product.model";
import connectDB from "../../../middleware/connectDB";

const CartItems = async (req, res) => {
await connectDB();
if(req.method === "GET") {
    return getCartItems(req, res)
}
if(req.method === "POST") {
    return  addCartItem(req, res)
}
if(req.method === "PATCH") {
    return orderPlaced(req, res)
}
}


async function getCartItems(req, res) {
    const {userid:userId} = req.headers
    console.log('userId: ', userId);

    try {
    const carts = await Cart.find({userId}).populate('productId').select('-userId');
    return res.status(200).send({ carts });
        
    } catch (error) {
        return res.status(404).send({ message: error.message });
    }
        
}

async function addCartItem(req, res) {

    try {
        const {userId, productId, quantity } = req.body;
        console.log('userId: ', userId);
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

async function orderPlaced(req, res) {
    const {userid:userId} = req.body
    console.log('req.body: ', req.body);
    console.log('order: ', userId);
    try {

        await Cart.deleteMany({userId});
        return res.status(200).send({ message: 'Order Placed Successfully' });

    } catch (error) {
        return res.status(404).send({ message: error.message });
    }
}

export default CartItems;