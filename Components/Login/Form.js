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
  Spinner,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import {AUTH_REQ_SUCCESS} from '../../redux/auth/type'
import { useDispatch } from "react-redux";
function Form({ Number, onClose }) {
  const toast = useToast();
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    number: Number,
  });
  const [loading, setLoading] = useState(false);

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
    console.log(formData);
    userPost();
    setTimeout(() => {
      dispatch({type :AUTH_REQ_SUCCESS, payload: 'success'})
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
  })
    }, 2000);
  };
  const userPost = () => {
    setLoading(true);
    axios
      .post(
        `https://jsonplaceholder.typicode.com/todos`,
        formData
      )
      .then(function (response) {
        onClose();
        setLoading(false);
       
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Flex
      minH={"100vh"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      >
      {!loading ? (
        <Box>
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
              bg={useColorModeValue("gray.50", "gray.800")}
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
                    <FormControl
                      color="#10847E"
                      id="lastName"
                    >
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
                      type={
                        showPassword ? "text" : "password"
                      }
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
        </Box>
      ) : (
        <Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
          >
            {" "}
            <br /> <br /> <br />
            <Spinner
              marginTop={"80px"}
              thickness="5px"
              speed="1s"
              emptyColor="gray.200"
              color="#10847E"
              size="xl"
            />
            <br /> <br /> <br />
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            marginTop={"30px"}
            color="#10847E"
            fontWeight={"bold"}
          >
            <Text>Wait...</Text>
          </Box>
          <br />
        </Box>
      )}
    </Flex>
  );
}

export default Form;
