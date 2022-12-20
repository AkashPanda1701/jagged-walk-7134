import { Box, Flex, Heading, Link, SimpleGrid } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

export default function Footer () {
  return (
    <>
      <Box h="60px"></Box>
      <Box pt={10} m="auto" w="95%" bg="#eef4ff" className="footerdiv">
        <Box className="footercategories">
          <SimpleGrid p={5} m="auto" w="86%" columns={[2, 2, 3, 4]}>
            <Box fontSize={"14px"}>
              <Heading as="h6" size="sm">
                Company
              </Heading>
              <Box>About Us</Box>
              <Box>Careers</Box>
              <Box>Blog</Box>
              <Box>Parter with PharmEasy</Box>
              <Box>Sell at PharmEasy</Box>
            </Box>
            <Box fontSize={"14px"}>
              <Heading as="h6" size="sm">
                Featured Categories
              </Heading>
              <Box>Covid Essentials</Box>
              <Box>Personal Care</Box>
              <Box>Health Food and Drinks</Box>
              <Box>Beauty</Box>
              <Box>Skin Care</Box>
              <Box>Home Care</Box>
              <Box>Health Condition</Box>
              <Box>Top Products</Box>
            </Box>
            <Box fontSize={"14px"}>
              <Heading as="h6" size="sm">
                Need Help
              </Heading>
              <Box>Browse All Medicines</Box>
              <Box>Browse All Molecules</Box>
              <Box>Health Food and Drinks</Box>
              <Box>Browse All Cities</Box>
              <Box>Browse All Areas</Box>
              <Box>Home Care</Box>
              <Box>Browse All Stores</Box>
              <Box>FAQs</Box>
            </Box>
            <Box>
              <Heading as="h6" size="md">
                Follow Us On
              </Heading>
              <Flex mt={5} gap={10}>
                <Box>
                  <Link href="https://www.instagram.com/pharmeasyapp/">
                    <Image
                      w={"30px"}
                      src="https://assets.pharmeasy.in/apothecary/images/Instagram.svg?dim=32x0"
                    ></Image>
                  </Link>
                </Box>
                <Box>
                  <Link href="https://www.facebook.com/pharmeasy/">
                    <Image
                      w={"30px"}
                      src="https://assets.pharmeasy.in/apothecary/images/facebook.svg?dim=32x0"
                    ></Image>
                  </Link>
                </Box>
                <Box>
                  <Link href="https://www.youtube.com/channel/UCDats_DLX-bGZH3-KGu8JhA">
                    <Image
                      w={"30px"}
                      src="https://assets.pharmeasy.in/apothecary/images/Youtube.svg?dim=32x0"
                    ></Image>
                  </Link>
                </Box>
                <Box>
                  <Link href="https://twitter.com/pharmeasyapp/">
                    <Image
                      w={"30px"}
                      src="https://assets.pharmeasy.in/apothecary/images/Twitter.svg?dim=32x0"
                    ></Image>
                  </Link>
                </Box>
              </Flex>
            </Box>
            <Box fontSize={"14px"} className="ourservices">
              <Heading as="h6" size="sm">
                Our Services
              </Heading>
              <Box>Order Medicine</Box>
              <Box>Healthcare Products</Box>
              <Box>Lab Tests</Box>
              <Box>Find Nearest Collection Centre</Box>
            </Box>
          </SimpleGrid>
        </Box>
        <Box w="80%" >
          <Heading as="h6" size="md">
            Our Payment Partners
          </Heading>
          <Flex w="60%"  pt={"20px"} gap={"20px"}>
            <Box>
              <Image
                w={"35px"}
                h="20px"
                src="https://assets.pharmeasy.in/apothecary/images/gpay.png?dim=1440x0"
              />
            </Box>
            <Box>
              <Image
                w={"35px"}
                h="20px"
                src="https://assets.pharmeasy.in/apothecary/images/paytm.png?dim=1440x0"
              />
            </Box>
            <Box>
              <Image
                w={"26px"}
                h="20px"
                src="https://assets.pharmeasy.in/apothecary/images/phonepe.png?dim=1440x0"
              />
            </Box>
            <Box>
              <Image
                w={"30px"}
                h="20px"
                src="https://assets.pharmeasy.in/apothecary/images/amazon.png?dim=1440x0"
              />
            </Box>
            <Box>
              <Image
                w={"30px"}
                h="20px"
                src="https://assets.pharmeasy.in/apothecary/images/mobikwik.png?dim=1440x0"
              />
            </Box>
            <Box>
              <Image
                w={"30px"}
                h="20px"
                src="https://assets.pharmeasy.in/apothecary/images/olamoney.png?dim=1440x0"
              />
            </Box>
            <Box>
              <Image
                w={"30px"}
                h="20px"
                src="https://assets.pharmeasy.in/apothecary/images/maestro.png?dim=1440x0"
              />
            </Box>
            <Box>
              <Image
                w={"30px"}
                h="20px"
                src="https://assets.pharmeasy.in/apothecary/images/visa.png?dim=1440x0"
              />
            </Box>
            <Box>
              <Image
                w={"30px"}
                h="20px"
                src="https://assets.pharmeasy.in/apothecary/images/rupay.png?dim=1440x0"
              />
            </Box>
          </Flex>
          <Box pt="30px" pb={10} fontSize="14px">
            © 2022 PharmEasy. All Rights Reserved
          </Box>
        </Box>
      </Box>
    </>
  );
};
