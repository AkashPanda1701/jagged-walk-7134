import { Box, Button, Heading, Image, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
// import Carousel from "react-elastic-carousel";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../pages/carts/Css/react-elastic-carousel.module.css";
import { addItemCart, getAllItem } from "../../redux/cart/action";
import SkeletonCarousel from "./SkeletonCarousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 350, itemsToShow: 2, itemsToScroll: 2 },
    { width: 568, itemsToShow: 4 },
    { width: 800, itemsToShow: 6 },
    { width: 1500, itemsToShow: 6 },
];

export default function ReactElasticCarousel({ heading }) {
    const { allData, loading, error } = useSelector((store) => store.cart);
    // console.log('allData for Carousel:', allData);
    const toast = useToast();
    const dispatch = useDispatch();

    const handleAdd = (item) => {
        console.log('item:', item);
        dispatch(addItemCart(item));
        toast({
            title: "Item Added in Cart Successfully",
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "top",
        });
    }
    return (
        <Box maxW="1348px" m="auto">
            <Box maxW="1200px" m="auto" className={styles.carouselHeading}>
                <Heading mt="50px" as="h1">
                    {heading}
                </Heading>
            </Box>
            <Carousel breakPoints={breakPoints}>
                {allData &&
                    allData.map((item,index) => (
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
                                            Accu-Chek Active Glucometer Test Strips Strip Of 25
                                        </Heading>
                                        <Heading as="h2">
                                            MRP <span>₹{325}</span>
                                        </Heading>
                                        <Heading as="h3">
                                            <span>₹{"179"}</span>
                                            <span>{"45"}% OFF</span>
                                        </Heading>
                                    </Box>
                                    <Box>
                                        <Button onClick={() => handleAdd(item)}>Add</Button>
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    ))}
            </Carousel>
        </Box>
    );
}
