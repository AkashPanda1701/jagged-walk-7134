import {
  SimpleGrid,
  Image,
  Box,
  Heading,
  Grid,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";

const db = [
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/10dfe8c8aa7-HealthCheckups.jpg?dim=256x0",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/6c5479c6c0c-Vitamins.jpg?dim=256x0",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/69588f95674-Diabetes.jpg?dim=256x0",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/c507b2563fd-thyroid.png?dim=256x0",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/eeb3fe3251f-WomenCare.jpg?dim=256x0",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/355e9b77fb5-FeverInfection.jpg?dim=256x0",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/6e78a241e48-CovidCare.jpg?dim=256x0",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/94616a36a9a-Lifestyle.jpg?dim=256x0",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/64444851b5e-BoneHealth.jpg?dim=256x0",
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

export default function LabTest() {
  const [slider, setSlider] = useState();
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });
  return (
    <>
      <Heading ml={20} fontWeight={500} as="h3" size="lg" mt={20}>
        Lab Test by Health Concern
      </Heading>
      <SimpleGrid
        display={{ base: "inline-grid", md: "inline-grid", lg: "none" }}
        pt={10}
       
     pl={10}
        w="90%"
      m={'auto'}
        gap={9}
        columns={[2, 3, 4, 7]}
      >
        {db.map((ele, index) => {
          return (
            <Box key={index}>
              <Image src={ele.img} />
            </Box>
          );
        })}
      </SimpleGrid>
      <Box h={10}></Box>
      <Box
        display={{ base: "none", md: "none", lg: "block" }}
        width="90%"
        m="auto"
        position={"relative"}
        height={"180px"}
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
          <BsChevronRight  color="white" />
        </IconButton>

        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {db.map((ele, index) => (
            <Box key={index}>
              <Image w={"190px"} src={ele.img} />
              
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}

   
    

