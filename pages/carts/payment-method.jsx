import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Button,
  Input,
  Divider,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import BillSummary from "../../Components/Cart_Checkout/BillSummary";
import styles from "./Css/payment-method.module.css";

const getData = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (e) {
    return []
  }
};
export default function paymentMethod() {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [itemTotal, setItemTotal] = useState(0);
  const [saving, setSaving] = useState(0);
  const [MRP, setMRP] = useState(0);
  const [discount, setDiscount] = useState(0);

  let count = 1;
  useEffect(() => {
    getData(`http://localhost:2707/cart`).then((res) => {
      setData(res);
    });
    //finding total
    let Price = 0;
    let MRP = 0;
    for (let i = 0; i < data.length; i++) {
      Price += Number(((data[i].price) * (data[i].quantity)).toFixed(2));
      MRP += Number(((data[i].mrp) * (data[i].quantity)).toFixed(2));
    }
    let per = (((MRP - Price) / MRP) * 100).toFixed(2);
    setItemTotal(Price);
    setMRP(MRP.toFixed(2));
    setSaving((MRP - Price).toFixed(2));
    setDiscount(per);

    if (itemTotal === 0 || saving === 0 || MRP === 0 || discount === 0) {
      setFlag(!flag);
      count++;
    }
    // console.log('saving:', saving)
    // console.log("itemTotal:", itemTotal);
  }, [itemTotal, flag, saving, discount, MRP]);

  return (
    <Box maxW="1349px" className={styles.paymentMethod}>
      <Box maxW="1024px" m="auto">
        <Grid
          h="480px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap="80px"
        >
          <GridItem
            colSpan={{ base: 5, sm: 5, md: 3 }}
            className={styles.cartList}
          >
            <Box>
              <Text className={styles.offersHeading}>Offers</Text>
              <Accordion
                defaultIndex={[0]}
                allowMultiple
                className={styles.offers}
              >
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        className={styles.offerContent}
                      >
                        <Box>
                          <Image
                            w="40px"
                            h="12.66px"
                            src="https://cdn.pharmeasy.in/payments/wallet_icons/paytm.png"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading as="h1">Paytm Wallet</Heading>
                          <Text w="450px">
                            Up to 3000 cashback points on a minimum transaction
                            of Rs.599. Valid once per user.{" "}
                          </Text>
                        </Box>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Button
                      colorScheme="teal.400"
                      className={styles.offerButton}
                    >
                      {" "}
                      Link Wallet
                    </Button>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        className={styles.offerContent}
                      >
                        <Box>
                          <Image
                            w="40px"
                            h="40px"
                            src="https://cdn.pharmeasy.in/payments/amazonpay_new.png"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading as="h1">Amazon Pay</Heading>
                          <Text w="450px">
                            Up to Rs.600 cashback on a minimum transaction of
                            Rs.399. Valid once per user.
                          </Text>
                        </Box>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Button
                      colorScheme="teal.400"
                      className={styles.offerButton}
                    >
                      {" "}
                      Place Order & Pay
                    </Button>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        className={styles.offerContent}
                      >
                        <Box>
                          <Image
                            w="40px"
                            h="40px"
                            src="https://cdn.pharmeasy.in/payments/wallet_icons/mobikwik.png"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading as="h1">MobiKwik | ZIP (Pay Later)</Heading>
                          <Text w="450px">
                            Up to Rs.650 cashback on Mobikwik. Code: MBK650.
                            Valid only once & on orders above Rs.800.
                          </Text>
                        </Box>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Button
                      colorScheme="teal.400"
                      className={styles.offerButton}
                    >
                      {" "}
                      Place Order & Pay
                    </Button>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>

            <Box m="20px">
              <Text className={styles.offersHeading}>Other Options</Text>

              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        className={styles.offerContent}
                      >
                        <Box>
                          <Image
                            w="40px"
                            h="40px"
                            src="https://cdn.pharmeasy.in/payments/card.png"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading as="h1">Credit/Debit Card</Heading>
                          <Text w="450px">
                            Up to Rs.150 off on HSBC Cashback Credit Card. Valid
                            once per user &amp; on orders above Rs.10.
                          </Text>
                          <Divider />
                          <Text w="450px">
                            Up to Rs.300 off on RuPay Cards, Min. transaction of
                            Rs.1500. Applicable once per user
                          </Text>
                          <Divider />
                          <Text w="450px">
                            Up to Rs.300 off on RuPay Cards, Min. transaction of
                            Rs.1500. Applicable once per user
                          </Text>
                        </Box>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Button
                      colorScheme="teal.400"
                      className={styles.offerButton}
                    >
                      {" "}
                      Place Order
                    </Button>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        className={styles.offerContent}
                      >
                        <Box>
                          <Image
                            w="40px"
                            h="40px"
                            src="https://cdn.pharmeasy.in/payments/upi.png"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading as="h1">UPI</Heading>
                          <Box w="450px" className={styles.upi}>
                            <Image
                              w="40px"
                              h="40px"
                              src="https://consumer-app-images.pharmeasy.in/payment-icons/bhim.png"
                              alt="bhim"
                            />
                            <Image
                              w="40px"
                              h="40px"
                              src="https://consumer-app-images.pharmeasy.in/payment-icons/paytmUpi.png"
                              alt="paytm"
                            />
                            <Image
                              w="40px"
                              h="40px"
                              src="https://consumer-app-images.pharmeasy.in/payment-icons/phonepeWallet.png"
                              alt="phonewallet"
                            />
                            <Image
                              w="40px"
                              h="40px"
                              src="https://consumer-app-images.pharmeasy.in/payment-icons/amazonpay.png"
                              alt="amazonpay"
                            />
                            <Image
                              w="40px"
                              h="40px"
                              src="https://consumer-app-images.pharmeasy.in/payment-icons/gpay.png"
                              alt="gpay"
                            />
                          </Box>
                        </Box>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={4}
                    display="flex"
                    justifyContent="flex-start"
                  >
                    <Box mr="10px">
                      <Input w="200px" placeholder="e.g. 99xxxxxxxx @paytm" />
                    </Box>
                    <Box>
                      <Button
                        colorScheme="teal.400"
                        className={styles.offerButton}
                      >
                        Place Order & Pay
                      </Button>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        className={styles.offerContent}
                      >
                        <Box>
                          <Image
                            w="40px"
                            h="40px"
                            src="https://cdn.pharmeasy.in/payments/netbanking.png"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading as="h1">Net Banking</Heading>
                          <Text w="450px">We support over 100 banks</Text>
                        </Box>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Button
                      colorScheme="teal.400"
                      className={styles.offerButton}
                    >
                      {" "}
                      Place Order
                    </Button>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        className={styles.offerContent}
                      >
                        <Box>
                          <Image
                            w="40px"
                            h="40px"
                            src="https://consumer-app-images.pharmeasy.in/payment-icons/cod.png"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading as="h1">Cash on Delivery</Heading>
                          <Text>
                            ₹25 will be charged for Cash on Delivery. Switch to
                            online payments to save on ₹25.
                          </Text>
                        </Box>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Button
                      colorScheme="teal.400"
                      className={styles.offerButton}
                    >
                      {" "}
                      Place Order
                    </Button>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </GridItem>

          <GridItem
            colSpan={{ base: 5, sm: 5, md: 2 }}
            className={styles.cartTotal}
            bg=""
          >
            <Box>
              {/* Billing Summary */}
              {data.length > 0 ? (
                <BillSummary data={data} itemTotal={itemTotal} MRP={MRP} />
              ) : null}
              {/* Billing Summary */}

            </Box>
            {/* details of address */}
            <Box>
              <Heading>Others Details</Heading>
              <Box>
                <Text>Shipping Address</Text>
                <Box>
                  {/* deliverTo */}
                  <Text>YashWant Colony , Gm Motors</Text>
                  {/* streetName */}
                  <Text>nagpur road</Text>
                  {/* pinCode */}
                  <Text>442001</Text>
                  {/* MoobileNO */}
                  <Text>+91-{8668794790}</Text>
                  {/* addressType */}
                  <Text>Address Type:{"Home"}</Text>
                </Box>
              </Box>
              <Box>
                <Text>Patient Details</Text>
                <Text>Ashish Kohad</Text>
              </Box>
            </Box>
            {/* details of address */}
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
