import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Image,
    Input,
    Select,
} from "@chakra-ui/react";
import { useState } from "react";
const payload = {
    images: [],
    title: "",
    price: "",
    mrp: "",
    quantity: "",
    category: "",
    discount: "",
};
const reset = {
    images: [],
    title: "",
    price: "",
    mrp: "",
    quantity: "",
    category: "",
    discount: "",
};
import styles from "./Css/admin.module.css";

export default function CreateForm() {
    const [form, setForm] = useState(reset);
    const [image, setImages] = useState([]);
    const [image1, setImages1] = useState("");
    const [image2, setImages2] = useState("");
    const [image3, setImages3] = useState("");
    const [image4, setImages4] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };
    const handleChangeImage1 = (e) => {
        setImages1(e.target.value);
    };
    const handleChangeImage2 = (e) => {
        setImages2(e.target.value);
    };
    const handleChangeImage3 = (e) => {
        setImages3(e.target.value);
    };
    const handleChangeImage4 = (e) => {
        setImages4(e.target.value);
    };

    const handleSubmitImages = (e) => {
        e.preventDefault();
        setImages([...image, image1, image2, image3, image4]);
        setImages1("");
        setImages2("");
        setImages3("");
        setImages4("");
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("image", image);
        payload.images = image;
        payload.title = form.title;
        payload.price = form.price;
        payload.mrp = form.mrp;
        payload.quantity = form.quantity;
        payload.category = form.category;
        payload.discount = form.discount;
        console.log("payload:", payload);
        setForm(reset);
    };

    const { title, price, mrp, quantity, category, discount, images } = form;

    return (
        <Box bg="white" p="20px">
            <Box maxW="600px" m="auto" mt="40px" mb="50px" className={styles.form}>

                <FormControl isRequired>
                    <FormLabel>Image 1</FormLabel>
                    <Input
                        placeholder="Image 1 of Product"
                        value={image1}
                        // name="title"
                        onChange={handleChangeImage1}
                    />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Image 2</FormLabel>
                    <Input
                        placeholder="Image 2 of Product"
                        value={image2}
                        // name="title"
                        onChange={handleChangeImage2}
                    />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Image 3</FormLabel>
                    <Input
                        placeholder="Image 3 of Product"
                        value={image3}
                        // name="title"
                        onChange={handleChangeImage3}
                    />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Image 4</FormLabel>
                    <Input
                        placeholder="Image 4 of Product"
                        value={image4}
                        // name="title"
                        onChange={handleChangeImage4}
                    />
                </FormControl>

                <Button
                    disabled={
                        image1 === "" || image2 === "" || image3 === "" || image4 === ""
                    }
                    mt="20px"
                    w={{ lg: "600px" }}
                    colorScheme="teal"
                    onClick={handleSubmitImages}
                >
                    Submit Images
                </Button>

                <FormControl mt="20px" isRequired>
                    <FormLabel>Title</FormLabel>
                    <Input
                        placeholder="Title of Product"
                        value={title}
                        name="title"
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Price</FormLabel>
                    <Input
                        placeholder="Price of Product"
                        value={price}
                        name="price"
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>MRP</FormLabel>
                    <Input
                        placeholder="MRP of Product"
                        value={mrp}
                        name="mrp"
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Quantity</FormLabel>
                    <Input
                        placeholder="Quantity of Product"
                        value={quantity}
                        name="quantity"
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Discount</FormLabel>
                    <Input
                        placeholder="Discount of Product"
                        value={discount}
                        name="discount"
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Category</FormLabel>
                    <Select name="category" onChange={handleChange}>
                        <option value="">Select Category</option>
                        <option value="healthcare">Health Care</option>
                        <option value="skincare">Skin Care</option>
                        <option value="homecare">Home Care</option>
                        <option value="Health-Food-Drinks">Health Food & Drinks</option>
                        <option value="personalcare">Personal Care</option>
                    </Select>
                </FormControl>

                <Button
                    disabled={
                        title === "" ||
                        price === "" ||
                        mrp === "" ||
                        discount === "" ||
                        category === "" ||
                        quantity === ""
                    }
                    mt="20px"
                    w={{ lg: "600px" }}
                    colorScheme="teal"
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
                
            </Box>
        </Box>
    );
}
