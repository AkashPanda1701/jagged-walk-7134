import React, { useEffect } from "react";
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
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/auth/action";
import { signIn } from "next-auth/react";



function Form({ Number, onClose }) {
  const toast = useToast();
  const dispatch = useDispatch()
  const authState = useSelector((state) => state.auth);
  console.log('authState.message: ', authState.message);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: Number,
  });
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");


   useEffect(() => {
    if (authState.message=="User created Successfully") {
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position : "top"
      });
      onClose();
      signIn("credentials", { phone:Number ,callbackUrl:"/" });
    }
  }, [authState.message]);


  const handleSubmit = () => {
    if (!formData.email.includes("@")) {
      setError(
        "Your email is not valid please check you email"
      );
      return;
    } else if (
      formData.password == "" &&
      formData.name == ""
    ) {
      setError("Please fill the form correctly");
      return;
    }
    // console.log(formData);
    dispatch(signup(formData));
   
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
            mx={"auto"}
            maxW={"lg"}
            mt={4}
            px={4}
          >
         
            <Box
              rounded={"lg"}
              bg={useColorModeValue("gray.50", "gray.800")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
               
                 
                  <Box>
                    <FormControl
                      color="#10847E"
                      id="lastName"
                      isRequired
                    >
                      <FormLabel>Name</FormLabel>
                      <Input
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                        value={formData.name}
                        _focus={{
                          border: "1px solid #10847E",
                        }}
                        type="text"
                      />
                    </FormControl>
                  </Box>
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
                <Stack spacing={4} pt={2}>
                  <Button
                    onClick={handleSubmit}
                    loadingText="Submitting..."
                    loading={authState.loading}
                    size="lg"
                    bg="#10847E"
                    color={"white"}
                    _hover={{
                      bg: "white",
                      color: "#10847E",
                      border: "1px solid #10847E",
                    }}
                  >
                    Register
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