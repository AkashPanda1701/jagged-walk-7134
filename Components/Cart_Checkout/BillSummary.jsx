
import { Box, Heading } from "@chakra-ui/react";
import styles from "../../pages/carts/Css/cart.module.css";
export default function BillSummary({ data, itemTotal, MRP }) {
    itemTotal = Number(itemTotal).toFixed(2);

    return (
        <Box h="212px" className={styles.billSummary}>
            <Heading as="h1">
                Bill Summary
            </Heading>
            <Box>
                <Heading as="h1">
                    Cart Value
                </Heading>
                <Heading as="h1">{data.length > 0 ? (
                    <>
                        <span className={styles.crossSaving}> ₹ {MRP}</span>
                        <span>  ₹ {itemTotal}</span>
                    </>


                ) : 0}</Heading>
            </Box>
            <Box>
                <Heading as="h1">
                    Amount to be paid
                </Heading>
                <Heading as="h1">{data.length > 0 ? ` ₹ ${itemTotal}` : 0}</Heading>
            </Box>
        </Box>
    )
}