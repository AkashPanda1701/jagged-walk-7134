
import Slider from "react-slick";

import { Heading ,Grid,GridItem,Box, Image,Text } from "@chakra-ui/react";


export const ShopByCategory= () => {

  return (
    <>
      <Heading ml={20} fontWeight={500} as="h3" size="lg" mt={20}>
        Shop By Categories
      </Heading>
      <Box pt={10} m="auto" w="82%">
        <Grid
          fontSize={15}
          mt={10}
          m="auto"
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(4, 1fr)",
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
              <Text mt={4}>Health care</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
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
              <Text mt={4}>Personal care</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
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
              <Text mt={4} width={40}>
                Health food and drinks
              </Text>
            </Box>
          </GridItem>

          <GridItem>
            <Box>
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
              <Text mt={4}>Skin care</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
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
              <Text mt={4}>Home care</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
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
              <Text mt={4}>Ayurvedic care</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
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
              <Text mt={4}>Beauty</Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
