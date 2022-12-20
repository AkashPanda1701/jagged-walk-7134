import { Box, Heading } from "@chakra-ui/react";
import styles from "../../pages/carts/Css/cart.module.css";
import stylesP from "../../pages/carts/Css/payment-method.module.css"

export default function BillSummary({ data,  MRP }) {



    return (
        <Box h="auto" className={styles.billSummary}>
            <Heading as="h1">Bill Summary</Heading>
            <Box className={stylesP.paymentMethodCss}>
                <Box mt="20px">
                    <Heading as="h1">Cart Value</Heading>
                    <Heading as="h1" className={styles.charges}>
                        {data.length > 0 ? (
                            <>
                                <span className={styles.crossSaving}> ₹ {data.reduce((a, b) => a + b.productId.mrp * b.quantity, 0).toFixed(2)}</span>
                                <span> ₹ {data.reduce((a, b) => a + b.productId.price * b.quantity, 0).toFixed(2)}</span>
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
                    {data.length > 0 ? ` ₹ ${(data.reduce((a, b) => a + b.productId.price * b.quantity, 0)+100).toFixed(2)}` : 0}
                </Heading>
            </Box>
        </Box>
    );
}
