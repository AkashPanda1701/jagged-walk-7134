import React, {useEffect, useState} from "react";
import { Box, Flex, IconButton, Text, useBreakpointValue } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import SimilarProduct from "./similarproduct";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/product/action";


// Slider settings
const settings = {
    dots: false,
    arrows: true,
    fade: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
};

const  SimilarProductSlider = ({category}) => {
    const [slider, setSlider] = React.useState();
    const dispatch = useDispatch();
    const {data} = useSelector(state => state.product)

    const top = useBreakpointValue({ base: "90%", md: "50%" });
    const side = useBreakpointValue({ base: "30%", md: "10px" });

    
useEffect(()=>{
    dispatch(getAllProducts({category}))
},[category, dispatch])


    return (
    <div style={{ width: '70%', margin: 'auto'}}>
        <Flex h="450px" justify="center" marginY="20px" direction="column" py="40px" color="#4f585e" borderTop="1.5px solid #e6e8ee" borderBottom="1.5px solid #d8dee3">
            <Text fontSize="18px" fontWeight="700" textAlign="left">Similar Products</Text>
            <Box
                position={"relative"}
                width={"full"}
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
                    bg="white"
                    boxShadow=" rgba(136, 165, 191, 0.58) 6px 2px 15px 0px, rgba(255, 255, 255, 2.8) -2px -0px 16px 0px"
                    _hover={{
                        bg: "white",
                        transform: "scale(1.1) translateY(-15px)",
                    }}
                    _active={{ bg: "white" }}
                    size="sm"
                    onClick={() => slider?.slickPrev()}
                >
                    <BiLeftArrowAlt color="#0f847e" />
                </IconButton>
                <IconButton
                    borderRadius="full"
                    position="absolute"
                    right={side}
                    top={top}
                    transform={"translate(0%, -50%)"}
                    zIndex={2}
                    size="sm"
                    boxShadow=" rgba(136, 165, 191, 0.58) 6px 2px 15px 0px, rgba(255, 255, 255, 2.8) -2px -0px 16px 0px"
                    _hover={{
                        bg: "white",
                        transform: "scale(1.1) translateY(-15px)",
                    }}
                    _active={{ bg: "white" }}
                    bg="white"
                    onClick={() => slider?.slickNext()}
                >
                    <BiRightArrowAlt color="#0f847e" />
                </IconButton>
                <Slider {...settings} ref={(slider) => setSlider(slider)}>
                    {data.map((prod, index) => (
                        <SimilarProduct prod={prod}  key={prod._id} />
                    ))}
                </Slider>
            </Box>
        </Flex>
        </div>
    );
}

export default SimilarProductSlider;

