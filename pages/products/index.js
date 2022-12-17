import {
  Box, Center,
  Container, Divider, Heading,
  Img, Radio, RadioGroup,
  SimpleGrid, Spacer, Stack,
  Text, Breadcrumb, BreadcrumbItem,
  BreadcrumbLink, Select,
  Flex,
} from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons';
import React, { useEffect, useState } from "react";
import axios from "axios";

// ------------------- ---------------------------- -----------------------------

export default function Products(params) {

  const [data, setData] = useState([]);
  const [value, setValue] = useState('0');
  const [sortData, setSortData] = useState([]);
  const [change, setChange] = useState(true);

  useEffect(() => {
    axios(
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=1&limit=20"
    )
      .then((res) => setData(res.data.data))
      .catch((err) => alert(err));
  }, []);
  //console.log(data);


  const handleSorting = (e) => {
    const { value } = e.target;
    setChange(!change);
    if (value === "asc") {
      let asc = data.sort((a, b) => {
        return a.price - b.price;
      });
      setSortData(asc);
    } else if (value === "des") {
      let des = data.sort((a, b) => {
        return b.price - a.price;
      });
      setSortData(des);
    }
  };

  useEffect(() => {
    setData(sortData);
  }, [change]);


  return (
    <Container h='auto' maxW='container.xl' p='1' mt='10' >
      {/* ....................................... 1st Horizontal Center-Box (total 2 center-box).......................................................... */}
      <Center h='auto' mb='5'>
        {/* ---------------------------- BreadCrumb Items Containing Box--------------------------------- */}
        <Box ml='-115vh'>
          <Breadcrumb spacing='5px' fontSize='sm' separator={<ChevronRightIcon color='gray' />}>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href='/'>All Categories</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage color='gray'>
              <BreadcrumbLink href='#'>Personal Care</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      </Center>

      {/* ....................................... 2nd Horizontal Center-Box .............................................................................  */}
      <Center h='auto' alignItems='left'>
        {/* ------------------------------------- Filter-Side View----------------------------------------------------- */}
        <Stack h='auto' w='18%' ml={'20'}>
          <Box h='auto' w='95%' m='3' ml='-0.5' mb='5'>
            <Heading color='gray.600' size='lg' fontWeight={600}>Filter</Heading>
          </Box>

          <Box h='auto' w='95%' m='3' alignItems='left' >
            <Heading as={"h5"} size="sm" mb='5' color='gray.600'>Category</Heading>
            <RadioGroup colorScheme='green' onChange={setValue} value={value}>
              <Stack direction='column'>
                <Flex color='gray' mb='5'>Personal Care
                  <Radio value='0' mt='1.5' ml='14vh'></Radio>
                </Flex>
              </Stack>
            </RadioGroup>
          </Box>

          <Divider border='1px solid black' bg={'blackAlpha.200'} />

          <Box h='auto' w='95%' m='3' alignItems='left'>
            <Heading as={"h5"} size="sm" mb='5' color='gray.600' mt='5'>Sub Category</Heading>
            <RadioGroup onChange={setValue} value={value}>
              <Stack direction='column' mb='5'>
                <Flex color='gray'>Men Care <Radio value='1' mt='1.5' ml='17vh' border='3px solid black'></Radio></Flex>
                <Flex color='gray'>Appliances <Radio value='2' mt='1.5' ml='16vh' border='3px solid black'></Radio></Flex>
                <Flex color='gray'>Women Care <Radio value='3' mt='1.5' ml='14vh' border='3px solid black'></Radio></Flex>
                <Flex color='gray'>Oral Care <Radio value='4' mt='1.5' ml='17.5vh' border='3px solid black'></Radio></Flex>
                <Flex color='gray'>Male Grooming <Radio value='5' mt='1.5' ml='11.5vh' border='3px solid black'></Radio></Flex>
                <Flex color='gray'>Hair Care <Radio value='6' mt='1.5' ml='17.5vh' border='3px solid black'></Radio></Flex>
                <Flex color='gray'>Face Care <Radio value='7' mt='1.5' ml='17vh' border='3px solid black'></Radio></Flex>
                <Flex color='gray'>Body Care <Radio value='8' mt='1.5' ml='16.5vh' border='3px solid black'></Radio></Flex>
                <Flex color='gray'>Hands & Feet Care <Radio value='9' mt='1.5' ml='8.5vh' border='3px solid black'></Radio></Flex>
              </Stack>
            </RadioGroup>
          </Box>

          <Divider border='1px solid black' bg={'blackAlpha.200'} maxW='sm' />

          <Box h='auto' w='95%' m='3' alignItems='left'>
            <Heading as={"h5"} size="sm" mb='5' color='gray.600' mt='5'>Price</Heading>
            <RadioGroup onChange={setValue} value={value}>
              <Stack direction='column' mb='5'>
                <Flex color='gray'>Below 99 <Radio value='11' mt='1.5' ml='17.7vh' border='3px solid black'></Radio></Flex>
                <Flex color='gray'>100-199 <Radio value='12' mt='1.5' ml='18.5vh' border='3px solid black'></Radio></Flex>
                <Flex color='gray'>200-299 <Radio value='13' mt='1.5' ml='18.5vh' border='3px solid black'></Radio></Flex>
                <Flex color='gray'>300-399 <Radio value='14' mt='1.5' ml='18.5vh' border='3px solid black'></Radio></Flex>
                <Flex color='gray'>400-499 <Radio value='15' mt='1.5' ml='18.5vh' border='3px solid black'></Radio></Flex>
                <Flex color='gray'>Above 500 <Radio value='16' mt='1.5' ml='16.2vh' border='3px solid black'></Radio></Flex>
              </Stack>
            </RadioGroup>
          </Box>

          <Divider border='1px solid black' bg={'blackAlpha.200'} />

          <Box h='auto' w='95%' m='3' alignItems='left'>
            <Heading as={"h5"} size="sm" mb='5' color='gray.600' mt='5'>Brand</Heading>
            <RadioGroup onChange={setValue} value={value}>
              <Stack direction='column' mb='5'>
                <Flex color='gray'>&me <Radio value='21' mt='1.5' ml='21.5vh' border='3px solid black'></Radio></Flex>
                <Flex color='gray'>1m <Radio value='22' mt='1.5' ml='23.2vh' border='3px solid black'></Radio></Flex>
                <Flex color='gray'>23 Yards <Radio value='23' mt='1.5' ml='18.3vh' border='3px solid black'></Radio></Flex>
                <Flex color='gray'>360 Block <Radio value='24' mt='1.5' ml='17.2vh' border='3px solid black'></Radio></Flex>
                <Flex color='gray'>3m <Radio value='25' mt='1.5' ml='23.2vh' border='3px solid black'></Radio></Flex>
                <Flex color='gray'>A Derma <Radio value='26' mt='1.5' ml='18vh' border='3px solid black'></Radio></Flex>
                <Flex color='gray'>A & I <Radio value='27' mt='1.5' ml='21.3vh' border='3px solid black'></Radio></Flex>
                <Flex color='gray'>Aarhaveda <Radio value='28' mt='1.5' ml='16.2vh' border='3px solid black'></Radio></Flex>
                <Flex color='gray'>Abena <Radio value='29' mt='1.5' ml='20.1vh' border='3px solid black'></Radio></Flex>
              </Stack>
            </RadioGroup>
          </Box>
        </Stack>
        <Spacer />

        {/* -------------------------------------- Left Section with Products & Sorting -------------------------------- */}
        <Stack h='auto' w='70%'>
          <Center h='auto' m='3'>
            <Box w='45%'>
              <Heading color='gray.600' size='lg' fontWeight={600}>Personal Care</Heading>
            </Box>

            <Spacer />

            <Box w='40%' >
              <Stack direction="horizontal" gap="40px" align="center">
                <Text fontSize="14px" width="70px">
                  Sort By:
                </Text>

                <Select cursor='pointer' border='2px solid black' borderRadius='10' onChange={handleSorting}>
                  <option value="">Select</option>
                  <option value="asc">Price Low to High</option>
                  <option value="des">Price High to Low</option>
                  <option> Discount </option>
                  <option> Relevance </option>
                  <option> Popularity </option>
                </Select>

              </Stack>
            </Box>
          </Center>
          {/* ---------------------------------------- Products Box ----------------------------------------------------- */}
          <Box>
            <SimpleGrid columns={[1, 2, 3, 3]} spacing={5}>
              {data &&
                data.map((item) => {
                  return (
                    <Box borderRadius='7' boxShadow='xs' p='3' _hover={{ border: 'green', cursor: 'pointer', boxShadow: 'outline' }} >
                      <Stack >
                        <Img boxSize="16rem" src={item.image} />
                        <Text> {item.title} </Text>
                        <Text> {item.category} </Text>
                        <Text> ₹ {item.price} </Text>
                        <Text> {item.brand} </Text>
                      </Stack>
                    </Box>
                  );
                })}
            </SimpleGrid>
          </Box>
        </Stack>
      </Center>
    </Container>

  )

}

