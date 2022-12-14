import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Heading
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import {FaRegUser} from 'react-icons/fa'
import {BsCart2} from "react-icons/bs"

import { Menu, MenuButton, MenuItem,MenuList } from "@chakra-ui/react";



export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Box>
        <Flex
          //   color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 2}}
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
            ml={{base:"0px",md:'40px'}}
            flex={{ base: 1 }}
            justify={{ base: "center", md: "start" }}
            gap={3}
          >
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              <Image
                h="58px"
                w="165px"
                src="https://user-images.githubusercontent.com/97351159/207395646-47cbbbb8-e5d4-45c0-a42b-d62ad5123a3f.png"
              />
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
            pr={{base:"0px",md:"60px"}}
          >
            <Box display="flex" gap={{ base: 0, md: 3 }}>
              <Text mt="5px">
                <FaRegUser />
              </Text>
              <Button
                //   leftIcon={}
                fontSize={{ base: 0, md: "md" }}
                fontWeight={500}
                variant={"link"}
                href={"/login"}
                color="black"
              >
                Hello, Login
              </Button>
            </Box>
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
            </Box>
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
            <Link>Lab Tests</Link>
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
                Actions
              </MenuButton>
              <MenuList>
                <Link>
                  <MenuItem>Health care</MenuItem>
                </Link>
                <Link>
                  <MenuItem>Personal care</MenuItem>
                </Link>
                <Link>
                  <MenuItem>Skin care</MenuItem>
                </Link>
                <Link>
                  <MenuItem>Home care</MenuItem>
                </Link>
                <Link>
                  <MenuItem>Health Food & Drinks</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Heading>
          <Heading fontWeight={500} size="xs">
            <Link>Health Blogs</Link>
          </Heading>
          <Heading fontWeight={500} size="xs">
            <Link>Offers</Link>
          </Heading>
          <Heading fontWeight={500} size="xs">
            <Link>Value Store</Link>
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
        <Box ml={-7} mt="10px" bg="#8897a2" h="35px" w="1px"></Box>
        <Box pt="15px" fontSize="14px" display="flex">
          <Image
            mt="3px"
            h="18px"
            src="https://assets.pharmeasy.in/apothecary/images/ic_express%20delivery.svg?dim=16x0"
          ></Image>
          Express Delivery
        </Box>
      </Stack>
      <Box>
        {/* <DesktopSubNav /> */}
      </Box>
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
        href={href ?? "#"}
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

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
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
    href: "/labtest",
  },
  {
    label: "Healthcare",
    children: [
      {
        label: "Personal care",
        href: "/products/personalcare",
      },
      {
        label: "Health care",
        href: "/procucts/healthcare",
      },
      {
        label: "Home care",
        href: "/procucts/homecare",
      },
      {
        label: "Skin care",
        href: "/procucts/skincare",
      },
      {
        label: "Health Food & Drinks",
        href: "/procucts/food&drinks",
      },
    ],
  },

  {
    label: "Health Blogs",
    href: "#",
  },
  {
    label: "Value Store",
    href: "#",
  },
];
