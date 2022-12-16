import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Heading,
    Image,
    Input,
    Radio,
    RadioGroup,
    Stack,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import styles from "../../pages/carts/Css/cart.module.css";
import stylesC from "../../pages/carts/Css/apply-coupons.module.css";

export default function ApplyCoupons() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    const couponsArr = [
        {
            id: 1,
            images:
                "https://cms-contents.pharmeasy.in/offer/ac04bc614ab-Offer_YES.jpg",
            title: "Flat 27% OFF + up to Rs.5000 surprise cashback",
            desc: "Coupon applicable on first 3 medicine orders above Rs. 1299. Hurry! Order Now.",
            Code: "VIBES27",
        },
        {
            id: 2,
            images:
                "https://cms-contents.pharmeasy.in/offer/e48df3b2675-Offer_YES.jpg",
            title: "Flat 25% OFF + FREE Delivery on 3 medicine orders",
            desc: "Coupon applicable on first 3 medicine orders above Rs. 999. Hurry! Order Now.",
            Code: "STAR25",
        },
        {
            id: 3,
            images:
                "https://cms-contents.pharmeasy.in/offer/e11270f3e3f-paytmcashbackoptimized.png",
            title: "Get 3000 cashback points",
            desc: "Valid once per user on transactions above ₹599.",
            Code: "PTMDEC",
        },
        {
            id: 4,
            images: "https://cms-contents.pharmeasy.in/offer/702efbbe2e6-au.jpg",
            title: "Flat Rs.150 Off on AU Bank debit and credit card",
            desc: "Valid once per user on transactions above Rs.1200",
            Code: "AUBANKDEC",
        },
        {
            id: 5,
            images: "https://cms-contents.pharmeasy.in/offer/23881b129f7-LOGO.jpg",
            title: "FLAT 15% OFF on medicines + up to Rs.250 cashback",
            desc: "Get FLAT 15% OFF on medicines + up to Rs.500 cashback via CRED Pay UPI.",
            Code: "FLAT25",
        },
    ];

    return (
        <>
            <Button
                ref={btnRef}
                onClick={onOpen}
                w={{ base: "", sm: "", md: "280px", lg: "420px" }}
                colorScheme="white"
                bg="white"
            >
                <Text color="BLACK">Apply Coupons </Text>
            </Button>

            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
                size={"sm"}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader className={styles.addressHead}>
                        <Heading as="h1"> Apply Coupons</Heading>
                    </DrawerHeader>

                    <DrawerBody className={styles.addressContent}>
                        {couponsArr &&
                            couponsArr.map((coupon, index) => (
                                <Box
                                    key={index}
                                    maxW="373px"
                                    h="204px"
                                    className={stylesC.couponsLists}
                                >
                                    <Box h="153px">
                                        <Box>
                                            <Image maxW="60px" h="60px" src={coupon.images} alt="" />
                                        </Box>
                                        <Box maxW="261px" className={stylesC.couponHeading}>
                                            <Heading as="h1"> {coupon.title}</Heading>
                                            <Heading as="h1"> {coupon.desc}</Heading>
                                        </Box>
                                    </Box>
                                    <Box h="51px">
                                        <Heading as="h1">
                                            {" "}
                                            <span>Code:</span> {coupon.Code}
                                        </Heading>
                                        <Button colorScheme="white" bg="white">
                                            <Text color="teal">APPLY </Text>
                                        </Button>
                                    </Box>
                                </Box>
                            ))}
                    </DrawerBody>

                    <DrawerFooter>
                        <Button
                            colorScheme="red"
                            variant="outline"
                            mr={3}
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                        <Button colorScheme="green" variant="outline">
                            Save and Continue
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}
