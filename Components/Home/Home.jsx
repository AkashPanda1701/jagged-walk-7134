import { Box,Heading,InputGroup,InputLeftAddon,InputRightAddon,Button,Input } from "@chakra-ui/react"
import {BiSearchAlt} from "react-icons/bi"


export const Homecomp=()=>{
    return (
      <>
        <Box h="50px"></Box>
        <Box>
          <Heading
            margin={"auto"}
            width={700}
            as="h3"
            fontSize="25px"
            fontWeight={600}
          >
            What are you looking for ?
          </Heading>
          {/* // search input--------------------------- */}
          <InputGroup
            pt={10}
            border={"0px solid grey"}
            margin={"auto"}
            width={{ base: "200px", sm: "450px", lg: "700px" }}
            // size="md"
          >
            <InputLeftAddon
              borderRadius="20px"
              fontSize={{ base: "xsm", sm: "xsm", md: "md", lg: "mg" }}
              className="inputgrp"
              children={<BiSearchAlt />}
              background="white"
            />
            <Input
              className="inputgrp"
              fontSize={{ base: "xsm", sm: "xsm", md: "md", lg: "mg" }}
              placeholder="Search Medicines/Healthcare products"
            />
            <InputRightAddon
              borderRadius="20px"
              background={"white"}
            //   onClick={() => getData(value)}
              fontSize={"md"}
              className="inputgrp"
              children={
                <Button
                  borderRadius={20}
                  fontSize={{ base: "10px", sm: "14px", lg: "16px" }}
                  color={"white"}
                  _hover={{ background: "#10847e" }}
                  background={"#10847e"}
                  width={{ base: "50px", sm: "70px", lg: "100px" }}
                >
                  Search
                </Button>
              }
            />
          </InputGroup>
        </Box>
      </>
    );
}