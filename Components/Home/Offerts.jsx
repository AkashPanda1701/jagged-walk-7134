import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/layout";
const db = [
  {
    img: "https://cms-contents.pharmeasy.in/offer/e48df3b2675-Offer_YES.jpg?dim=1440x0",
    Box: "Flat 25% off on first 3 medicine orders ",
  },
  {
    img: "https://cms-contents.pharmeasy.in/offer/e48df3b2675-Offer_YES.jpg?dim=1440x0",
    Box: "Flat 27% OFF + up to Rs.5000 surprise cashback",
  },
  {
    img: "https://cms-contents.pharmeasy.in/offer/e48df3b2675-Offer_YES.jpg?dim=1440x0",
    Box: "Additional 15% cashback on 1st medicine",
  },
];

export default function OffersJustforYou  ()  {
  return (
    <>
      <Heading ml={20} fontWeight={500} as="h3" size="lg" mt={20}>
        Offers Just For You
      </Heading>
      <SimpleGrid columnGap={5} m="auto" w="80%" columns={[1, 2, 2, 3]}>
        {db.map((ele, index) => {
          return (
            <Box
              key={index}
              mt={10}
              _hover={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
              }}
              borderRadius={10}
              border={"1px solid lightgrey"}
              padding={7}
            >
              <Flex gap={4}>
                <Image borderRadius={5} width={10} src={ele.img}></Image>
                <Box>{ele.Box}</Box>
              </Flex>
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
};
