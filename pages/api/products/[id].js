import Product from "../../../models/product.model";
import connectDB from "../../../middleware/connectDB";

const SingleProduct  = async (req, res) => {
    await connectDB();
    if(req.method === "GET") {
        return  getSingleProduct(req, res)
}
    if(req.method === "PUT") {
        return  updateProduct(req, res)
    }
    if(req.method === "DELETE") {
        return  deleteProduct(req, res)
    }
}

async function getSingleProduct(req, res) {
    try {
        const { id } = req.query;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).send({ message: 'Product not found' });
        }
        return res.status(200).send({ product });
    } catch (error) {
        return res.status(404).send({ error: error.message });
    }
}


async function updateProduct(req, res) {
    try {
        const {role} = req.headers;
        if(role !== 'admin') {
            return res.status(401).send({ error: 'Not authorized' });
        }
        const { id } = req.query;
        const { images,title, price, category,mrp,discount } = req.body;
        const product = await Product.findByIdAndUpdate(id, { images,title, price, category,mrp,discount }, { new: true });
    
        return res.status(200).send({ product });
        } catch (error) {
        return res.status(404).send({ error: 'Something went wrong' });
        }
    }


    async function deleteProduct(req, res) {
        try {
            const {role} = req.headers;
            if(role !== 'admin') {
                return res.status(401).send({ error: 'Not authorized' });
            }
            const { id } = req.query;
            const product = await Product.findByIdAndDelete(id);
        
            return res.status(200).send({ product });
            } catch (error) {
            return res.status(404).send({ error: 'Something went wrong' });
            }
    }
export default SingleProduct;