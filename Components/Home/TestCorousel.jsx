import React, { Component } from "react";
import { Image } from "@chakra-ui/image";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/layout";
import Slider from "react-slick";

const db = [
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/I05582/dr-morepen-gluco-one-bg-03-glucometer-test-strips-box-of-50-1-1669655233.jpg?dim=1440x0",
    des: "Dr Morepen Gluco One Bg 03",
    mrp: "MRP ₹849.00",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/D64484/everherb-by-pharmeasy-flaxseed-omega-3-essential-fatty-acids-healthy-heart-bottle-of-60-2-1670824839.jpg?dim=1440x0",
    des: "Everherb (by Pharmeasy)  ",
    mrp: "MRP ₹435.00",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/207833/calcimax-forte-plus-strip-of-30-tablets-2-1669616965.jpg?dim=1440x0",
    des: "Calcimax Forte Plus  30 Tablets ",
    mrp: "MRP ₹285.00",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/021870/b-d-ultra-fine-iii-nano-pen-needles-4mm-32g-15-1-1669619409.jpg?dim=1024x0",
    des: "BD Ultra-Fine  Needles",
    mrp: "MRP ₹99.00",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/A65047/liveasy-essentials-bamboo-cotton-buds-80-sticks-160-swabs-1-1641792801.jpg?dim=1024x0",
    des: "Liveasy Essentials Cotton Buds",
    mrp: "MRP ₹69.00",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/181140/vicks-vaporub-50ml-relief-from-cold-cough-headache-and-body-pain-2-1669655242.jpg?dim=1024x0",
    des: "Vicks Vaporub 50ml ",
    mrp: "MRP ₹140.00",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/266249/depura-60000-iu-vitamin-d3-oral-solution-helps-bones-healthy-aids-in-boosting-immunity-sugarfree-2-1669616992.jpg?dim=1024x0",
    des: "Depura 60000 Iu Vitamin D3 ",
    mrp: "MRP ₹79.70",
  },
];

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
          {db.map((ele) => {
            return (
              <Box width={130}>
                <Image
                  borderRadius={8}
                  border={"1px solid lightgrey"}
                  p={5}
                  _hover={{
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                  }}
                  width={"auto"}
                  height="120px"
                  src={ele.img}
                />
                <Text mt={4}>{ele.des}</Text>
                <Text mt={2} color="grey">
                  {ele.mrp}
                </Text>
              </Box>
            );
          })}
        </Slider>
      </div>
    );
  }
}
