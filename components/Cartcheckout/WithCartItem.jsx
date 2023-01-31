import {
    Box,
    Button,
    Grid,
    GridItem,
    Heading,
    Image,
    Img,
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
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, getCart, patchCart } from "../../redux/cart/action";

export default function WithCartItem({ item }) {
    // console.log('item: ', item);
    // console.log('item:', item.price)
    const {data} = useSelector((state) => state.cart);
    const authState= useSelector((state) => state.auth);
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const toast = useToast();
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
  
   

    useEffect(() => {
        DeliveryDate();
        // console.log("quantity:", quantity);
        // itemUpdate
        // console.log("quantity:", quantity);
        // dispatch(patchCart({ item, quantity }));
    }, []);

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
                <Img maxW="105px" h="105px" src={item.productId.images && item.productId.images[0]} alt="" />
            </GridItem>
            <GridItem colSpan={{ base: 10, sm: 10, md: 8 }}>
                <Box>
                    <Heading maxW="401px" as="h1">
                        {item.productId.title}
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
                                        <Img maxW="105px" h="105px" src={item.productId.images && item.productId.images[0]} alt="" />
                                    </GridItem>
                                    <GridItem colSpan={{ base: 10, sm: 10, md: 7 }}>
                                        <Box>
                                            <Heading maxW="401px" as="h1">
                                                {item.productId.title}
                                            </Heading>
                                        </Box>
                                        <Box className={styles.priceMRP}>
                                            <Box w="256px" maxW="300px">
                                                <Heading as="h1">
                                                    MRP <span>{`₹${item.productId.mrp}*`}</span>
                                                </Heading>
                                                <Heading as="h1">{`₹${item.productId.price}*`}</Heading>
                                                <Heading as="h1">{`${item.productId.discount} OFF`}</Heading>
                                            </Box>
                                        </Box>
                                    </GridItem>
                                </Grid>
                                <ModalFooter mt="-15px">
                                    <Button
                                        onClick={() => {
                                           
                                         dispatch(deleteCart(authState.user.id,item._id)); 
                                               
                                         
                                            toast({
                                                title: "Item removed from cart.",
                                                status: "success",
                                                duration: 3000,
                                                isClosable: true,
                                                position: "top",
                                            });
                                            
                                            onClose();
                                        }}
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
                            MRP <span>{`₹${item.productId.mrp
                            }*`}</span>
                        </Heading>
                        <Heading as="h1">{`₹${item.productId.price}*`}</Heading>
                        <Heading as="h1">{`${item.productId.discount} OFF`}</Heading>
                    </Box>
                    <Box>
                        <Button
                            onClick={() => {
                                if(item.quantity === 1){
                                    toast({
                                        title: "Minimum 1 quantity required",
                                        status: "warning",
                                        duration: 3000,
                                        isClosable: true,
                                        position: "top",
                                    });
                                    return;
                                }
                                dispatch(patchCart(authState.user.id,item._id, item.quantity - 1));
                                toast({
                                    title: `${item.productId.title} quantity decreased by 1`,
                                    status: "success",
                                    duration: 3000,
                                    isClosable: true,
                                    position: "top",
                                });
                            }}
                        >
                            -
                        </Button>
                        <Button>{item.quantity}</Button>
                        <Button
                            onClick={() => {
                                if(item.quantity === 10){
                                    toast({
                                        title: "Maximum 10 quantity allowed",
                                        status: "warning",
                                        duration: 3000,
                                        isClosable: true,
                                        position: "top",
                                    });
                                    return;
                                }
                                dispatch(patchCart(authState.user.id, item._id, item.quantity + 1));
                                toast({
                                    title: `${item.productId.title} quantity increased by 1`,
                                    status: "success",
                                    duration: 3000,
                                    isClosable: true,
                                    position: "top",
                                });
                            }}
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
