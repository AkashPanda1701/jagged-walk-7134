import {
    Box,
    Button,
    Grid,
    GridItem,
    Heading,
    Image,
    List,
    ListIcon,
    ListItem,
    Select,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";
import styles from "./Css/cart.module.css";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { useEffect, useState } from "react";
import BillSummary from "../../Components/Cart_Checkout/BillSummary";
import EmptyCart from "../../Components/Cart_Checkout/EmptyCart";
import WithCartItem from "../../Components/Cart_Checkout/WithCartItem";
import AddAddress from "../../Components/Cart_Checkout/AddAddress";
import { useDispatch, useSelector } from "react-redux";
import { getAllItem, getCart } from "../../redux/cart/action";
import LoadingItem from "../../Components/Cart_Checkout/LoadingItem";
import ReactElasticCarousel from "../../Components/Cart_Checkout/React-Elastic-Carousel";
import ApplyCoupons from "../../Components/Cart_Checkout/ApplyCoupons";
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/Navbar";


export default function Cart() {
    const [flag, setFlag] = useState(0);
    const [itemTotal, setItemTotal] = useState(0);
    const [saving, setSaving] = useState(0);
    const [MRP, setMRP] = useState(0);
    const [discount, setDiscount] = useState(0);

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((store) => store.cart);
    // console.log('loading, error:', loading, error)

    useEffect(() => {
        dispatch(getCart());
        dispatch(getAllItem());
    }, [flag]);

    let count = 1;
    useEffect(() => {
        //finding total
        let Price = 0;
        let MRP = 0;
        for (let i = 0; i < data.length; i++) {
            Price += Number(((data[i].price) * (data[i].quantity)).toFixed(2));
            MRP += Number(((data[i].mrp) * (data[i].quantity)).toFixed(2));
        }
        let per = (((MRP - Price) / MRP) * 100).toFixed(2);
        setItemTotal(Price.toFixed(2));
        setMRP(MRP.toFixed(2));
        setSaving((MRP - Price).toFixed(2));
        setDiscount(per);

        // console.log("itemTotal Payment Method:", itemTotal);
    }, [loading, error]);

    const handleQuantity = (quantity) => {
        console.log('quantity in Cart from WithCartItem:', quantity)
        setFlag(quantity)
        console.log(flag);
    }

    return (
        <>
        
            <Navbar/>
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
                        h="auto "
                        templateRows="repeat(1, 1fr)"
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
                                        data.map((item, index) => (
                                            <div key={index}>
                                                {loading ? <LoadingItem /> : <WithCartItem handleQuantity={handleQuantity} item={item} />}
                                            </div>
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
                                            {/* <Heading as="h1">Apply Coupons</Heading> */}
                                            <ApplyCoupons />
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

                {data.length > 0 ? (
                    <ReactElasticCarousel
                        heading={"Customers who bought above items also bought"}
                    />
                ) : null}

                {data.length > 0 ? (
                    <ReactElasticCarousel heading={"Previously Browsed Items"} />
                ) : null}

                <Box className={styles.termCondition} maxW="1248px" m="auto" mt="50px">
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={GoPrimitiveDot} color="green.500" />A licensed
                            pharmacy would be delivering your order basis availability of
                            product & fastest delivery.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={GoPrimitiveDot} color="green.500" />
                            Prices are indicative and may change after billing.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={GoPrimitiveDot} color="green.500" />
                            PharmEasy is a technology platform to connect sellers and buyers and
                            is not involved in sales of any product. Offer for sale on the
                            products and services are provided/sold by the sellers only. For
                            detail read Terms and Conditions
                        </ListItem>
                    </List>
                </Box>
            </Box>
            <Footer/>
        </>
    );
}
