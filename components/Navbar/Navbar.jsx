import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Img

} from "@chakra-ui/react";

import Login from "../Login/Login";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import { FaRegUser } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import Link from "next/link"; 


import {
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart } from "../../redux/cart/action";
import { setSession } from "../../redux/auth/action";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.cart)
  const authState = useSelector(state => state.auth)
  
  
  useEffect(() => {
  
    dispatch(setSession());
  }, [dispatch]);

  useEffect(() => {
      if(authState.user){

          dispatch(getCart(authState.user.id));
      }
  }, [dispatch, authState.user]);
  return (
    <>
      <Box>
        <Flex
          //   color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 2 }}
          //   borderBottom={2}
          borderStyle={"solid"}
          borderBottom={"1px solid lightgrey"}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex
            ml={{ base: "0px", md: "40px" }}
            flex={{ base: 1 }}
            justify={{ base: "center", md: "start" }}
            gap={3}
          >
            <Text
              textAlign={useBreakpointValue({
                base: "center",
                md: "left",
              })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              <Link href="/">
                <Img
                  h="58px"
                  w="165px"
                  src="https://user-images.githubusercontent.com/97351159/208255522-22126415-4bf1-422b-9c54-d637ae7ecf91.png"
                />
              </Link>
            </Text>

            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            ml={10}
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={{ base: 0, md: 6 }}
            pr={{ base: "0px", md: "60px" }}
          >
            <Box display="flex" gap={{ base: 0, md: 3 }}>
              <Text mt="5px">
                <FaRegUser />
                
              </Text>
              <Login />
            </Box>
            <Link href='/carts'>
            <Box display="flex" gap={2}>
              <Text mt="5px">
                <BsCart2 />
              </Text>
              <Button
                //   leftIcon={}
                variant={"link"}
                display={{ md: "inline-flex" }}
                fontSize={{ base: 0, md: "md" }}
                fontWeight={500}
                href={"/carts"}
                color="black"
                >
                Cart
              </Button>
              <Flex  bg='red' w={'25px'} h="25px" borderRadius='50%' color='white' position={'absolute'}   alignItems='center' justifyContent='center' mr={'-20px'} mt={'-20px'}>
      {data?.length}
           </Flex>
            </Box>
                </Link>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
      <Box
        w="100%"
        borderBottom="1px solid lightgrey"
        display={{ base: "none", md: "flex" }}
      >
        <Flex
          //   ml={{ base: "5px", sm: "180px", lg: "380px" }}
          className="categoriesnav"
        >
          <Heading fontWeight={500} size="xs">
            <Link href="/medicines">Medicines</Link>
          </Heading>
          <Heading fontWeight={500} size="xs">
            <Link  href="/labtests">Lab Tests</Link>
          </Heading>
          <Heading fontWeight={500} size="xs">
            <Menu>
              <MenuButton
                mt="-5px"
                as={Button}
                variant="link"
                fontWeight={500}
                color="black"
                rightIcon={<ChevronDownIcon />}
              >
                Health care
              </MenuButton>
              <MenuList ml="-300px">
                <Box p={10} w="850px" m="auto">
                  <Tabs>
                    <TabList>
                      <Link href='/products?category=homecare'>
                      <Tab>Home care</Tab>
                      </Link>
                      <Link href='/products?category=skincare'>
                      <Tab>Skin care</Tab>
                      </Link>
                      <Link href='/products?category=personalcare'>
                      <Tab>Personal care</Tab>
                      </Link>
                      <Link href='/products?category=healthcare'>
                      <Tab>Health care</Tab>
                      </Link>
                      <Link href='/products?category=food&drinks'>
                      <Tab>Health Food & Drinks</Tab>
                      </Link>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        <Link href="/products?category=homecare">
                          <Box mt={4}>Dettol Liquid Disinfectant</Box>
                        </Link>
                        <Link href="/products?category=homecare">
                          <Box mt={4}>Glade Touch & Fresh Lemon Refill </Box>
                        </Link>
                        <Link href="/products?category=homecare">
                          <Box mt={4}>Nimwash Vegetable & Fruit Wash Spray </Box>
                        </Link>
                      </TabPanel>
                      <TabPanel>
                        <Link href="/products?category=skincare">
                          <Box mt={4}>
                            Fair And Lovely Advance Multivitamin Cream 25 Gm
                          </Box>
                        </Link>
                        <Link href="/products?category=skincare">
                          <Box mt={4}>
                            A2lite Skin Lightening And Brightening Cream - 20 Gm
                          </Box>
                        </Link>
                        <Link href="/products?category=skincare">
                          <Box mt={4}>Episoft Cleansing Lotion 125ml</Box>
                        </Link>
                      </TabPanel>
                      <TabPanel>
                      <Link href="/products?category=personalcare">
                          <Box mt={4}>Sensodent K Paste 100gm</Box>
                        </Link> 
                        <Link href="/products?category=personalcare">
                          <Box mt={4}>Senquel F Tooth Paste 100gm</Box>
                        </Link>
                        <Link href="/products?category=personalcare">
                          <Box mt={4}>
                            Man code Beard Wash & Conditioner, 200ml
                          </Box>
                        </Link>
                      </TabPanel>
                      <TabPanel>
                        <Link href="/products?category=healthcare">
                          <Box mt={4}>
                            Accu-Chek Instant S Glucometer With 10 Strips
                          </Box>
                        </Link>
                        <Link href="/products?category=healthcare">
                          <Box mt={4}>Beato Blood Glucose Test Strip</Box>
                        </Link>
                        <Link href="/products?category=healthcare">
                          <Box mt={4}>Pharmeasy Digital Thermometer</Box>
                        </Link>
                      </TabPanel>
                      <TabPanel>
                        <Link href="/products?category=Health-Food-Drinks">
                          <Box mt={4}>Everherb Karela Jamun Juice</Box>
                        </Link>
                        <Link href="/products?category=Health-Food-Drinks">
                          <Box mt={4}>
                            B-Protin Chocolate Nutrition Supplement Bottle
                          </Box>
                        </Link>
                        <Link href="/products?category=Health-Food-Drinks">
                          <Box mt={4}>Protinex Vanilla Nutrition Drink</Box>
                        </Link>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </Box>
              </MenuList>
            </Menu>
          </Heading>
          <Heading fontWeight={500} size="xs">
            <Link href="/">Health Blogs</Link>
          </Heading>
          <Heading fontWeight={500} size="xs">
            <Link href="/offers">Offers</Link>
          </Heading>
          <Heading fontWeight={500} size="xs">
            <Link href="/products?category=all">Value Store</Link>
          </Heading>
        </Flex>
      </Box>
    </>
  );
}

const DesktopNav = () => {
  return (
    <>
      <Stack direction={"row"} spacing={4}>
        <Box
          ml={-7}
          mt="10px"
          bg="#8897a2"
          h="35px"
          w="1px"
        ></Box>
        <Box pt="15px" fontSize="14px" display="flex">
          <Img
            mt="3px"
            h="18px"
            src="https://assets.pharmeasy.in/apothecary/images/ic_express%20delivery.svg?dim=16x0"
          ></Img>
          Express Delivery
        </Box>
      </Stack>
      <Box>{/* <DesktopSubNav /> */}</Box>
    </>
  );
};

// const DesktopSubNav = ({ label, href, subLabel }) => {
//   return (
//     <Link
//       href={href}
//       role={"group"}
//       display={"block"}
//       p={2}
//       rounded={"md"}
//       _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
//     >
//       <Stack direction={"row"} align={"center"}>
//         <Box>
//           <Text
//             transition={"all .3s ease"}
//             _groupHover={{ color: "pink.400" }}
//             fontWeight={500}
//           >
//             Something
//           </Text>
//           <Text fontSize={"sm"}>{subLabel}</Text>
//         </Box>
//         <Flex
//           transition={"all .3s ease"}
//           transform={"translateX(-10px)"}
//           opacity={0}
//           _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
//           justify={"flex-end"}
//           align={"center"}
//           flex={1}
//         >
//           <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
//         </Flex>
//       </Stack>
//     </Link>
//   );
// };

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ? href : "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse
        in={isOpen}
        animateOpacity
        style={{ marginTop: "0!important" }}
      >
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue(
            "gray.200",
            "gray.700"
          )}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link
                key={child.label}
                py={2}
                href={child.href}
              >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Medicines",
    href: "/medicines",
  },
  {
    label: "Lab Test",
    href: "/medicines",
  },
  {
    label: "Healthcare",
    children: [
      {
        label: "Personal care",
        href: "/products?category=personalcare",
      },
      {
        label: "Health care",
        href: "/procucts?category=healthcare",
      },
      {
        label: "Home care",
        href: "/procucts?category=homecare",
      },
      {
        label: "Skin care",
        href: "/procucts?category=skincare",
      },
      {
        label: "Health Food & Drinks",
        href: "/procucts?category=Health-Food-Drinks",
      },
    ],
  },

  {
    label: "Health Blogs",
    href: "/procucts?category=healthcare",
  },
  {
    label: "Value Store",
    href: "/products?category=all",
  },
];