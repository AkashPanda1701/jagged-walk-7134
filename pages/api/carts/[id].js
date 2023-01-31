import Cart from "../../../models/cart.model";
import Product from "../../../models/product.model";
import connectDB from "../../../middleware/connectDB";

const CartItems = async (req, res) => {
await connectDB();
if(req.method === "PUT") {
    return  updateCartItems(req, res)
}
if(req.method === "DELETE") {
    return deleteCartItem(req, res)
}

}
async function updateCartItems(req, res) {
    const {userid:userId} = req.headers

    try {
        const { id } = req.query;
        const cartItem = await Cart.findById(id);
        
        if (cartItem && cartItem.userId.toString() === userId) {
            
            const {  quantity } = req.body;
            const cart = await Cart.findByIdAndUpdate(id, { userId,productId:cartItem.productId, quantity }, { new: true }).populate('productId').select('-userId');
            return res.status(200).send({ message: 'Cart updated successfully', updatedItem: cart });
    
        }
        else{
            return res.status(404).send({ message: 'Item does not exist in cart' });
        }
    } catch (error) {
        return res.status(404).send({ message: 'Something went wrong' });
    }
        
}

async function deleteCartItem(req, res) {
    const {userid:userId} = req.headers

    try {
        const { id } = req.query;
        const cartItem = await Cart.findById(id);
        if (cartItem && cartItem.userId.toString() === userId) {
        
        const cart = await Cart.findByIdAndDelete(id).populate('productId').select('-userId');
    
        return res.status(200).send({ message:`Product delete from the cart`,deletedItem:cart });
        }
        else{
            return res.status(404).send({ message: 'Item does not exist in cart' });
        }
    } catch (error) {
        return res.status(404).send({ message: 'Something went wrong' });
    }

}

export default CartItems;