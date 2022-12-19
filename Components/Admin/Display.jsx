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
import stylesD from "./Css/display.module.css";
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

    let title = "";
    title = item.title.split(" ").slice(0, 7).join(" ");
    console.log('title:', title)

    return (
        <Grid
            bg="red"
            m="auto"
            h="500px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(1, 1fr)"
            // gap="10px"
            className={styles.individualItem}
        >
            <GridItem bg="" colSpan={{ base: 1, sm: 1, md: 1 }}  className={stylesD.displayImages}>
                <Box m="auto" >
                    <Image  m="auto" w="180px" h="180px" src={item.images[0]} alt="" />
                </Box>
                <Box >
                    {
                        item.images?.map((img, index) =>  <Image key={index} w="50px" h="50px"  src={img} alt="" /> )
                    }
                   
                </Box>
            </GridItem>
            <GridItem m="auto" bg="" colSpan={{ base: 1, sm: 1, md: 1 }}>
                <Box>
                    <Heading maxW="401px" as="h1">
                        {title}
                    </Heading>

                </Box>
                <Box>
                    <Heading as="p" fontSize="16px" mb="10px" fontWeight="400" >Category: {item.category}</Heading>

                </Box>

                <Box className={styles.priceMRP}>
                    <Box w="256px" maxW="300px">
                        <Heading as="h1">
                            MRP <span>{`₹${item.mrp.toFixed(2)}*`}</span>
                        </Heading>
                        <Heading as="h1">{`₹${item.price}*`}</Heading>
                        <Heading as="h1">{`${item.discount} OFF`}</Heading>
                    </Box>


                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Box>
                        <Box
                        mt="15px"
                            w="100px"
                            maxW="200px"
                            display="flex"
                            bg=""

                            justifyContent="space-evenly"
                        >
                            <Button  variant='outline' onClick={onOpen} colorScheme="red">
                                <AiOutlineDelete color="red" />
                            </Button>
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
                    
                </Box>
            </GridItem>
        </Grid >
    );
}
