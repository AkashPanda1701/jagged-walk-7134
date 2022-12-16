import { Box, Heading, Text } from "@chakra-ui/layout"

export const Footer=()=>{
    return (
      <>
        <Box className="footerdiv">
          <Box className="footercategories">
            <Box>
              <Heading as="h6" size="xs">
                Company
              </Heading>
              <Text>About Us</Text>
              <Text>Careers</Text>
              <Text>Blog</Text>
              <Text>Parter with PharmEasy</Text>
              <Text>Sell at PharmEasy</Text>
            </Box>
            <Box className="ourservices">
              <Heading>Our Services</Heading>
              <Text>Order Medicine</Text>
              <Text>Order Medicine</Text>
              <Text>Order Medicine</Text>
              <Text>Order Medicine</Text>
            </Box>
          </Box>
        </Box>
      </>
    );
}