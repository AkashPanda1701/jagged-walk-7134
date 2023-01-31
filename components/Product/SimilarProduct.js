import { Box, Button, Center, Flex, Image, Img, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
// import  Link  from "react-router-dom";

function SimilarProduct({ prod }) {
  return (
    <Box
      display="flex"
      justify="center"
      align="center"
      height={"420px"}
      position="relative"
      marginTop="20px"
      color="#4f585e"
    >
      <Link href={`/products/${prod._id}`}>
        <Box
          w="100%"
          h="70%"
          position="relative"
          overflow="hidden"
          borderRadius="lg"
          p="5px"
          textAlign="left"
          transition="all 0.5s ease"
        >
          <Center
            className="image"
            h="48%"
            p="20px"
            borderRadius="lg"
            border="1.5px solid #e7e6e6"
          >
            <Img h="100%" src={prod.images[0]} w='100%' />
          </Center>
          <Text
            istruncated="true"
            fontSize="15px"
            fontWeight="700"
            noOfLines={2}
            height="48px"
          >
            {prod.title.slice(0, 15)}...
          </Text>
          <Flex
            className="price"
            h="2rem"
            align="center"
            w="90%"
            justify="space-between"
          >
            <Text fontSize="11px" fontWeight="400" color="#8e9ca7">
              MRP{" "}
              <span style={{ textDecoration: "line-through" }}>
                ₹{prod.mrp}
              </span>{" "}
            </Text>
            <Flex
              align="center"
              justify="start"
              px="6px"
              color="white"
              fontSize="10px"
              fontWeight="600"
              height="50%"
              w="46%"
              bgImage='url("https://assets.pharmeasy.in/web-assets/dist/1602b4ce.svg")'
            >
              {prod.discount} OFF
            </Flex>
          </Flex>
          <Text fontSize="16px" fontWeight="700">
            ₹{prod.price}
          </Text>
          <Button
            my="10px"
            w="5.5rem"
            h="2.4rem"
            borderRadius="0.4rem"
            variant="white"
            border="1px solid #0f847e"
            color="#0f847e"
            transition="all 0.4s ease"
          >
            Add
          </Button>
        </Box>
      </Link>
    </Box>
  );
};

export default SimilarProduct;
