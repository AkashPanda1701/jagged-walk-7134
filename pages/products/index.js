import {
  Box, Center, Divider, Heading,
  Img, Radio, RadioGroup,
   Spacer, Stack,
  Text, Breadcrumb, BreadcrumbItem,
  BreadcrumbLink, Select,
  Flex,
  Grid,
  Button,
  List,
} from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons';
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Mainfooter/footer";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/product/action";
import Link from "next/link";
// ------------------- ---------------------------- -----------------------------

export default function Products(params) {
  
  const {data } = useSelector(state => state.product);
  const [page , setPage] = useState(1);
  const dispatch = useDispatch();
  let { query :{category} } = useRouter();
  console.log('category: ', category);
  const [price , setPrice] = useState('');
  const [orderBy , setOrderBy] = useState('');
  
  
  useEffect(() => {
    if(category=='all'){
      category = '';
    }
    dispatch(getAllProducts({category, page, price, orderBy}));
  }, [category, dispatch, page, price , orderBy]);
  
 



  return (
      <>
      <Navbar/>
    <Box h='auto'  p='1' mt='10'  w='90%'>
      {/* ....................................... 1st Horizontal Center-Box (total 2 center-box).......................................................... */}
      <Center h='auto' mb='5'>
        {/* ---------------------------- BreadCrumb Items Containing Box--------------------------------- */}
        <Box ml='-115vh'>
          <Breadcrumb spacing='5px' fontSize='sm' separator={<ChevronRightIcon color='gray' />}>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage color='gray'>
              <BreadcrumbLink href={`/products?category=${category}`}>{category}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      </Center>

      {/* ....................................... 2nd Horizontal Center-Box .............................................................................  */}
      <Center h='auto' alignItems='left'>
        {/* ------------------------------------- Filter-Side View----------------------------------------------------- */}
        <Stack h='auto' w='18%' ml={'20'} >
          <Box h='auto' w='95%' m='3' ml='-0.5' mb='5'>
            <Heading color='gray.600' size='lg' fontWeight={600}>Filter</Heading>
          </Box>

          <Box h='auto' w='95%' m='3' alignItems='left' >
            <Heading as={"h5"} size="sm" mb='5' color='gray.600'>Category</Heading>
              <Link href={`/products?category=all`}>
               <Text color='gray'>All</Text>
              </Link>
              <Link href={`/products?category=homecare`}>
                <Text color='gray'>Home Care</Text>
              </Link>
              <Link href={`/products?category=personalcare`}>
                <Text color='gray'>Personal Care</Text>
              </Link>
              <Link href={`/products?category=healthcare`}>
                <Text color='gray'>Health Care</Text>
              </Link>
              <Link href={`/products?category=Health-Food-Drinks`}>
                <Text color='gray'>Health Food & Drinks</Text>
              </Link>
              <Link href={`/products?category=skincare`}>
                <Text color='gray'>Skin Care</Text>
              </Link>
        
            
          </Box>

          <Divider border='1px solid black' bg={'blackAlpha.200'} />

          {/* <Box h='auto' w='95%' m='3' alignItems='left'>
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
          </Box> */}

          <Divider border='1px solid black' bg={'blackAlpha.200'} maxW='sm' />

          <Box h='auto' w='95%' m='3' alignItems='left'>
            <Heading as={"h5"} size="sm" mb='5' color='gray.600' mt='5'>Price</Heading>
            <RadioGroup onChange={setPrice} value={price}>
              <Stack direction='column' mb='5'>
                <Flex color='gray' justifyContent={'space-between'}>Below 99 <Radio  value='0,99' mt='1.5' ml='17.7vh' border='3px solid black'></Radio></Flex>
                <Flex color='gray'  justifyContent={'space-between'}>100-199 <Radio  value='100,199' mt='1.5' ml='18.5vh' border='3px solid black'></Radio></Flex>
                <Flex color='gray'  justifyContent={'space-between'}>200-299 <Radio  value='200,299' mt='1.5' ml='18.5vh' border='3px solid black'></Radio></Flex>
                <Flex color='gray'  justifyContent={'space-between'}>300-399 <Radio   value='300,399' mt='1.5' ml='18.5vh' border='3px solid black'></Radio></Flex>
                <Flex color='gray'  justifyContent={'space-between'}>400-499 <Radio    value='400,499' mt='1.5' ml='18.5vh' border='3px solid black'></Radio></Flex>
                <Flex color='gray'  justifyContent={'space-between'}>Above 500 <Radio  value='500,3000' mt='1.5' ml='16.2vh' border='3px solid black'></Radio></Flex>
              </Stack>
            </RadioGroup>
          </Box>


        </Stack>
        <Spacer />

        {/* -------------------------------------- Left Section with Products & Sorting -------------------------------- */}
        <Stack h='auto' w='70%'>
          <Center h='auto' m='3'>
            <Box w='45%'>
              <Heading color='gray.600' size='lg' fontWeight={600}>{category && category.charAt(0).toUpperCase() + category.slice(1)}</Heading>
            </Box>

            <Spacer />

            <Box w='40%' >
              <Stack direction="horizontal" gap="40px" align="center">
                <Text fontSize="14px" width="70px">
                  Sort By:
                </Text>

                <Select cursor='pointer' border='2px solid black' borderRadius='10'  onChange={(e) => setOrderBy(e.target.value)}>
                  <option value="">Select</option>
                  <option value="asc">Price Low to High</option>
                  <option value="desc">Price High to Low</option>
                </Select>

              </Stack>
            </Box>
          </Center>
          {/* ---------------------------------------- Products Box ----------------------------------------------------- */}
          <Box>
            <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }} gap={2} m='3'>
              {
                data?.map((item,index) => {
                  return (
                    <Box key={index} borderRadius='7' boxShadow='xs' p='3' _hover={{ border: 'green', cursor: 'pointer', boxShadow: 'outline' }} maxWidth='250px' >
                      <Link href={`/products/${item._id}`}>
                      <Stack p='3'>
                        <Img boxSize="16rem" src={item.images[0]} h={'200px'}  />
                        <Text> {item.title.substring(0, 20)}... </Text>
                        <Text> {item.category.charAt(0).toUpperCase() + item.category.slice(1)} </Text>
                        <Text>Price: ₹ {item.price} </Text>
                        <Text>Mrp: ₹ {item.mrp} </Text>
                      </Stack>
                      </Link>
                    </Box>
                  );
                })}
            </Grid>
            {
              category==='all' &&
            <Flex justifyContent='center' alignItems='center' mt='5' mb='5'>
            <Button onClick={()=>{
              if(data.length<20){
                setPage(1)
                return;
              }
              if(page==1){
                setPage(5)
              }
              else{
                setPage((page)=>page-1)
              }
            }}>Prev</Button>
            <Button bg='none' _hover={{bg:'none'}}>{page}</Button>
            <Button onClick={()=>{
              console.log('data.length: ', data.length);
              if(data.length<20){
                setPage(1)
                return;
              }
              if(page==5){
                setPage(1)
              }
              else{
                setPage((page)=>page+1)
              }
            }}>Next</Button>
            </Flex>
        }
          </Box>
        </Stack>
      </Center>
    </Box>
<Footer/>
</>
  )

}

