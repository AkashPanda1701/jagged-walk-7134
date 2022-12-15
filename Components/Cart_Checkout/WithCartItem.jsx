import {
    Box,
    Button,
    Grid,
    GridItem,
    Heading,
    Image,
    Select,
    useToast,
} from "@chakra-ui/react";
import Head from "next/head";
import styles from "../../pages/carts/Css/cart.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCart } from "../../redux/cart/action";

export default function WithCartItem({ item }) {
    // console.log('item:', item)
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const toast = useToast();
    const dispatch = useDispatch();

    const handleDelete = () => {
        console.log("Item get Delete");
        dispatch(deleteCart(item));
        toast({
            title: "Item Delete Successfully",
            status: "error",
            duration: 9000,
            isClosable: true,
            position: "top",
        });
    };

    const handleQuantity = (e) => {
        console.log(e.target.value);
    };
    useEffect(() => {
        DeliveryDate();
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
                <Image
                    maxW="105px"
                    h="105px"
                    src={item.images[0]}
                    alt=""
                />
            </GridItem>
            <GridItem colSpan={{ base: 10, sm: 10, md: 8 }}>
                <Box>
                    <Heading maxW="401px" as="h1">
                        {item.title}
                    </Heading>
                    <button onClick={handleDelete}>
                        <AiOutlineDelete color="red" />
                    </button>
                </Box>
                <Box className={styles.priceMRP}>
                    <Box w="256px" maxW="300px">
                        <Heading as="h1">
                            MRP <span>{`₹${(item.mrp).toFixed(2)}*`}</span>
                        </Heading>
                        <Heading as="h1">{`₹${item.price}.00*`}</Heading>
                        <Heading as="h1">{`${item.discount} OFF`}</Heading>
                    </Box>
                    <Box>
                        <Select onChange={handleQuantity} placeholder="Oty">
                            <option value="1">Oty 1</option>
                            <option value="2">Oty 2</option>
                            <option value="3">Oty 3</option>
                            <option value="4">Oty 4</option>
                        </Select>
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
