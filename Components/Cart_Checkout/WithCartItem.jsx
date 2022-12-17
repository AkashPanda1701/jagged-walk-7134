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
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCart, getCart, patchCart } from "../../redux/cart/action";

export default function WithCartItem({ item, handleQuantity }) {
    // console.log('item:', item.price)
    const [quantity, setQuantity] = useState(item.quantity);
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const toast = useToast();
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleDelete = () => {
        console.log("Item get Delete");
        dispatch(deleteCart(item));
        toast({
            title: "Item Delete Successfully",
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "top",
        });
    };

    useEffect(() => {
        DeliveryDate();
        // console.log("quantity:", quantity);
        // itemUpdate
        // console.log("quantity:", quantity);
        dispatch(patchCart({ item, quantity }));
        handleQuantity(quantity);
    }, [quantity]);

    function DeliveryDate() {
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        const d = new Date();
        let deliveryDate = d.getDate() + 7;
        let day = deliveryDate;
        let month = d.getMonth() + 1;

        if (deliveryDate < 29) {
            day = deliveryDate;
            month = months[month - 1];
        } else if (
            deliveryDate === 30 &&
            (month === 2 || month === 4 || month === 6 || month === 9 || month === 11)
        ) {
            day = deliveryDate - 30 + 1;
            month = month + 1;
            if (month > 12) {
                month = month - 12;
                month = months[month - 1];
            } else {
                month = months[month - 1];
            }
        } else if (deliveryDate > 29) {
            day = deliveryDate - 30 + 1;
            month = month + 1;
            if (month > 12) {
                month = month - 12;
                month = months[month - 1];
            } else {
                month = months[month - 1];
            }
        }
        setMonth(month);
        setDay(day);
    }

    return (
        <Grid
            h={{ base: "350px", sm: "350px", md: "200px", lg: "200px" }}
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(10, 1fr)"
            gap={4}
            className={styles.individualItem}
        >
            <GridItem colSpan={{ base: 10, sm: 10, md: 2 }}>
                <Image maxW="105px" h="105px" src={item.images[0]} alt="" />
            </GridItem>
            <GridItem colSpan={{ base: 10, sm: 10, md: 8 }}>
                <Box>
                    <Heading maxW="401px" as="h1">
                        {item.title}
                    </Heading>
                    <button onClick={onOpen}>
                        <AiOutlineDelete color="red" />
                    </button>
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
                                    <GridItem  colSpan={{ base: 10, sm: 10, md: 3 }}>
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
                                        </Box>
                                    </GridItem>
                                </Grid>
                                <ModalFooter mt="-15px">
                                    <Button
                                        onClick={handleDelete}
                                        colorScheme="red"
                                        variant="outline"
                                    >
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
                <Box>
                    <Heading as="h1">
                        Approximate Delivery By <span>{day}</span> <span>{month}</span>
                    </Heading>
                </Box>
            </GridItem>
        </Grid>
    );
}
