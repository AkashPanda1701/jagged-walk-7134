import { Image } from "@chakra-ui/image";
import { Box, Heading, SimpleGrid } from "@chakra-ui/layout";
const db = [
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/923a665cc6f-Skin_care.png?dim=128x0",
    title: "Skin Care",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/18d2e2ee86b-Vitamins.png?dim=128x0",
    title: "Vitamins & Supplements",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/0af9ac9f350-Diabetes.webp?dim=128x0",
    title: "Dibetes Care",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/68369c9df98-Pregnancy.webp?dim=128x0",
    title: "Baby & Mom Care",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/24a0d2c733e-Heart.webp?dim=128x0",
    title: "Cardiac Care",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/16ab65c0826-Covid.webp?dim=128x0",
    title: "Covid Care",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/26bbd7a9e98-Lifestyle.webp?dim=128x0",
    title: "Lifestyle Disorders",
  },
];

export default function  ShopByConcern () {
  return (
    <>
      <Heading ml={20} fontWeight={500} as="h3" size="lg" mt={10}>
        Shop by Concern
      </Heading>
      <Box ml="83px" mt={3} color={"grey"}>
        Products are handpicked by experts!
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
              alt=''
                p={5}
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                borderRadius={8}
                width={130}
                src={ele.img}
              />

              <Box mt={4} textAlign={"center"}>
                {ele.title}
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
};
