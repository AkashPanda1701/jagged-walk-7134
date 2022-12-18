import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Text,
} from "@chakra-ui/react";
import { useState } from "react";
//import { useParams } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
//import { useContext } from "react";
//import { Link } from "react-router-dom";
import SimilarProductSlider from "./similarproductslider";


export default function Productdetails(params) {
    const [data, setData] = useState({});

    return (
        <>
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

                <Flex gap={10} mt={16}>
                    {/* ----------------------------------- Left Section with Product Images & Details------------------------------- */}
                    <Box>
                        <Flex gap={10}>
                            <Box >
                                {/* ------------------------------------- Big Image start & end in this box only ------------------------------------- */}
                                <Box borderRadius={7} width={{ base: "100px", sm: "200px", lg: "300px" }} h='auto' padding={10} boxShadow='md' cursor='pointer'>
                                    <Image margin={"auto"} width={"150px"} src={data.images}></Image>
                                </Box>
                                {/* ------------------------------------- Small Images Start ----------------------------------------- */}
                                <Box>
                                    <Flex mt={5} gap={2}>
                                        <Box borderRadius={5} padding={3} width={"120px"} height={"120px"} boxShadow='md' cursor='pointer'>
                                            <Image margin={"auto"} src={data.images}></Image>
                                        </Box>
                                        <Box borderRadius={5} padding={3} width={"120px"} height={"120px"} boxShadow='md' cursor='pointer'>
                                            <Image margin={"auto"} src={data.images}></Image>
                                        </Box>
                                        <Box borderRadius={5} padding={3} width={"120px"} height={"120px"} boxShadow='md' cursor='pointer'>
                                            <Image margin={"auto"} src={data.images}></Image>
                                        </Box>
                                    </Flex>
                                </Box>
                                {/* ------------------------------------- Small Images End ------------------------------------------- */}
                            </Box>
                            {/* ---------------------------------------- Product details Part Start ---------------------------------- */}
                            <Box >
                                <Heading as={"h5"} size="md" fontWeight={700} color='gray.600'> {data.title} Title will be here</Heading>

                                <Text mt={3} fontSize={14} color={"teal.500"} cursor='pointer'>Visit PharmEasy Store</Text>

                                <Flex gap={{ base: "80px", sm: "200px", lg: "200px" }}>
                                    <Flex gap={4}>
                                        <Text fontSize={22} fontWeight={500}> ₹{data.price}</Text>
                                        <Text color="grey" mt='1'>MRP</Text>
                                        <Text mt={2} fontSize={13} textDecoration={"line-through"} color="grey"> ₹{data.mrp}</Text>
                                        <Text padding={2} borderRadius={5} color="white" background={"#f47779"}>{data.discount}</Text>
                                    </Flex>
                                    <Button onClick={() => handleAddtoCart(data)} background={"#10847e"} _hover={{ background: "#14918b" }} color="white" p='5' mt='1'>
                                        Add To Cart
                                    </Button>
                                </Flex>
                                <Text fontSize={12} color='grey'>
                                    Inclusive of all taxes
                                </Text>
                                <Text fontSize={12} mt='1'> Delivery by Tommorow before 10:00pm</Text>
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
                    <Box>
                        <Text fontWeight={500} color={"#4f585e"}> Please add item(s) to proceed </Text>
                        <Button background={"#10847e"} _hover={{ background: "#14918b" }} color="white" width={"450px"} mt={4} >
                            View Cart {">"}
                        </Button>
                        <Box border={"1px dashed red"} mt='10' borderRadius={5} p='2'>
                            <Text mb='1'>Offers Just for You</Text>
                            <Flex gap={2} mb='1'>
                                <Box w='10' ><Image borderRadius={5} src="https://cms-contents.pharmeasy.in/offer/4fc5e4c1b0b-new.jpg" /></Box>
                                <Text color={"grey"} fontSize={"sm"}>
                                    100% Money Back Guarantee {">"}
                                </Text>
                            </Flex>
                            <Flex gap={4}>
                                <Box w='8' ml='2'><Image borderRadius={5} src="https://cms-contents.pharmeasy.in/offer/23881b129f7-LOGO.jpg" /></Box>
                                <Text color={"grey"} fontSize={"sm"}>
                                    FLAT 15% OFF on medicines + up to Rs.250 cashback {">"}
                                </Text>
                            </Flex>
                        </Box>

                    </Box>
                </Flex>
            </Box>

            <SimilarProductSlider />
        </>
    );
};
