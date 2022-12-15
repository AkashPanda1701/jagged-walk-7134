import {
    Box,
    Button,
    Grid,
    GridItem,
    Heading,
    Image,
    Select,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";
import styles from "./Css/cart.module.css";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import BillSummary from "../../Components/Cart_Checkout/BillSummary";
import EmptyCart from "../../Components/Cart_Checkout/EmptyCart";
import WithCartItem from "../../Components/Cart_Checkout/WithCartItem";
import AddAddress from "../../Components/Cart_Checkout/AddAddress";

const getData = async (url) => {
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
    } catch (e) {
        console.log(e.message)
    }
};

export default function Cart() {
    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(false);
    const [itemTotal, setItemTotal] = useState(0);
    const [saving, setSaving] = useState(0);
    const [MRP, setMRP] = useState(0);
    const [discount, setDiscount] = useState(0);

    let count = 1;
    useEffect(() => {
        getData(`http://localhost:2707/cart`).then((res) => {
            setData(res);
        });
        //finding total
        let Price = 0;
        let MRP = 0;
        for (let i = 0; i < data.length; i++) {
            Price += Number(data[i].price.toFixed(2));
            MRP += data[i].mrp;
        }
        let per = (((MRP - Price) / MRP) * 100).toFixed(2);
        setItemTotal(Price.toFixed(2));
        setMRP(MRP.toFixed(2));
        setSaving((MRP - Price).toFixed(2));
        setDiscount(per);

        if (itemTotal === 0 || saving === 0 || MRP === 0 || discount === 0) {
            setFlag(!flag);
            count++;
        }
        // console.log('saving:', saving)
        // console.log("itemTotal Payment Method:", itemTotal);
    }, [itemTotal, flag, saving, discount, MRP]);

    return (
        <Box maxW="1349px" className={styles.cart}>
            <Box maxW="1269px" className={styles.heading}>
                <Box maxW="100px">
                    <Heading as="h1">
                        <Link href="#">Home</Link>
                    </Heading>
                    <Text>
                        <BsChevronRight />
                    </Text>
                    <Heading as="h1">
                        <Link href="#">Cart</Link>
                    </Heading>
                </Box>
            </Box>
            <Box maxW="1269px" m="auto" className={styles.totalItem}>
                <Grid
                    h="680px"
                    templateRows="repeat(2, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    gap="37px"
                >
                    <GridItem
                        colSpan={{ base: 5, sm: 5, md: 3 }}
                        className={styles.cartList}
                    >
                        <Box h="73px">
                            <Heading as="h1">
                                <span>{data.length > 0 ? data.length : 0}</span>
                                Items in your Cart
                            </Heading>
                        </Box>

                        {data.length === 0 ? (
                            <EmptyCart />
                        ) : (
                            <Box className={styles.withCartItem}>
                                {/* Mapping of Data Over Here */}
                                {data &&
                                    data.map((item) => (
                                        <>
                                            <WithCartItem item={item} />
                                        </>
                                    ))}
                            </Box>
                        )}
                    </GridItem>

                    <GridItem
                        colSpan={{ base: 5, sm: 5, md: 2 }}
                        className={styles.cartTotal}
                    >
                        <Box h="73px">
                            <Heading as="h1">
                                Cart total:
                                <span>{data.length > 0 ? ` ₹ ${itemTotal}` : 0}</span>
                            </Heading>
                        </Box>
                        {data.length > 0 ? (
                            <Box h="177px" className={styles.coupons}>
                                <Box h="100px">
                                    <Box maxW="60px" w="60px" h="52px" bg="">
                                        <Image
                                            maxW="28px"
                                            h="28px"
                                            src="https://assets.pharmeasy.in/web-assets/images/cartCoupon.svg"
                                            alt="cartcoupon"
                                        />
                                    </Box>
                                    <Box
                                        w={{ base: "", sm: "200px", md: "201px", lg: "371px" }}
                                        maxW="371px"
                                        h="52px"
                                    >
                                        <Heading as="h1">Apply Coupons</Heading>
                                        <BsChevronRight />
                                    </Box>
                                </Box>

                                {/* Drawer Trial */}
                                <AddAddress />
                                {/* Drawer Trial */}
                            </Box>
                        ) : (
                            <Box h="96px">
                                <Button w={{ base: "", sm: "", md: "280px", lg: "420px" }}>
                                    Proceed to Checkout
                                </Button>
                            </Box>
                        )}

                        {/* Billing Summary */}
                        {data.length > 0 ? (
                            <BillSummary data={data} itemTotal={itemTotal} MRP={MRP} />
                        ) : null}
                        {/* Billing Summary */}

                        {/* Saving  */}

                        {data.length > 0 ? (
                            <Box className={styles.saving}>
                                <Box>
                                    <Image
                                        src="https://assets.pharmeasy.in/web-assets/images/icRupee.svg"
                                        alt="rupee"
                                    />
                                </Box>
                                <Box w="400px">
                                    <Heading as="h1">
                                        Total savings of <span>₹{saving}</span> on this Order
                                    </Heading>
                                    <Heading as="h1">
                                        MRP Discount <span>{`${discount} %`}</span>{" "}
                                    </Heading>
                                </Box>
                            </Box>
                        ) : null}
                        {/* Saving  */}
                    </GridItem>
                </Grid>
            </Box>

        </Box>
    );
}
