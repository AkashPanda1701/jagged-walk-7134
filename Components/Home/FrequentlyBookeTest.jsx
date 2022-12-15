import { Heading, SimpleGrid,Box } from "@chakra-ui/layout";

const db = [
  {
    off: "63% OFF",
    title: "Comprehensive Full Body Checkup with Vitamin D & B12",
    des: "Measures Vitamin D & B12 levels and other essential parameters",
    mrp: "₹4199",
    off: "₹199",
  },
];


export const FrequentlyBookedLabTest=()=>{
    return (
      <>
        <Heading ml={20} fontWeight={500} as="h3" size="lg" mt={20}>
          Frequently Booked Lab Test
        </Heading>
        <SimpleGrid>
            {
                db.map((ele)=>{
                    return (
                      <Box padding={4} background={"#f1fafe"} width={60}>
                        <Box
                          width={20}
                          color="white"
                          padding={1}
                          borderRadius={4}
                          background={"#f47779"}
                        >
                          60% OFF
                        </Box>
                        <Heading mt={3} as={"h5"} size="sm">
                          Post Prandial Blood Sugar (PPBS)
                        </Heading>
                        <Text mt={3} color={"grey"} fontSize={14}>
                          Measures your blood sugar levels after last meal
                        </Text>
                        <Flex mt={3}>
                          <Box>
                            <Heading
                              color={"grey"}
                              textDecoration={"line-through"}
                              as={"hg"}
                              size="md"
                            >
                              ₹500
                            </Heading>
                            <Heading as={"h5"} size="lg">
                              ₹199
                            </Heading>
                          </Box>
                          <Image
                            ml={7}
                            width={24}
                            src="https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/f39e65011d9439e28c6500a1e444735e.png?dim=96x0"
                          />
                        </Flex>
                      </Box>
                    );
                })

            }
        </SimpleGrid>
      </>
    );
}