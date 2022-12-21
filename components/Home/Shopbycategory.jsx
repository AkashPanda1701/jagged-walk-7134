import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import {
  Heading,
  Grid,
  GridItem,
  Box,
  Image,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";

const db = [
  {
    img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6d462f424a43372ea8b7b6f8ca13e052.png?f=png?dim=256x0",
    title: "Health care",
    link: "",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9f446c0e74273d70b0baf85e4ff0f76a.png?f=png?dim=256x0",
    title: "Personal care",
    link: "",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/aace6d1f0dc03f1f8c6e26dd880e1934.png?f=png?dim=256x0",
    title: "Health food and drinks",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9b3ad6971475304e9e1614ac30d4545a.png?f=png?dim=256x0",
    title: "Skin care",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/dc96175686f135b5a22d1e57165d0246.png?f=png?dim=256x0",
    title: "Home care",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ecad9a974e003fb987858b3ee81413c6.png?f=png?dim=256x0",
    title: "Ayurvedic care",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/3c7ab4d29c6631f7a5cb7eafd3bfbc79.png?f=png?dim=256x0",
    title: "Beauty",
  },
];
// slider settings
const settings = {
  dots: false,
  arrows: true,
  fade: false,
  infinite: true,
  speed: 500,
  autoplay: false,
  slidesToShow: 6,
  slidesToScroll: 1,
};


export default function ShopByCategory() {
   const [slider, setSlider] = useState();
   const top = useBreakpointValue({ base: "90%", md: "50%" });
   const side = useBreakpointValue({ base: "30%", md: "10px" });
  

  return (
    <>
      <Heading ml={20} fontWeight={500} as="h3" size="lg" mt={20}>
        Shop By Categories
      </Heading>
      <Box
        display={{ base: "-ms-inline-grid", md: "inline-grid", lg: "none" }}
        pt={10}
        pl={{ base: "30px" }}
        m="auto"
        w="100%"
      >
        <Grid
          fontSize={15}
          mt={10}
          w="95%"
          m="auto"
          gap={15}
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(7, 1fr)",
          }}
        >
          <GridItem>
            <Box width={130}>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={2}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={130}
                src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6d462f424a43372ea8b7b6f8ca13e052.png?f=png?dim=256x0"
              />
              <Box mt={4}>Health care</Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box width={130}>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={2}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={130}
                src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9f446c0e74273d70b0baf85e4ff0f76a.png?f=png?dim=256x0"
              />
              <Box mt={4}>Personal care</Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box width={130}>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={2}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={130}
                src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/aace6d1f0dc03f1f8c6e26dd880e1934.png?f=png?dim=256x0"
              />
              <Box mt={4} width={40}>
                Health food and drinks
              </Box>
            </Box>
          </GridItem>

          <GridItem>
            <Box width={130}>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={2}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={130}
                src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9b3ad6971475304e9e1614ac30d4545a.png?f=png?dim=256x0"
              />
              <Box mt={4}>Skin care</Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box width={130}>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={2}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={130}
                src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/dc96175686f135b5a22d1e57165d0246.png?f=png?dim=256x0"
              />
              <Box mt={4}>Home care</Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box width={130}>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={2}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={130}
                src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/ecad9a974e003fb987858b3ee81413c6.png?f=png?dim=256x0"
              />
              <Box mt={4}>Ayurvedic care</Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box width={130}>
              <Image
                borderRadius={8}
                border={"1px solid lightgrey"}
                padding={2}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                width={130}
                src="https://cdn01.pharmeasy.in/dam/discovery/categoryImages/3c7ab4d29c6631f7a5cb7eafd3bfbc79.png?f=png?dim=256x0"
              />
              <Box mt={4}>Beauty</Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* --------------slider--------- */}
      <Box h={10}></Box>
      <Box
        display={{ base: "none", md: "none", lg: "block" }}
        width="90%"
        m="auto"
        position={"relative"}
        height={"150px"}
        overflow={"hidden"}
        borderRadius="0"
        zIndex="0"
      >
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <IconButton
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          bg="black"
          _active={{ bg: "black" }}
          size="md"
          _hover={{
            bg: "black",
          }}
          onClick={() => slider?.slickPrev()}
        >
          <BsChevronLeft color="white" />
        </IconButton>
        <IconButton
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          size="md"
          _hover={{
            bg: "black",
          }}
          _active={{ bg: "black" }}
          bg="black"
          onClick={() => slider?.slickNext()}
        >
          <BsChevronRight color="white" />
        </IconButton>

        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {db.map((ele, index) => (
            <Box textAlign={"center"} key={index}>
              <Image ml="60px" w={"120px"} src={ele.img} />
              <Box>{ele.title}</Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}
