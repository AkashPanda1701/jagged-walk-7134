import {
    Box,
    Button,
    Grid,
    GridItem,
    Heading,
    Image,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";
import Link from "next/link";
import styles from "./Css/order-success.module.css";

export default function OrderSuccess() {
    return (
        <Box maxW="1349px" m="auto" mt="50px">
            <Box maxW="1024px" m="auto">
                <Grid
                  
                    templateRows="repeat(2, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    gap="80px"
                >
                    <GridItem  colSpan={{ base: 5, sm: 5, md: 3 }}>
                        <Box className={styles.successMessage} h="201px">
                            <Image
                                src="https://assets.pharmeasy.in/web-assets/dist/bd093b97.svg"
                                alt="bd093b97"
                            />
                            <Heading as="h1">Order Placed Successfully</Heading>
                            <Box
                                w={{ base: "", sm: "380px", md: "400px", lg: "552px" }}
                                h="54.8px"
                            >
                                <Image
                                    w="28px"
                                    h="28px"
                                    src="https://assets.pharmeasy.in/web-assets/dist/a1d0eff8.png"
                                    alt="a1d0eff8"
                                />
                                <Heading as="h1">Yay! You have saved ₹620.56</Heading>
                            </Box>
                        </Box>
                    </GridItem>

                    <GridItem
                        colSpan={{ base: 5, sm: 5, md: 2 }}
                        className={styles}
                        bg=""
                        m="auto"
                    >
                        <Button
                            w={{ md: "240px", lg: "360px" }}
                            colorScheme="teal.400"
                            className={styles.offerButton}
                        >
                            {" "}
                            <Link href="#">Go Back To Home</Link>
                        </Button>
                    </GridItem>
                </Grid>

                <SimpleGrid
                    maxW="700px"
                    h="auto"
                    m="auto"
                    mt={{base:"-60px",sm:"-60px",lg:"-200px"}}
                    columns={{ base: 1, sm: 2, md: 3 }}
                    spacing="40px"
                    className={styles.successDetails}
                >
                    <Box >
                        <Image
                            w="50px"
                            h="50px"
                            src="https://assets.pharmeasy.in/web-assets/dist/9ac2da37.svg?dim=0x72&dpr=1&q=100"
                            alt=""
                        />
                        <Heading as="h1">1 Lakh+ Products</Heading>
                        <Text>
                            We maintain strict quality controls on all our partner retailers,
                            so that you always get standard quality products.
                        </Text>
                    </Box>
                    <Box >
                        <Image
                            w="50px"
                            h="50px"
                            src="https://assets.pharmeasy.in/web-assets/dist/2f258fe0.svg?dim=0x72&dpr=1&q=100"
                            alt=""
                        />
                        <Heading as="h1">Secure Payment</Heading>
                        <Text>100% secure and trusted payment protection</Text>
                    </Box>
                    <Box >
                        <Image
                            w="50px"
                            h="50px"
                            src="https://assets.pharmeasy.in/web-assets/dist/256fe591.svg?dim=0x72&dpr=1&q=100"
                            alt=""
                        />
                        <Heading as="h1">Easy Return</Heading>
                        <Text>
                            We have a new and dynamic return window policy for medicines and
                            healthcare items. Refer FAQs section for more details.
                        </Text>
                    </Box>
                </SimpleGrid>

                <Grid
                    h='auto'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(6, 1fr)'
                    m="auto"
                    mt="20px"
                    gap={4}
                >
                    <GridItem rowSpan={2} colSpan={{ base: 6, sm: 6, md: 2, lg: 2 }}  >
                        <Image maxW="210px" h="416px" src="https://assets.pharmeasy.in/web-assets/dist/34a16ae8.jpg" alt="" />
                    </GridItem>
                    <GridItem colSpan={4} className={styles.appMobile}>
                        <Heading as="h1">Download the App for Free</Heading>
                        <Box>
                            <button>
                                <Image w="25px" h="25px" src="https://assets.pharmeasy.in/web-assets/dist/3380aedc.png" alt="" />
                                <Heading as="p">Google Play</Heading>
                            </button>
                            <button>
                                <Image w="25px" h="25px" src="https://assets.pharmeasy.in/web-assets/dist/9bf5c576.png" alt="" />
                                <Heading as="p">App Store</Heading>
                            </button>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    );
}
