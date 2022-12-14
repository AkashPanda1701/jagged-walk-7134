import {
    Box, Button, Center,
    Container, Divider, Flex, Menu,
    MenuButton, MenuItem, MenuList,
    Radio, RadioGroup, Spacer, Stack,
    Text
} from "@chakra-ui/react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { CheckCircleIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useState } from "react";
// import styles from "../styles/products.module.css";
import React from "react";



function Products() {

    const [value, setValue] = useState('1')

    return (
        <>
        <Container border='5px solid black' h='100vh' maxW='container.lg' p='1' mt='10'>


            <Center border='5px solid red' >
                <Box border='5px solid black' ml='-90vh'>
                    <Breadcrumb spacing='1px' separator={<ChevronRightIcon color='gray.500' />}>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href='#'>All Categories</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href='#'>Personal Care</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>


                </Box>

            </Center>


            <Center border='5px solid red' h='90vh'>

                <Stack border='5px solid yellow' h='90vh' w='25%' ml={6} alignItems='center'>

                    <Box border='5px solid grey' h='12' w='95%' m='3' align='center'>
                        <Text>Filter</Text>
                    </Box>

                    <Box border='5px solid grey' h='auto' w='95%' m='3' align='center'>
                        <Text> Category</Text>
                        <Box border='5px solid blue'>
                            <Flex>
                                <Box>
                                    <Text>Personal Care</Text>
                                </Box>
                                <Spacer />
                                <Box>
                                    <CheckCircleIcon color='green' />
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                    <Divider />
                    <Box border='5px solid grey' h='auto' w='95%' m='3' align='center'>

                        <Text>Sub Category</Text>


                        <RadioGroup onChange={setValue} value={value}>
                            <Stack direction='column'>
                                <Box>
                                    <Text>First</Text>
                                </Box>
                                <Box>
                                    <Radio value='1'></Radio>
                                </Box>
                                <Radio value='2'>Second</Radio>
                                <Radio value='3'>Third</Radio>
                            </Stack>
                        </RadioGroup>





                    </Box>
                    <Divider />
                    <Box border='5px solid grey' h='auto' w='95%' m='3' align='center'>
                        <Text> Price</Text>
                    </Box>
                    <Divider />
                    <Box border='5px solid grey' h='auto' w='95%' m='3' align='center'>
                        <Text> Brand</Text>
                    </Box>

                </Stack>
                <Spacer />

                {/* ----------------------------------Left Section ith Products & Sorting--------------------------------------- */}
                <Stack border='5px solid yellow' h='90vh' w='70%' >

                    <Center border='5px solid grey' h='20' m='3'>
                        <Box border='5px solid green' w='25%'><Text>Personal Care</Text></Box>
                        <Spacer />
                        <Box border='5px solid green' w='50%' >
                            <Text> Sort By:

                                <Menu>
                                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />} border='2px solid grey' bg='white' ml='15vh'>
                                        Popularity
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>Low to high</MenuItem>
                                        <MenuItem>High to Low</MenuItem>
                                        <MenuItem>Discount</MenuItem>

                                    </MenuList>
                                </Menu>
                            </Text>
                        </Box>
                    </Center>

                    {/* <Box border='5px solid grey'> */}
                    <Center border='5px solid grey' h='100vh'>
                        Products will be here
                    </Center>

                    {/* </Box> */}



                </Stack>




            </Center>

























        </Container>
        </>
    )
}

export default Products