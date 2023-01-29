import Product from "../../../models/product.model";
import connectDB from "../../../middleware/connectDB";


const Products  = async (req, res) => {
    await connectDB();
    if(req.method === "GET") {
        return getAllProducts(req, res)
    }
    if(req.method === "POST") {
        return  addProduct(req, res)
    }
}

async function getAllProducts(req, res) {
    try {

        let { category,price,orderBy ,limit,page } = req.query;
     const query = {};
        if (category) {
            query.category = category;
        }
       
        if (price) {
            let [min, max] = price.split(',');
            query.price = { $gte: min, $lte: max };
            
        }
       
        if(!limit){
            limit = 20;
        }
        if(!page){
            page = 1;
        }
        


    const products = await Product.find(query).sort({ price: orderBy === 'asc' ? 1 :  orderBy === 'desc' ? -1 : 0 }).limit(+limit).skip((+page-1)*limit);
    
    return res.status(200).send({ products });
    } catch (error) {
    return res.status(404).send({ error: error.message });
    }
}

async function addProduct(req, res) {
    try {
        const {role} = req.headers;
        if(role !== 'admin') {
            return res.status(401).send({ error: 'Not authorized' });
        }
        const { images,title, price, category,mrp,discount } = req.body;
        const product = await Product.create({ images,title, price, category,mrp,discount });
    
        return res.status(200).send({ product });
        } catch (error) {
        return res.status(404).send({ error: 'Something went wrong' });
        }
    }
export default Products;