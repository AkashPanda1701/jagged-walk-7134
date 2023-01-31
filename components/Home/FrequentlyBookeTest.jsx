import { Image } from "@chakra-ui/image";
import { Heading, SimpleGrid, Box, Flex } from "@chakra-ui/layout";

const db = [
  {
    off: "63% OFF",
    title: "Comprehensive Full Body Checkup with Vitamin D & B12",
    des: "Measures Vitamin D & B12 levels and other essential parameters",
    mrp: "₹4199",
    offer: "₹199",
    img: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/4ff607383fad35e4af5639c3e7709734.png?dim=96x0",
  },
  {
    off: "63% OFF",
    title: "Post Prandial Blood Sugar (PPBS) & B12",
    des: "Measures your blood sugar levels after last",
    mrp: "₹4199",
    offer: "₹199",
    img: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/bc45ae15fcf13e7e8d2662e4aebce93c.png?dim=96x0",
  },
  {
    off: "64% OFF",
    title: "Healthy 2022 Full Body Checkup",
    des: "Diagnostic tool for screening and monitoring of your health",
    mrp: "₹2990",
    offer: "₹1049",
    img: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/01abb07c5b233f90b2cd0b64a7ebccee.png?dim=96x0",
  },
  {
    off: "64% OFF",
    title: "Basic Health Checkup",
    des: "Assesses health of 47 essential body",
    mrp: "₹2050",
    offer: "₹725",
    img: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/c4162b4ec00938379d15b2719577457e.png?dim=96x0",
  },
];

export default function FrequentlyBookedLabTest  () {
  return (
    <>
      <Heading ml={20} fontWeight={500} as="h3" size="lg" mt={20}>
        Frequently Booked Lab Test
      </Heading>
      <SimpleGrid
        pt={10}
       textAlign={"center"}
        columnGap={10}
        rowGap={5}
        m="auto"
        w="85%"
        columns={[1,2, 2, 4]}
      >
        {db.map((ele, index) => {
          return (
            <Box
              key={index}
              cursor={"pointer"}
              padding={4}
              background={"#f1fafe"}
              width={60}
            >
              <Box
                width={20}
                color="white"
                padding={1}
                borderRadius={4}
                background={"#f47779"}
              >
                {ele.off}
              </Box>
              <Heading mt={3} as={"h5"} size="sm">
                {ele.title}
              </Heading>
              <Box mt={3} color={"grey"} fontSize={14}>
                {ele.des}
              </Box>
              <Flex mt={3}>
                <Box>
                  <Heading
                    color={"grey"}
                    textDecoration={"line-through"}
                    as={"hg"}
                    size="md"
                  >
                    {ele.mrp}
                  </Heading>
                  <Heading as={"h5"} size="lg">
                    {ele.offer}
                  </Heading>
                </Box>
                <Image ml={7} width={24} src={ele.img} />
              </Flex>
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
};
