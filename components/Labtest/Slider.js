import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Container, Flex, Grid, Img, Text } from "@chakra-ui/react";

function DemoCarousel() {
  return (
    <Box>
    
    <Box w={{base:'90%',md:'70%',lg:'60%'}}  m="auto" mt="20px" mb="20px" >
    <Carousel autoPlay={true} infiniteLoop={true}  showStatus={false} showThumbs={false} >
      
        
    
        <Img  src="https://cms-contents.pharmeasy.in/banner/077b535cbfd-3_HP_634x274.jpg" w={100}/>
        <Img  src="https://cms-contents.pharmeasy.in/banner/0b6c72f3777-YAY550.jpg" />
        <Img  src="https://cms-contents.pharmeasy.in/banner/c2c34b1f64f-surgicaregeneric.jpg" />
        <Img  src="https://cms-contents.pharmeasy.in/banner/03438c566ea-Booking-Lab-Tests_HP_634x274.jpg" />
        <Img  src="https://cms-contents.pharmeasy.in/banner/6ee85df7b05-SmokingDHP.jpg" />
        <Img  src="https://cms-contents.pharmeasy.in/banner/ab56cb3731b-Diag_Superfast_Cat_634-x-274_v3.jpg" />
      
    </Carousel>
    <Grid  templateColumns={{base:'repeat(2,1fr)',lg:'repeat(4,1fr)'}} gap={4} mt="20px" >
      
    <Flex  border={'2px solid gray'}  borderRadius='120px' px='3'   gap={3}  justifyContent="center" alignItems="center" h='100px'>
      <Img src='https://assets.pharmeasy.in/web-assets/dist/6b3d644c.svg'/>
      <Text fontSize={{base:'lg' ,md:'xl'}} fontWeight='bold' color={'blackAlpha.700'}>
        All Tests
      </Text>

    </Flex>
    <Flex  border={'2px solid gray'}  borderRadius='120px' px='3'   gap={3}  justifyContent="center" alignItems="center" h='100px'>
      <Img src='https://assets.pharmeasy.in/web-assets/dist/dea295a0.svg'/>
      <Text fontSize={{base:'lg' ,md:'xl'}} fontWeight='bold' color={'blackAlpha.700'}>
        Health Packages
      </Text>

    </Flex>
    <Flex  border={'2px solid gray'}   borderRadius='120px' px='3'   gap={3}  justifyContent="center" alignItems="center" h='100px'>
      <Img src='https://assets.pharmeasy.in/web-assets/dist/d4d62fbf.svg'/>
      <Text fontSize={{base:'lg' ,md:'xl'}} fontWeight='bold' color={'blackAlpha.700'}>
        Upload Prescription
      </Text>

    </Flex>
    <Flex  border={'2px solid gray'}   borderRadius='120px' px='3'   gap={3}  justifyContent="center" alignItems="center" h='100px'>
      <Img src='https://assets.pharmeasy.in/web-assets/dist/4ed59722.svg'/>
      <Text fontSize={{base:'lg' ,md:'xl'}} fontWeight='bold' color={'blackAlpha.700'}>
        Booke a Call
      </Text>

    </Flex>
    </Grid>
    <Flex bg='purple.400' mt='20px' p='10px' borderRadius='10px' alignItems="center" gap={3} backgroundImage='url(https://assets.pharmeasy.in/web-assets/dist/527af8cc.svg)' backgroundSize='cover' backgroundPosition='center' >
     <Img src='https://assets.pharmeasy.in/web-assets/dist/3864b471.svg' w='50px' h='50px' m='auto' mb='10px' />
      <Text fontSize={{base:'lg' ,md:'xl'}} color={'white'}>
      Save 5% on allopathic medicines, 50% on lab tests & get FREE delivery with PLUS membership
      </Text>

    </Flex>
    </Box>
    </Box>
  );
}

export default DemoCarousel;
