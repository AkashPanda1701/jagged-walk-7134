import {
  Box,
  Heading,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Button,
  Input,
  Text,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { BiSearchAlt } from "react-icons/bi";
import { Adslider } from "./adSlider";
import { Details } from "./Details";
import { FrequentlyBookedLabTest } from "./FrequentlyBookeTest";
import MultipleItems, { LabTest } from "./labTest";
import { NewLaunches } from "./NewLaunches";
import { OffersJustforYou } from "./Offerts";
import { PaymentOffers } from "./PaymentOffers";
import { PlusMember } from "./Plus member";

import { ShopByCategory } from "./Shopbycategory";
import { ShopByConcern } from "./ShopbyConcern";
import { TrendingNearMe } from "./TrendingNear";

export const Homecomp = () => {
  return (
    <>
      <Box h="50px"></Box>
      <Box>
        <Heading
          margin={"auto"}
          width={700}
          as="h3"
          fontSize="25px"
          fontWeight={600}
        >
          What are you looking for ?
        </Heading>
        <Box h={10}></Box>
        {/* // search input--------------------------- */}
        <Box
          borderRadius={40}
          p={1}
          margin={"auto"}
          width={{ base: "200px", sm: "450px", lg: "710px" }}
          border={"1px solid lightgrey"}
        >
          <InputGroup
            border={"0px solid white"}
            margin={"auto"}
            width={{ base: "200px", sm: "450px", lg: "700px" }}
            // size="md"
          >
            <InputLeftAddon
              borderRadius="20px"
              fontSize={{ base: "xsm", sm: "xsm", md: "md", lg: "mg" }}
              className="inputgrp"
              children={<BiSearchAlt />}
              background="white"
            />
            <Input
              className="inputgrp"
              fontSize={{ base: "xsm", sm: "xsm", md: "md", lg: "mg" }}
              placeholder="Search Medicines/Healthcare products"
            />
            <InputRightAddon
              borderRadius="20px"
              background={"white"}
              //   onClick={() => getData(value)}
              fontSize={"md"}
              className="inputgrp"
              children={
                <Button
                  borderRadius={20}
                  fontSize={{ base: "10px", sm: "14px", lg: "16px" }}
                  color={"white"}
                  _hover={{ background: "#10847e" }}
                  background={"#10847e"}
                  width={{ base: "50px", sm: "70px", lg: "100px" }}
                >
                  Search
                </Button>
              }
            />
          </InputGroup>
        </Box>

        {/* categories     -------- */}
        <SimpleGrid
          pt={10}
          textAlign={"center"}
          w="85%"
          m="auto"
          gap={9}
          columns={[3, 4, 4, 7]}
        >
          <Box
            p={2}
            borderRadius={10}
            _hover={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;" }}
          >
            <Image
              padding={4}
              width={40}
              src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0"
            />

            <Text>Medicine</Text>
            <Text color={"red"} fontSize="12px" fontWeight={600}>
              UPTO 20% OFF
            </Text>
          </Box>
          <Box
            p={2}
            borderRadius={10}
            _hover={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;" }}
          >
            <Image
              padding={4}
              width={40}
              src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0"
            />
            <Text>Lab Tests</Text>
            <Text color={"red"} fontSize="12px" fontWeight={600}>
              UPTO 70% OFF
            </Text>
          </Box>
          <Box
            p={2}
            borderRadius={10}
            _hover={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;" }}
          >
            <Image
              padding={4}
              width={40}
              src="https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0"
            />
            <Text>Healthcare</Text>
            <Text color={"red"} fontSize="12px" fontWeight={600}>
              UPTO 60% OFF
            </Text>
          </Box>
          <Box
            p={2}
            borderRadius={10}
            _hover={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;" }}
          >
            <Image
              padding={4}
              width={40}
              src="https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=256x0"
            />
            <Text>Health Blogs</Text>
            <Text color={"red"} fontSize="12px" fontWeight={600}></Text>
          </Box>
          <Box
            p={2}
            borderRadius={10}
            _hover={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;" }}
          >
            <Image
              padding={4}
              width={40}
              src="https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=256x0"
            />
            <Text>PLUS</Text>
            <Text color={"red"} fontSize="12px" fontWeight={600}>
              SAVE 5% EXTRA
            </Text>
          </Box>
          <Box
            p={2}
            borderRadius={10}
            _hover={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
            }}
          >
            <Image
              padding={4}
              width={40}
              src="https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=256x0"
            />
            <Text>Offers</Text>
            <Heading></Heading>
          </Box>
          <Box
            p={2}
            borderRadius={10}
            _hover={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
            }}
          >
            <Image
              padding={4}
              width={40}
              src="https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=256x0"
            />
            <Text>Surgeries</Text>
            <Heading></Heading>
          </Box>
        </SimpleGrid>
        {/* ads slider */}
        <Adslider />

        {/* labtests */}
        <LabTest />

        {/* shop by category */}
        <ShopByCategory />

        {/* offers just for you */}
        <OffersJustforYou />

        {/* Payment offers */}
        <PaymentOffers />

        {/* New launches */}
        <NewLaunches />

        {/* Trending Near me */}
        <TrendingNearMe />

            {/* plus member iamge */}
        <PlusMember/>

        {/* shop by concern */}
        <ShopByConcern/>
        {/* Frequently Booked lab test */}
      {/* <FrequentlyBookedLabTest/> */}
    {/* Details ... of app */}
    <Details/>
      </Box>
    </>
  );
};
