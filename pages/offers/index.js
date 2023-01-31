import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Image,
  ListItem,
  SimpleGrid,
  UnorderedList,
} from "@chakra-ui/react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import Footer from "../../components/Mainfooter/footer";
import Navbar from "../../components/Navbar/Navbar";

export default function Offers() {
  return (
    <>
      <Navbar />
      <Box h={10}></Box>
      <Box w="70%" m="auto">
        {/* ----------breadcrumb link---------- */}
        <Breadcrumb style={{ fontSize: "14px" }} spacing="8px" separator={">"}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/offers">
              MedsPharm Cupon codes & Offers
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        {/* -------heading-------------- */}
        <Heading
          mt={10}
          color="#4f585e"
          fontWeight={600}
          size={{ base: "sm", sm: "sm", md: "lg", lg: "lg" }}
        >
          MedsPharm Offers & Cupon Codes
        </Heading>
        <Box fontSize={"15px"} mt={"20px"}>
          MedsPharm is one of India’s leading online healthcare platforms that
          allows you to make great savings on your medicines and healthcare
          needs every day.We have got the best offers just for you. Watch out
          this space for the best MedsPharma offers on a range of healthcare
          products. Find new MedsPharma coupons and many such exciting offer
          codes updated every day.
        </Box>
        <Heading mt={10} color={"grey"} as="h6" size="sm">
          Download the MedsPharma app today to buy medicines online with great
          savings.
        </Heading>
        <Heading mt={2} color={"grey"} as="h6" size="sm">
          Hurry! Avail these exclusive MedsPharma offers now.
        </Heading>
        <SimpleGrid mt={10} rowGap={7} columns={[1, 1, 2, 2]}>
          <Box
            boxShadow={"0 2px 4px 0 rgb(0 0 0 / 8%)"}
            h="170px"
            _hover={{
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
            }}
            border={"1px solid lightgrey"}
            p={5}
            w="500px"
          >
            <Box>
              <Flex gap={10}>
                <Box>
                  <Image
                    w="60px"
                    src="https://cms-contents.pharmeasy.in/offer/40ef59a3196-Diagnostics-11-min.png"
                  />
                </Box>
                <Box width={"400px"}>
                  <Heading as="h6" size="sm">
                    Flat 27% OFF + up to Rs.5000 surprise cashback on medicines
                  </Heading>
                  <Box>
                    FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body
                    checkup with Vitamin D and B12.
                  </Box>
                </Box>
              </Flex>
            </Box>
            <Box p={2} borderTop={"1px dashed lightgrey"} mt={5}>
              <Flex gap={"200px"}>
                <Box width="540px">Code: GET1000</Box>
                <Box width="400px" fontWeight={600} color={"#10847e"}>
                  Copy Code
                </Box>
              </Flex>
            </Box>
          </Box>
          <Box
            boxShadow={"0 2px 4px 0 rgb(0 0 0 / 8%)"}
            h="170px"
            _hover={{
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
            }}
            border={"1px solid lightgrey"}
            p={5}
            w="500px"
          >
            <Box>
              <Flex gap={10}>
                <Box>
                  <Image
                    w="60px"
                    src="https://cms-contents.pharmeasy.in/offer/ac04bc614ab-Offer_YES.jpg"
                  />
                </Box>
                <Box width={"400px"}>
                  <Heading as="h6" size="sm">
                    Flat 25% OFF + FREE Delivery on 3 medicine orders
                  </Heading>
                  <Box>
                    Coupon applicable on first 3 medicine orders above Rs. 999.
                    Hurry! Order Now.
                  </Box>
                </Box>
              </Flex>
            </Box>
            <Box p={2} borderTop={"1px dashed lightgrey"} mt={5}>
              <Flex gap={"200px"}>
                <Box width="540px">Code: VQQES27</Box>
                <Box width="400px" fontWeight={600} color={"#10847e"}>
                  Copy Code
                </Box>
              </Flex>
            </Box>
          </Box>
          <Box
            boxShadow={"0 2px 4px 0 rgb(0 0 0 / 8%)"}
            h="170px"
            _hover={{
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
            }}
            border={"1px solid lightgrey"}
            p={5}
            w="500px"
          >
            <Box>
              <Flex gap={10}>
                <Box>
                  <Image
                    w="60px"
                    src="https://cms-contents.pharmeasy.in/offer/ac04bc614ab-Offer_YES.jpg"
                  />
                </Box>
                <Box width={"400px"}>
                  <Heading as="h6" size="sm">
                    Order medicines worth Rs.1000 get FLAT Rs.1000 OFF
                  </Heading>
                  <Box>
                    Coupon applicable on first medicine order above Rs. 1299.
                    Hurry! Order Now.
                  </Box>
                </Box>
              </Flex>
            </Box>
            <Box p={2} borderTop={"1px dashed lightgrey"} mt={5}>
              <Flex gap={"200px"}>
                <Box width="540px">Code: VIBES27</Box>
                <Box width="400px" fontWeight={600} color={"#10847e"}>
                  Copy Code
                </Box>
              </Flex>
            </Box>
          </Box>
          <Box
            boxShadow={"0 2px 4px 0 rgb(0 0 0 / 8%)"}
            h="170px"
            _hover={{
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
            }}
            border={"1px solid lightgrey"}
            p={5}
            w="500px"
          >
            <Box>
              <Flex gap={10}>
                <Box>
                  <Image
                    w="60px"
                    src="https://cms-contents.pharmeasy.in/offer/23881b129f7-LOGO.jpg"
                  />
                </Box>
                <Box width={"400px"}>
                  <Heading as="h6" size="sm">
                    FLAT 15% OFF on medicines + up to Rs.250 cashback
                  </Heading>
                  <Box>FLAT 15% OFF on medicines + up to Rs.250 cashback</Box>
                </Box>
              </Flex>
            </Box>
            <Box p={2} borderTop={"1px dashed lightgrey"} mt={5}>
              <Flex gap={"200px"}>
                <Box width="540px">No code required</Box>
                <Box width="400px" fontWeight={600} color={"#10847e"}>
                  Continue
                </Box>
              </Flex>
            </Box>
          </Box>
          <Box
            boxShadow={"0 2px 4px 0 rgb(0 0 0 / 8%)"}
            h="170px"
            _hover={{
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
            }}
            border={"1px solid lightgrey"}
            p={5}
            w="500px"
          >
            <Box>
              <Flex gap={10}>
                <Box>
                  <Image
                    w="60px"
                    src="https://cms-contents.pharmeasy.in/offer/ac04bc614ab-Offer_YES.jpg"
                  />
                </Box>
                <Box width={"400px"}>
                  <Heading as="h6" size="sm">
                    Get FREE delivery
                  </Heading>
                  <Box>
                    Offer Valid on orders above Rs.749. Hurry! order now!
                  </Box>
                </Box>
              </Flex>
            </Box>
            <Box p={2} borderTop={"1px dashed lightgrey"} mt={5}>
              <Flex gap={"200px"}>
                <Box width="540px">Code: FREEDE</Box>
                <Box width="400px" fontWeight={600} color={"#10847e"}>
                  Copy Code
                </Box>
              </Flex>
            </Box>
          </Box>
        </SimpleGrid>
        {/* --------coupn count--------------- */}
        <Box mt={10}>
          <Image src="https://user-images.githubusercontent.com/97351159/208237549-8ce10c4a-5dbb-4696-a007-3adcf3d93b59.png" />
        </Box>

        <Box mt={10} fontSize={"12px"} color="lightgrey">
          Disclaimer: The offer/discount rate/cashback are geography specific
          and may vary in different geographical regions. PharmEasy reserves the
          right to discontinue/modify/change the offer/discount rates/cashback
          at any time without prior notice. Notwithstanding anything contained
          herein offer/discount rates/cashback reflected in the cart at the time
          of checkout shall be considered final & binding. Under no circumstance
          will the offer/discount/cashback being offered herein be settled with
          cash in lieu by PharmEasy. T&C apply{" "}
        </Box>

        {/* ----------------------details of cupon---------- */}
        <Box mt={10} borderRadius={10} border={"1px solid lightgrey"}>
          {" "}
          <Accordion pb={4} border={"0px solid white"} allowMultiple>
            <AccordionItem mt={5}>
              <h2>
                <AccordionButton color={"black"}>
                  <Box flex="1" textAlign="left">
                    What are the latest offers & cupon codes applicable on
                    MedsPharma
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <UnorderedList>
                  <ListItem>
                    Flat 27% OFF + up to Rs.5000 surprise cashback
                  </ListItem>
                  <ListItem>
                    Flat 25% OFF + FREE Delivery on 3 medicine orders
                  </ListItem>
                  <ListItem>Get FREE delivery</ListItem>
                  <ListItem>
                    FLAT 15% OFF on medicines + up to Rs.250 cashback
                  </ListItem>
                  <ListItem>Attractive offers</ListItem>
                  <ListItem> Cashback option through wallet</ListItem>
                  <ListItem>Stringent quality checks</ListItem>
                  <ListItem>
                    Order medicines worth Rs.1000 and get FLAT Rs.1000 OFF on
                    booking 2 Comprehensive Full Body checkup with Vitamin D and
                    B12.
                  </ListItem>
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box mt={5} borderRadius={10} border={"1px solid lightgrey"}>
          {" "}
          <Accordion pb={4} border={"0px solid white"} allowMultiple>
            <AccordionItem mt={5}>
              <h2>
                <AccordionButton color={"black"}>
                  <Box flex="1" textAlign="left">
                    How do i use cupon code on MedsPharma
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <UnorderedList>
                  <ListItem>
                    Follow these steps to use a coupon code on MedsPharma –
                  </ListItem>
                  <ListItem>
                    Download the PharmEasy app or visit the website.
                  </ListItem>
                  <ListItem>
                    Select the products you want and add them to the cart.
                  </ListItem>
                  <ListItem>
                    Visit the cart page and click on Apply Coupon.
                  </ListItem>
                  <ListItem>Enter the coupon code and click Apply.</ListItem>
                  <ListItem>
                    {" "}
                    Proceed to checkout to avail the discount.
                  </ListItem>
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box mt={5} borderRadius={10} border={"1px solid lightgrey"}>
          {" "}
          <Accordion pb={4} border={"0px solid white"} allowMultiple>
            <AccordionItem mt={5}>
              <h2>
                <AccordionButton color={"black"}>
                  <Box flex="1" textAlign="left">
                    How to cancel/promo code ?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <UnorderedList>
                  <ListItem>
                    To cancel a coupon/promo code, you have to follow these
                    steps –
                  </ListItem>
                  <ListItem>Go to the cart page.</ListItem>

                  <ListItem>
                    Click on ‘Remove’ in the coupon section to remove the
                    coupon/promo code.
                  </ListItem>
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box mt={5} borderRadius={10} border={"1px solid lightgrey"}>
          <Accordion pb={4} border={"0px solid white"} allowMultiple>
            <AccordionItem mt={5}>
              <h2>
                <AccordionButton color={"black"}>
                  <Box flex="1" textAlign="left">
                    Can i apply more than one MedsPharm copun at the same time?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                No, you can only apply one MedsPharma coupon at once. You can
                remove one coupon code and replace it with another one if you
                wish.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box mt={5} borderRadius={10} border={"1px solid lightgrey"}>
          <Accordion pb={4} border={"0px solid white"} allowMultiple>
            <AccordionItem mt={5}>
              <h2>
                <AccordionButton color={"black"}>
                  <Box flex="1" textAlign="left">
                    Do I get special discount when ordering for the 1st time
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Yes, MedsPharma offers a special discount when you place your
                1st order. Additionally, you also get exciting wallet offers and
                cashbacks.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
