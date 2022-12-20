import {
  Flex,
  Image ,
  Box,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";
import { BiSearchAlt } from "react-icons/bi";
import styles from '../../pages/medicines/medicines.module.css'


export const SearchBox = ({ handleChange, value, onClick }) => {
  return (
    <>
      <Flex mt={6}>
        <Box className={styles.searchCard}>
          <Flex gap={5} className="offers">
            <Box>
              <Flex className={styles.offersinnerdiv}>
                <Box>
                  <Image alt=''
                    src="https://assets.pharmeasy.in/web-assets/_next/icons/valuePropDisc.svg"
                    
                  />
                </Box>
                <Box color={"white"} fontSize={"xs"}>
                  Flat 15% Off
                </Box>
              </Flex>
            </Box>
            <Box>
              <Flex className={styles.offersinnerdiv}>
                <Box>
                  <Image alt='' src="https://assets.pharmeasy.in/web-assets/_next/icons/valuePropProd.svg" />
                </Box>
                <Box color={"white"} fontSize={"xs"}>
                  1 Lakh+ Products
                </Box>
              </Flex>
            </Box>
            <Box>
              <Flex className={styles.offersinnerdiv}>
                <Box>
                  <Image alt='' src="https://assets.pharmeasy.in/web-assets/_next/icons/valuePropReturn.svg" />
                </Box>
                <Box color={"white"} fontSize={"xs"}>
                  1 Lakh+ Products
                </Box>
              </Flex>
            </Box>
          </Flex>
          <Heading className={styles.heading} as={"h6"} size={"md"}>
            Search for Medicines / Healthcare Products
          </Heading>
          <InputGroup mt={2} size="lg">
            <InputLeftAddon
              fontSize={{ base: "xsm", sm: "xsm", md: "md", lg: "mg" }}
              className="inputgrp"
              // children="Select Pincode"
            />
            <Input
              value={value}
              onChange={handleChange}
              //   className={styles.inputgrp}
              variant="filled"
              fontSize={{ base: "xsm", sm: "xsm", md: "md", lg: "mg" }}
              placeholder="Search Medicines/Healthcare products"
            />
            <InputRightAddon
              onClick={onClick}
              fontSize={"md"}
              //   className={styles.inputgrp}
              // children={<BiSearchAlt />}
            />
          </InputGroup>
        </Box>
        <Box></Box>
      </Flex>
    </>
  );
};
