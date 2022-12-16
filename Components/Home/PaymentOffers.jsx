import { Image } from "@chakra-ui/image";
import { Box, Heading, SimpleGrid } from "@chakra-ui/layout"

const db = [
  {
    img: "https://cdn01.pharmeasy.in/dam/banner/banner/4bbc0b1648d-OPEN-FILE.jpg?dim=1440x0",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/banner/banner/f3c446e4108-AMAZON.jpg?dim=1440x0",
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/banner/banner/9466405c308-au.jpg?dim=1440x0",
  },
];


export default function PaymentOffers(){
    return (
      <>
        <Heading ml={20} fontWeight={500} as="h3" size="lg" mt={20}>
          Payment Offers
        </Heading>
        <SimpleGrid columnGap={5} m="auto" w="85%" columns={[1, 2, 3]}>
          {db.map((ele,index) => {
            return (
              <Box key={index} mt={10}>
                <Image width={"380px"} src={ele.img} />
              </Box>
            );
          })}
        </SimpleGrid>
      </>
    );
}