import { Box, Button, Heading, Image, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import Carousel from "react-elastic-carousel";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../pages/carts/Css/react-elastic-carousel.module.css";
import { addItemCart } from "../../redux/cart/action";
import { CLEAR_CART_MESSAGE } from "../../redux/cart/type";
import { getAllProducts } from "../../redux/product/action";
import SkeletonCarousel from "./SkeletonCarousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 350, itemsToShow: 2, itemsToScroll: 2 },
    { width: 568, itemsToShow: 4 },
    { width: 800, itemsToShow: 6 },
    { width: 1500, itemsToShow: 6 },
];

export default function ReactElasticCarousel({ heading }) {

    const {  loading, } = useSelector((store) => store.cart);
    const { data} = useSelector((store) => store.product);
    const toast = useToast();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

  
    return (
        <Box maxW="1348px" m="auto">
            <Box maxW="1200px" m="auto" className={styles.carouselHeading}>
                <Heading mt="50px" as="h1">
                    {heading}
                </Heading>
            </Box>
            <Carousel breakPoints={breakPoints}>
                {data &&
                    data?.map((item, index) => (
                        <Box key={index}>
                            {" "}
                            {loading ? (
                                <SkeletonCarousel />
                            ) : (
                                <Box w="180px" h="400px" className={styles.carouselContent}>
                                    <Box maxW="180px" h="192px">
                                        <Image maxW="146px" h="146px" src={item.images[0]} alt="" />
                                    </Box>
                                    <Box>
                                        <Heading as="h1">
                                            {item.title.slice(0, 15)}...
                                        </Heading>
                                        <Heading as="h2">
                                            MRP <span>₹{item.mrp}</span>
                                        </Heading>
                                        <Heading as="h3">
                                            <span>₹{item.price}</span>
                                            <span>{item.discount}% OFF</span>
                                        </Heading>
                                    </Box>
                                    <Box>
                                        <Button onClick={() =>{
                                            dispatch(addItemCart( { productId: item._id, quantity: 1 } ));
                                            toast({
                                                title: "Item added to cart",
                                                status: "success",
                                                duration: 2000,
                                                isClosable: true,
                                            });
                                            dispatch({type:CLEAR_CART_MESSAGE})
                                        } }>Add</Button>
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    ))}
            </Carousel>
        </Box>
    );
}
