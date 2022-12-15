import { Box, Heading } from "@chakra-ui/react";
import styles from "../../pages/carts/Css/cart.module.css";


export default function BillSummary({ data, itemTotal, MRP }) {

    itemTotal = Number(itemTotal).toFixed(2);
    const AmountToBePaid = (Number(itemTotal) + 75 + 25).toFixed(2);
    localStorage.setItem("totalPrice", AmountToBePaid);

    return (
        <Box h="auto" className={styles.billSummary}>
            <Heading as="h1">Bill Summary</Heading>
            <Box>
                <Box mt="20px">
                    <Heading as="h1">Cart Value</Heading>
                    <Heading as="h1" className={styles.charges}>
                        {data.length > 0 ? (
                            <>
                                <span className={styles.crossSaving}> ₹ {MRP}</span>
                                <span> ₹ {itemTotal}</span>
                            </>
                        ) : (
                            0
                        )}
                    </Heading>
                </Box>
                <Box>
                    <Heading as="h1">Delivery Charges</Heading>
                    <Heading as="h1" className={styles.charges}>
                        {data.length > 0 ? (
                            <>
                                <span className={styles.crossSaving}> ₹{50}.00</span>
                                <span className={styles.freeCharges}> {"FREE"}</span>
                            </>
                        ) : (
                            0
                        )}
                    </Heading>
                </Box>
                <Box>
                    <Heading as="h1">Packaging Charges</Heading>
                    <Heading as="h1" className={styles.charges}>
                        {data.length > 0 ? (
                            <>
                                <span className={styles.crossSaving}> { }</span>
                                <span> ₹ {"75.00"}</span>
                            </>
                        ) : (
                            0
                        )}
                    </Heading>
                </Box>
                <Box>
                    <Heading as="h1">Convenience Charges</Heading>
                    <Heading as="h1" className={styles.charges}>
                        {data.length > 0 ? (
                            <>
                                <span className={styles.crossSaving}> ₹{40}.00</span>
                                <span> ₹ {"25.00"}</span>
                            </>
                        ) : (
                            0
                        )}
                    </Heading>
                </Box>
            </Box>

            <Box>
                <Heading as="h1">Amount to be paid</Heading>
                <Heading as="h1">
                    {data.length > 0 ? ` ₹ ${AmountToBePaid}` : 0}
                </Heading>
            </Box>
        </Box>
    );
}
