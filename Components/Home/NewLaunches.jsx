import { Image } from "@chakra-ui/image";
import { Box, Heading, SimpleGrid , useBreakpointValue,IconButton, } from "@chakra-ui/react";
import { useState } from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
const db = [
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/J64776/prohance-hp-high-protein-sugar-free-powder-vanilla-400g-2-1641794045.jpg?dim=1440x0",
    des: "Prohance Hp (high Protein)",
    mrp: "MRP ₹799.00",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/E52686/liveasy-surgicals-rolled-bandage-pack-of-12-5cm-x-3mt-2-1653648071.jpg?dim=1440x0",
    des: "Liveasy Surgical's Rolled Bandage ",
    mrp: "MRP ₹185.00",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/K49952/dettol-neem-bathing-soap-bar-with-pure-neem-oil-75g-buy-3-get-1-free-combo-offer-on-bath-soap-2-1664184591.jpg?dim=1440x0",
    des: "Dettol Neem Bathing Soap Bar ",
    mrp: "MRP ₹135.00",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/P74446/mamypoko-pants-extra-absorb-diapers-large-38-diapers-2-1666152542.jpg?dim=1440x0",
    des: "Mamypoko Pants Extra Absorb",
    mrp: "MRP ₹799.00",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/X79195/liveasy-surgicals-rolled-bandage-pack-of-12-10cmx3mt-2-1653648101.jpg?dim=1440x0",
    des: "Liveasy Surgical's Rolled Bandage ",
    mrp: "MRP ₹345.00",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/U87029/sugar-free-natura-low-calorie-sweetner-500-pellets-2-1669362102.jpg?dim=1440x0",
    des: "Sugar Free Natura Low Calorie ",
    mrp: "MRP ₹300.00",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/products_otc/A47907/nicotex-nicotine-patch-7mg-7-patches-2-1660989963.jpg?dim=1440x0",
    des: "Nicotex Nicotine Patch 7mg",
    mrp: "MRP ₹599.00",
  },
];

export default function NewLaunches  ()  {

  return (
    <>
      <Heading ml={20} fontWeight={500} as="h3" size="lg" mt={20}>
        New Launches
      </Heading>
      <Box ml={20} mt={3} color={"grey"}>
        New wellness range just for you!
      </Box>
      <SimpleGrid
        pt={10}
        textAlign={"center"}
        columnGap={10}
        m="auto"
        w="85%"
        columns={[2, 3, 4, 7]}
      >
        {db.map((ele, index) => {
          return (
            <Box key={index} width={130}>
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
              <Box mt={4}>{ele.des}</Box>
              <Box mt={2} color="grey">
                {ele.mrp}
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
};
