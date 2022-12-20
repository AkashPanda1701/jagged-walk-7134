import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    Box,
    Select
} from '@chakra-ui/react'
import { useState } from 'react';
import { GrEdit } from 'react-icons/gr'
const initialState = {
    image: [],
    title: "",
    price: "",
    mrp: "",
    quantity: "",
    category: "",
    discount: "",
};

export function EditForm({ item }) {
    console.log('item:', item.title)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [form, setForm] = useState({
        title: item.title,
        price: item.price,
        mrp: item.mrp,
        quantity: item.quantity,
        category: item.category,
        discount: item.discount,
        image: item.images
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form:", form);
    };

    const { title, price, mrp, quantity, category, discount, images } = form;
    return (
        <>
            <Button onClick={onOpen} colorScheme="teal" bg="white" variant='outline'><GrEdit /></Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {/* <Lorem count={2} /> */}
                        <Box maxW="600px" m="auto" mt="40px" >
                            <FormControl isRequired>
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
                                    <option value="Health Food & Drinks">Health Food & Drinks</option>
                                    <option value="personalcare">Personal Care</option>
                                </Select>
                            </FormControl>

                            {
                                item.images &&
                                item.images.map((images, index) =>
                                    <FormControl key={index} isRequired>
                                        <FormLabel>Images {index + 1}</FormLabel>
                                        <Input
                                            placeholder="Images of Product"
                                            value={images}
                                            // name="discount"
                                            onChange={handleChange}
                                        />
                                    </FormControl>

                                )
                            }
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost' colorScheme="teal" onClick={handleSubmit}>Update</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}