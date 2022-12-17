import {
    Box,
    Button,
    Grid,
    GridItem,
    Heading,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import styles from "../../pages/carts/Css/cart.module.css";
import { AiOutlineDelete } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCart, getCart, patchCart } from "../../redux/cart/action";
import Link from "next/link";
import { EditForm } from "./EditForm";

export default function Display({ item }) {
    // console.log('item:', item.price)
    const [quantity, setQuantity] = useState(item.quantity);
    const toast = useToast();
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleDelete = () => {
        console.log("Item get Delete");
        // dispatch(deleteCart(item));
        toast({
            title: "Item Delete Successfully",
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "top",
        });
    };

    useEffect(() => {
        // dispatch(patchCart({ item, quantity }))
        // handleQuantity(quantity);
    }, [quantity]);

    return (
        <Grid
            m="auto"
            h="auto"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(1, 1fr)"
            // gap="10px"
            className={styles.individualItem}
        >
            <GridItem bg="" colSpan={{ base: 1, sm: 1, md: 1 }}>
                <Image maxW="250px" h="250px" src={item.images[0]} alt="" />
            </GridItem>
            <GridItem m="auto" bg="" colSpan={{ base: 1, sm: 1, md: 1 }}>
                <Box>
                    <Heading maxW="401px" as="h1">
                        {item.title}
                    </Heading>
                    <Box
                        w="100px"
                        maxW="100px"
                        display="flex"
                        bg=""
                        justifyContent="space-evenly"
                    >
                        <button onClick={onOpen}>
                            <AiOutlineDelete color="red" />
                        </button>

                        <EditForm item={item} />
                    </Box>
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Remove from Cart?</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Grid
                                    h="auto"
                                    templateRows="repeat(1, 1fr)"
                                    templateColumns="repeat(10, 1fr)"
                                    gap={4}
                                    className={styles.individualItem}
                                >
                                    <GridItem colSpan={{ base: 10, sm: 10, md: 3 }}>
                                        <Image maxW="105px" h="105px" src={item.images[0]} alt="" />
                                    </GridItem>
                                    <GridItem colSpan={{ base: 10, sm: 10, md: 7 }}>
                                        <Box>
                                            <Heading maxW="401px" as="h1">
                                                {item.title}
                                            </Heading>
                                        </Box>
                                        <Box className={styles.priceMRP}>
                                            <Box w="256px" maxW="300px">
                                                <Heading as="h1">
                                                    MRP <span>{`₹${item.mrp.toFixed(2)}*`}</span>
                                                </Heading>
                                                <Heading as="h1">{`₹${item.price}*`}</Heading>
                                                <Heading as="h1">{`${item.discount} OFF`}</Heading>

                                            </Box>
                                            <Box h="10px" bg="red">
                                            </Box>
                                        </Box>
                                    </GridItem>
                                </Grid>
                                <ModalFooter mt="-15px">
                                    <Button onClick={handleDelete} colorScheme="red" variant="outline">
                                        Remove
                                    </Button>
                                    <Button
                                        ml="10px"
                                        variant="outline"
                                        colorScheme="teal"
                                        mr={3}
                                        onClick={onClose}
                                    >
                                        Close
                                    </Button>
                                </ModalFooter>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                </Box>
                <Box>
                    <Heading as="h1" >Category: {item.category}</Heading>

                </Box>

                <Box className={styles.priceMRP}>
                    <Box w="256px" maxW="300px">
                        <Heading as="h1">
                            MRP <span>{`₹${item.mrp.toFixed(2)}*`}</span>
                        </Heading>
                        <Heading as="h1">{`₹${item.price}*`}</Heading>
                        <Heading as="h1">{`${item.discount} OFF`}</Heading>
                    </Box>

                    <Box>
                        <Button
                            disabled={quantity === 1}
                            onClick={() => setQuantity(quantity - 1)}
                        >
                            -
                        </Button>
                        <Button>{quantity}</Button>
                        <Button
                            disabled={quantity >= 6}
                            onClick={() => setQuantity(quantity + 1)}
                        >
                            +
                        </Button>
                    </Box>
                </Box>
            </GridItem>
        </Grid>
    );
}
