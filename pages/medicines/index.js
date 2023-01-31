import {
  Box,
  ListItem,
  UnorderedList,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  OrderedList,
  Button,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import Footer from "../../components/Mainfooter/footer";
import Adslider from "../../components/Home/adSlider";
import { SearchBox } from "../../components/Medicines/Searchbox";
import Navbar from "../../components/Navbar/Navbar";
import styles from '../medicines/medicines.module.css'


export default function Medicines(){

    const [value, setValue] = useState("");
    const [boxval, setBoxval] = useState(true);
    const [data, setData] = useState([]);
    const getData = (query) => {
      fetch(`https://serverpharmadbjson.onrender.com/medicines?q=${query}`)
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          console.log(res);
          setValue("");
          setBoxval(true);
        })
        .catch((err) => {
          console.log(err);
        });
    };
     const handleChange = (e) => {
       const { value } = e.target;
       setValue(value);
       setBoxval(true);
       console.log(value);
     };
    return (
      <>
      <Navbar/>
      <Box h={10} ></Box>
        <Box className={styles.medicinebox}>
          {/* --------breadcrumb------------- */}
          <Breadcrumb
            style={{ fontSize: "14px" }}
            spacing="8px"
            separator={">"}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="/medicines">
                Order Medicines Online
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          {/* -----------heading---- */}
          <Heading
            className={styles.olheading}
            fontWeight={600}
            size={{ base: "sm", sm: "sm", md: "lg", lg: "lg" }}
          >
            Order Medicines Online
          </Heading>

          {/* -------------search box------- */}
          <SearchBox
            handleChange={handleChange}
            value={value}
            onClick={() => getData(value)}
          />
          {/* <Box ml={14}>{value}</Box> */}
          <Box>
            {data.map((ele) => (
              <Flex key={ele.id} padding={10} alignItems={"center"} gap={10}>
                <Image alt=''
                  src={ele.img}
                  width={{ base: "10", sm: "20", md: "30", lg: "40" }}
                />
                <Link to={`/medicines/${ele.id}`}>{ele.title}</Link>
              </Flex>
            ))}
          </Box>

          {/* ---------all offers========== */}
          <Heading mt={8} as={"h6"} size={"md"} color="gray">
            All Offers
          </Heading>
          <Box mt={8}>
            <Flex padding={2} gap={5}>
              <Box borderRadius={10} border={"1px solid lightgrey"} padding={7}>
                <Flex gap={4}>
                  <Image alt=''
                    src="https://cms-contents.pharmeasy.in/offer/702efbbe2e6-au.jpg?w=64&q=75"
                    width={20}
                  />
                  <Box
                    display={{ base: "none", sm: "none", lg: "block" }}
                    fontSize={"sm"}
                  >
                    Flat Rs.150 Off on AU Bank{" "}
                    <Flex color={"#8897a2"}>
                      Code: <Box color={"black"}>PEAUBANK</Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
              <Box borderRadius={10} border={"1px solid lightgrey"} padding={7}>
                <Flex gap={4}>
                  <Image alt=''
                    src="https://cms-contents.pharmeasy.in/offer/61f3dfe3705-OlaMoney.png?w=64&q=75"
                    width={20}
                  />
                  <Box
                    display={{ base: "none", sm: "none", lg: "block" }}
                    fontSize={"sm"}
                  >
                    Get minimum ₹50 and up to ₹1000 cashback{" "}
                    <Flex color={"#8897a2"}>
                      Code: <Box color={"black"}> PEOLAM</Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
              <Box borderRadius={10} border={"1px solid lightgrey"} padding={7}>
                <Flex gap={4}>
                  <Image alt=''
                    src="https://cms-contents.pharmeasy.in/offer/62e13eb58a2-2.jpg?w=64&q=75"
                    width={20}
                  />
                  <Box
                    display={{ base: "none", sm: "none", lg: "block" }}
                    fontSize={"sm"}
                  >
                    Healthy Heart Sale is LIVE!{" "}
                    <Flex color={"#8897a2"}>
                      Code: <Box color={"black"}>HEAL5</Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
          {/* Adds slider---------------- */}
          <Adslider />
          {/* ---------------all description------- */}
          <Heading mt={10} as={"h6"} size={"sm"}>
            Indias No. 1 Medicine Delivery App
          </Heading>
          <Box mt={7} color={"#8897a2"} fontSize={15}>
            The concept of medicine home delivery has been taken to a new level
            by the PharmEasy online medicine delivery app. You can use the
            PharmEasy online medicine delivery app to browse through an
            extensive range of medicines. Each medicine undergoes a 3-step
            quality check. quickly.
          </Box>
          <Box color={"#8897a2"} fontSize={15}>
            Whatever be your medicine requirement, you are sure to locate it in
            this online pharmacy. All you have to do then is to add it to your
            cart and place the order and get your order delivered India’s
            beloved online medicine delivery app makes sure that you get your
            medicines in record time because we know how vital time is in any
            treatment. Sit back, and we will have all your medical necessities
            delivered to your doorstep.
          </Box>
          <Heading mt={10} as={"h6"} size={"sm"}>
            Online Medicine - Your Online Medical Store in India
          </Heading>
          <Box mt={7} color={"#8897a2"} fontSize={15}>
            Tired of walking all the way to your local medicine store? Worried
            that going out is risky during the current times? Order medicines
            online at PharmEasy, India’s trusted online medicine app. With more
            than 1 lakh medicines always in stock, you are sure to find what you
            are looking for, and that too at affordable prices!
          </Box>
          <Box color={"#8897a2"} fontSize={15}>
            Besides, extremely stringent sanitization norms are followed at your
            favourite online medical store. PharmEasy takes the safety of
            customers and employees very seriously.
          </Box>
          <Heading mt={10} as={"h6"} size={"sm"}>
            Reasons To Buy Medicine Online From PharmEasy
          </Heading>
          <Box mt={6} color={"#8897a2"} fontSize={15}>
            Here are a few reasons that will convince you to give online
            medicine order through the PharmEasy app -
          </Box>
          <Box color={"#8897a2"} fontSize={15}>
            <UnorderedList>
              <ListItem>1,200+ cities and 20,000+ Pin codes served</ListItem>
              <ListItem>Express Delivery</ListItem>
              <ListItem>1 Lakh+ medicines available</ListItem>
              <ListItem> Cash on delivery option available</ListItem>
              <ListItem>Attractive offers</ListItem>
              <ListItem> Cashback option through wallet</ListItem>
              <ListItem>Stringent quality checks</ListItem>
              <ListItem>
                Garnered the trust of more than 10 million users who have made
                an online purchase through PharmEasy
              </ListItem>
            </UnorderedList>
          </Box>
          <Heading mt={10} as={"h6"} size={"md"}>
            Order Medicines Online
          </Heading>
          <Heading mt={7} as={"h6"} size={"sm"}>
            Get 3-Step Quality-checked Medicines
          </Heading>
          <Box mt={7} color={"#8897a2"} fontSize={15}>
            PharmEasy is a one-stop-shop for all your healthcare needs. We have
            1L+ products for you to choose from. Buy medicines online at
            affordable prices from the comforts of your home in just a few
            clicks and get them delivered at your doorstep.
          </Box>
          <Box color={"#8897a2"} fontSize={15}>
            The entire process of shopping for medicines is hassle-free and
            convenient. All you have to do is search for the products you need
            on our website or app, add to cart and then proceed with the
            checkout process.
          </Box>
          <Box color={"#8897a2"} fontSize={15}>
            With our scheduled refill reminder, you don’t even need to keep
            track of your refill dates. What’s more, we have great offers, with
            added discounts and massive e-wallet cashbacks on purchasing
            medicines!
          </Box>
          <Box borderRadius={20} mt={5} p={5} border='1px solid lightgrey' color={"#8897a2"}>
            <Accordion allowMultiple>
              <AccordionItem mt={5}>
                <h2>
                  <AccordionButton color={"black"}>
                    <Box flex="1" textAlign="left">
                      Is buying medicines online Safe ?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Absolutely! All our medicines undergo a three-step quality
                  check process to ensure they are of high quality. We source
                  our products only from licensed retail pharmacies. PharmEasy
                  is used by 5M+ users across 1.2k+ cities in India incl.
                  Bangalore, Delhi, Mumbai, Kolkata, Hyderabad, Gurgaon, Noida,
                  Pune, etc. for purchasing medicines online.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowMultiple>
              <AccordionItem mt={5}>
                <h2>
                  <AccordionButton color={"black"}>
                    <Box flex="1" textAlign="left">
                      Why choose us for your medicine home delivery ?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <UnorderedList>
                    <ListItem>Used by 5M+ customers</ListItem>
                    <ListItem>Delivery in 24-48* hours</ListItem>
                    <ListItem>
                      Over 1L+ meds and healthcare products for you to select
                      from
                    </ListItem>
                    <ListItem> 3-step quality-checked products</ListItem>
                    <ListItem>
                      PharmEasy Plus subscription with exclusive benefits
                    </ListItem>
                    <ListItem>
                      We deliver in 22k+ pin codes across 1.2k+ cities
                    </ListItem>
                    <ListItem>Scheduled refill reminders</ListItem>
                    <ListItem>Attractive deals and e-wallet cashbacks</ListItem>
                    <ListItem>
                      A highly capable team of experienced pharmacists and
                      healthcare professionals
                    </ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowMultiple>
              <AccordionItem mt={5}>
                <h2>
                  <AccordionButton color={"black"}>
                    <Box flex="1" textAlign="left">
                      How do i order Medicines from Pharm Easy
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <OrderedList>
                    <ListItem>
                      Visit our website or open our online medicine app on your
                      phone.
                    </ListItem>
                    <ListItem>
                      Upload a valid doctor’s prescription and search from our
                      list of medicines.
                    </ListItem>
                    <ListItem>
                      Enter the address where you want your package to be
                      delivered.
                    </ListItem>
                    <ListItem>
                      Our partner retailer will call you to confirm the order.
                    </ListItem>
                    <ListItem>
                      The medicine is packed by the pharmacist.
                    </ListItem>

                    <ListItem>
                      Our delivery person will deliver the package at your
                      doorstep.
                    </ListItem>
                  </OrderedList>
                  You can use our app or visit the website to track your
                  package.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Accordion allowMultiple>
              <AccordionItem mt={5}>
                <h2>
                  <AccordionButton color={"black"}>
                    <Box flex="1" textAlign="left">
                      When will PharmEasy will deliver my Medicines
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Once you purchase your medicines online with us, you will get
                  it within 24-48* hours. *T&C: The delivery time might vary
                  depending on the delivery location.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowMultiple>
              <AccordionItem mt={5}>
                <h2>
                  <AccordionButton color={"black"}>
                    <Box flex="1" textAlign="left">
                      Do I get Discounts/Cashhbacks whike ordering medicines
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Yes, you can get huge discounts and massive e-wallet cashback
                  on purchasing medicines.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowMultiple>
              <AccordionItem mt={5}>
                <h2>
                  <AccordionButton color={"black"}>
                    <Box flex="1" textAlign="left">
                      If Medicine that want to order is curently unavailable
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  You can log in from the PharmEasy app and click on the ‘Notify
                  Me’ option for that particular product or medicine. You will
                  be notified as soon as the product is back in stock.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowMultiple>
              <AccordionItem mt={5}>
                <h2>
                  <AccordionButton color={"black"}>
                    <Box flex="1" textAlign="left">
                      When will I recieve my order
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  our order will be delivered as per the Estimated Delivery
                  Date committed at the time of order placement. You can check
                  this by selecting your order from the My Orders section.
                  Keep a lookout for our order delivery updates. Note: Due to
                  the current COVID-19 crisis, the delivery date may not be as
                  per usual timelines and we request you to bear with us. But
                  rest assured, we are working round the clock to deliver your
                  order as soon as possible.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowMultiple>
              <AccordionItem mt={5}>
                <h2>
                  <AccordionButton color={"black"}>
                    <Box flex="1" textAlign="left">
                      How can I modify my Order
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Unfortunately, once your order is confirmed, it cannot be
                  modified. You can place a fresh order.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Flex mt={10} gap={20}>
            <Image alt=''
              width={200}
              src="https://assets.pharmeasy.in/web-assets/_next/icons/footerMobile.jpg"
            />
            <Box>
              <Text>Download the App for Free</Text>
              <Flex mt={8} gap={6}>
                <Button
                  background={"grey"}
                  color={"white"}
                  _hover={{ background: "darkgrey" }}
                  fontWeight={400}
                >
                  Download App for Free
                </Button>
                <Button
                  background={"grey"}
                  color={"white"}
                  _hover={{ background: "darkgrey" }}
                  fontWeight={400}
                >
                  App Store
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Footer/>
      </>
    );
}