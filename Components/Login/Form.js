import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
function Form({ Number }) {
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    number: Number,
  });

  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!formData.email.includes("@")) {
      setError(
        "Your email is not valid please check you email"
      );
      return;
    } else if (
      formData.password == "" &&
      formData.fname == ""
    ) {
      setError("Please fill the form correctly");
      return;
    }
   
  };
  return (
    <Flex
      minH={"100vh"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={8}
        mx={"auto"}
        maxW={"lg"}
        py={12}
        px={6}
      >
        <Stack>
          <Heading
            color="#10847E"
            fontSize={"4xl"}
            textAlign={"center"}
          >
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel color="#10847E">
                    First Name
                  </FormLabel>
                  <Input
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        fname: e.target.value,
                      })
                    }
                    value={formData.fname}
                    _focus={{
                      border: "1px solid #10847E",
                    }}
                    type="text"
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl color="#10847E" id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        lname: e.target.value,
                      })
                    }
                    value={formData.lname}
                    _focus={{
                      border: "1px solid #10847E",
                    }}
                    type="text"
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel color="#10847E">
                Email address
              </FormLabel>
              <Input
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                value={formData.email}
                _focus={{
                  border: "1px solid #10847E",
                }}
                type="email"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel color="#10847E">
                Password
              </FormLabel>
              <InputGroup>
                <Input
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    })
                  }
                  value={formData.password}
                  _focus={{
                    border: "1px solid #10847E",
                  }}
                  type={showPassword ? "text" : "password"}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    color={"#10847E"}
                    onClick={() =>
                      setShowPassword(
                        (showPassword) => !showPassword
                      )
                    }
                  >
                    {showPassword ? (
                      <ViewIcon />
                    ) : (
                      <ViewOffIcon />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg="#10847E"
                color={"white"}
                _hover={{
                  bg: "white",
                  color: "#10847E",
                  border: "1px solid #10847E",
                }}
              >
                Sign up
              </Button>
            </Stack>
            {!!error ? (
              <Text textAlign={"center"} color={"red"}>
                {error}
              </Text>
            ) : null}
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Form;

 
           