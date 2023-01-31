import {
    Box,
    Button,
    Flex,
    Heading,
    Img,
    Select,
    Text,
    useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
//import { useContext } from "react";
//import { Link } from "react-router-dom";
import SimilarProductSlider from "../../components/Product/SimilarProductSlider";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Mainfooter/footer";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getSingleProduct } from "../../redux/product/action";
import { addItemCart, getCart } from "../../redux/cart/action";
import { CLEAR_CART_MESSAGE } from "../../redux/cart/type";


export default function Productdetails(params) {
    const [index, setIndex] = useState(0);
    const [quantity,  setQuantity] = useState(0);
    const dispatch = useDispatch();
    const {singleData :data} = useSelector(state => state.product);
    const {message ,error} = useSelector(state => state.cart);
    const authState = useSelector(state => state.auth);
    console.log('authState: ', authState);
    
    const router = useRouter();
    const { id } = router.query;
  const toast = useToast();

    useEffect(() => {
        if(message){
            toast({
                title: message,
                status: error ? "error" : "success",
                duration: 3000,
                isClosable: true,
                position : 'top'
            })
         dispatch({type : CLEAR_CART_MESSAGE})
        }
    }, [message ,toast ,error, dispatch])




    useEffect(() => {
        dispatch(getSingleProduct(id));
    }, [dispatch, id])

    return (
        <>
        <Navbar/>
            <Box width={"90%"} margin="auto" mt='15vh'>
                {/* ------------------------------------- BreadCrumb ------------------------- */}
                <Breadcrumb spacing="8px" separator={">"} fontSize='xs'>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href="/products">HealthCare</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink color={"grey"} href="/peronalcare">{data.title}</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>

                <Flex gap={10} mt={16} >
                    {/* ----------------------------------- Left Section with Product Imgs & Details------------------------------- */}
                    <Box w={{ base: "90%", md: "80%" }} m='auto'>
                        <Flex gap={10} direction={{ base: "column", md: "row" }}>
                            <Box w={{ base: "100%", md: "50%" }}>
                                {/* ------------------------------------- Big Img start & end in this box only ------------------------------------- */}
                                <Box borderRadius={7}   padding={10} boxShadow='md' cursor='pointer'>
                                    <Img margin={"auto"} width={"200px"} src={data.images && data.images[index]}/>
                                </Box>
                                {/* ------------------------------------- Small Imgs Start ----------------------------------------- */}
                                <Box>
                                    <Flex mt={5} gap={2} >
                                        {
                                           data.images && data.images.map((imgsrc, index) =>   <Box onClick={()=>setIndex(index)} key={index} borderRadius={5} p={2}  width={"80px"} h={"80px"} boxShadow='md' cursor='pointer'>
                                            <Img width={"60px"} h={"60px"} src={imgsrc}/>
                                        </Box>
                                            )

                                        }
                                      
                                     
                                    </Flex>
                                </Box>
                                {/* ------------------------------------- Small Imgs End ------------------------------------------- */}
                            </Box>
                            {/* ---------------------------------------- Product details Part Start ---------------------------------- */}
                            <Box  p={4 }>
                                <Heading as={"h5"} size="md" fontWeight={700} color='gray.600'> {data.title}</Heading>

                                <Text mt={3} fontSize={14} color={"teal.500"} cursor='pointer'>Visit PharmEasy Store</Text>

                                <Flex gap={{ base: "80px", sm: "200px", lg: "200px" }}>
                                    <Flex gap={4}>
                                        <Text fontSize={22} fontWeight={500}> ₹{data.price}</Text>
                                        <Text color="grey" mt='1'>MRP</Text>
                                        <Text mt={2} fontSize={13} textDecoration={"line-through"} color="grey"> ₹{data.mrp}</Text>
                                        <Text padding={2} borderRadius={5} color="white" background={"#f47779"}>{data.discount}</Text>
                                    </Flex>
                                </Flex>
                                <Text fontSize={12} color='grey'>
                                    Inclusive of all taxes
                                </Text>
                                <Text fontSize={12} mt='1'> Delivery by Tommorow before 10:00pm</Text>
                                <Select mt={5} placeholder="Select Quantity" onChange={(e) => setQuantity(e.target.value)}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </Select>
                                    <Button mt='6' onClick={() => {
                                        if(!authState.user && !authState.user?.role){
                                            toast({
                                                title: "Please Login First",
                                                status: "error",
                                                duration: 3000,
                                                isClosable: true,
                                                position : 'top'
                                            })
                                            return;
                                        }
                                        if(quantity === 0){
                                            toast({
                                                title: "Please Select Quantity",
                                                status: "error",
                                                duration: 3000,
                                                isClosable: true,
                                                position : 'top'
                                            })
                                            return;
                                        }
                                        dispatch(addItemCart({productId: data._id, quantity,userId:authState.user.id}))
                                       

                                    }} background={"#10847e"} _hover={{ background: "#14918b" }} color="white" p='5'>
                                        Add To Cart
                                    </Button>
                            </Box>
                            {/* ---------------------------------------- Product details Part End ------------------------------------ */}
                        </Flex>
                        <Text ml='1' color='grey' fontSize='xs'> 7 days Return Policy {' '}
                            {/* <Link color='teal.500' href='https://pharmeasy.in/legal/terms-and-conditions#returns'>
                                Read More
                            </Link>*/}
                        </Text>
                    </Box>


                    {/* -----------------------------------Right Section to View Cart & Offers-------------------------------- */}
                    
                </Flex>
            </Box>

            <SimilarProductSlider category={ data.category}/>
            <Footer/>
        </>
    );
};
