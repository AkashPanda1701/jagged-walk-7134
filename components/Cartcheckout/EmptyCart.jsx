import { Box, Heading, Image } from "@chakra-ui/react";
import { IoLocationSharp } from "react-icons/io5";
import styles from "../../pages/carts/Css/cart.module.css";
export default function EmptyCart() {
    return (
        <>
            <Box h="73px" className={styles.emptyCart2} >
                <Box>
                    <IoLocationSharp color="rgb(225, 95, 127)" />
                    <Heading as="h1">Deliver to :</Heading>
                    <Heading as="h1">Select Pincode</Heading>
                </Box>
            </Box>
            <Box h="290px" className={styles.emptyCart3}>
                <Box>
                    <Image src="https://assets.pharmeasy.in/web-assets/images/emptyCart.png" alt="" />
                    <Heading as="h1">Your cart is empty!</Heading>
                </Box>
            </Box>
        </>
    )
}