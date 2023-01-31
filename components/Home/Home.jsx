import {
  Heading,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Button,
  Input,
  Box,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { BiSearchAlt } from "react-icons/bi";
import Adslider from "./adSlider";
import Adslider2 from "./AdsSlider2";
import Details from "./Details";
import DownloadApp from "./Downloadapp";
import FrequentlyBookedLabTest from "./FrequentlyBookeTest";
import LabTest from "./LabTest";
import NewLaunches from "./NewLaunches";
import OffersJustforYou from "./Offerts";
import PaymentOffers from "./PaymentOffers";
import PlusMember from "./Plus member";

import ShopByCategory from "./Shopbycategory";
import ShopByConcern from "./ShopbyConcern";
import TrendingNearMe from "./TrendingNear";
import WhyChooseUs from "./WhyChoose";

export default function Homecomp() {
  return (
    <>
      <Box h="50px"></Box>
      <Box width={'98%'} m="auto">
        {/* <Heading
          margin={"auto"}
          w="56%"
          as="h3"
          fontSize="25px"
          fontWeight={600}
        >
          What are you looking for ?
        </Heading> */}
        {/* // search input--------------------------- */}
        {/* <Box
          borderRadius={40}
          p={1}
          margin={"auto"}
          width={{
            base: "200px",
            sm: "450px",
            lg: "710px",
          }}
          border={"1px solid lightgrey"}
        >
          <InputGroup
            border={"0px solid white"}
            margin={"auto"}
            width={{
              base: "200px",
              sm: "450px",
              lg: "700px",
            }}
            // size="md"
          >
            <InputLeftAddon
              borderRadius="20px"
              fontSize={{
                base: "xsm",
                sm: "xsm",
                md: "md",
                lg: "mg",
              }}
              className="inputgrp"
              // children={<BiSearchAlt />}
              background="white"
            />
            <Input
              className="inputgrp"
              fontSize={{
                base: "xsm",
                sm: "xsm",
                md: "md",
                lg: "mg",
              }}
              placeholder="Search Medicines/Healthcare products"
            />
            <InputRightAddon
              borderRadius="20px"
              background={"white"}
              //   onClick={() => getData(value)}
              fontSize={"md"}
              className="inputgrp"
              // children={
              //   <Button
              //     borderRadius={20}
              //     fontSize={{
              //       base: "10px",
              //       sm: "14px",
              //       lg: "16px",
              //     }}
              //     color={"white"}
              //     _hover={{ background: "#10847e" }}
              //     background={"#10847e"}
              //     width={{
              //       base: "50px",
              //       sm: "70px",
              //       lg: "100px",
              //     }}
              //   >
              //     Search
              //   </Button>
              // }
            />
          </InputGroup>
        </Box> */}

        {/* categories     -------- */}
        <SimpleGrid
          pt={10}
          textAlign="center"
          w="85%"
          m="auto"
          gap={9}
          columns={[3, 4, 4, 7]}
        >
          <Box
            p={2}
            borderRadius={10}
            _hover={{
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
            }}
          >
            <Image
              padding={4}
              width={40}
              src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0"
            />

            <Box>Medicine</Box>
            <Box
              color={"red"}
              fontSize="12px"
              fontWeight={600}
            >
              UPTO 20% OFF
            </Box>
          </Box>
          <Box
            p={2}
            borderRadius={10}
            _hover={{
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
            }}
          >
            <Image
              padding={4}
              width={40}
              src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0"
            />
            <Box>Lab Tests</Box>
            <Box
              color={"red"}
              fontSize="12px"
              fontWeight={600}
            >
              UPTO 70% OFF
            </Box>
          </Box>
          <Box
            p={2}
            borderRadius={10}
            _hover={{
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
            }}
          >
            <Image
              padding={4}
              width={40}
              src="https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0"
            />
            <Box>Healthcare</Box>
            <Box
              color={"red"}
              fontSize="12px"
              fontWeight={600}
            >
              UPTO 60% OFF
            </Box>
          </Box>
          <Box
            p={2}
            borderRadius={10}
            _hover={{
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
            }}
          >
            <Image
              padding={4}
              width={40}
              src="https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=256x0"
            />
            <Box>Health Blogs</Box>
            <Box
              color={"red"}
              fontSize="12px"
              fontWeight={600}
            ></Box>
          </Box>
          <Box
            p={2}
            borderRadius={10}
            _hover={{
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
            }}
          >
            <Image
              padding={4}
              width={40}
              src="https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=256x0"
            />
            <Box>PLUS</Box>
            <Box
              color={"red"}
              fontSize="12px"
              fontWeight={600}
            >
              SAVE 5% EXTRA
            </Box>
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
            <Box>Offers</Box>
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
            <Box>Surgeries</Box>
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
        <PlusMember />

        {/* shop by concern */}
        <ShopByConcern />
        {/* Frequently Booked lab test */}
        <FrequentlyBookedLabTest />

        {/* Ads Slider 2-- */}

        <Adslider2 />

        {/*Why choose us------ details  */}
        <WhyChooseUs />

        {/* Download app-- banner */}
        <DownloadApp />

        {/* Details ... of app */}
        <Details />
      </Box>
    </>
  );
}
