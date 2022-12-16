import { Box, Button, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { useState } from "react";
const initialState = {
    image: [],
    title: "",
    price: "",
    mrp: "",

    "quantity": "",
    "category": "",
    "discount": ""
}
export default function ProductForm() {
    const [form, setForm] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form, [name]: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form:", form);
    }

    const { title, price, mrp, quantity, category, discount } = form;
    return (
        <Box maxW="600px" m="auto">
            <FormControl isRequired>
                <FormLabel>Title</FormLabel>
                <Input placeholder='Title of Product'
                    value={title}
                    name="title"
                    onChange={handleChange}
                />
            </FormControl>

            <FormControl isRequired>
                <FormLabel>Price</FormLabel>
                <Input placeholder='Price of Product'
                    value={price}
                    name="price"
                    onChange={handleChange}
                />
            </FormControl>

            <FormControl isRequired>
                <FormLabel>MRP</FormLabel>
                <Input placeholder='MRP of Product'
                    value={mrp}
                    name="mrp"
                    onChange={handleChange}
                />
            </FormControl>

            <FormControl isRequired>
                <FormLabel>Quantity</FormLabel>
                <Input placeholder='Quantity of Product'
                    value={quantity}
                    name="quantity"
                    onChange={handleChange}
                />
            </FormControl>

            <FormControl isRequired>
                <FormLabel>Discount</FormLabel>
                <Input placeholder='Discount of Product'
                    value={discount}
                    name="discount"
                    onChange={handleChange}
                />
            </FormControl>

            <FormControl isRequired>
                <FormLabel>Category</FormLabel>
                <Select name="category"
                    onChange={handleChange} >
                    <option value="">Select Category</option>
                    <option value="healthcare">Health Care</option>
                    <option value="skincare">Skin Care</option>
                    <option value="homecare">Home Care</option>
                    <option value="Health Food & Drinks">Health Food & Drinks</option>
                    <option value="personalcare">Personal Care</option>
                </Select>

            </FormControl>

            <FormControl isRequired>
                <FormLabel>Image</FormLabel>
                {/* <Input placeholder='Title of Product'
                    value={title}
                    name="title"
                    onChange={handleChange}
                /> */}
            </FormControl>

            <Button onClick={handleSubmit}>Submit</Button>


        </Box>
    )
}