import React, { useState } from "react";
import axios from "axios";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Stack,
  FormLabel,
  Spinner,
  Input,
  PinInput,
  PinInputField,
  HStack,
  Text,
  Box,
  Img,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";

import Link from "next/link";

import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import app from "./firebase";
import { useDispatch, useSelector } from "react-redux";

import {
  authLoading,
  authSuccess,
  authError,
} from "../../redux/auth/action";

import Timer from "./Timer";
import Form from "./Form";
function Login() {
  const dispatch = useDispatch();
  const auth = getAuth(app);
  const [Number, setNumber] = useState("8532083765");
  const [Authinicated, setAuthinicated] = useState(false);
  const [otpSented, setOtpSented] = useState(true);
  const [Otp, setOtp] = useState("");
  const [otpVerification, setOtpVerification] =
    useState(false);
  const [loading1, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const { loading, error } = useSelector(
    (store) => store.auth
  );
  const toast = useToast();
  console.log(loading1);
  const sendOtp = () => {
    dispatch(authLoading());
    if (
      Number.length > 10 ||
      Number.length < 10 ||
      Number === "" ||
      Number === undefined
    ) {
      console.log(Number + "number");
      if (Number[0] !== "0") {
        dispatch(
          authError("Please Enter a Valid mobile Number")
        );
        return;
      }
    }

    const phoneNumber = "+91" + Number;

    const appVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      { size: "invisible" },
      auth
    );
    appVerifier.render();
    return signInWithPhoneNumber(
      auth,
      phoneNumber,
      appVerifier
    )
      .then((res) => {
        setAuthinicated(res);
        dispatch(authSuccess(Number));
        setOtpSented(false);
        toast({
          title: `OTP Sented`,
          position: "top",
          isClosable: true,
          status: "success",
        });
      })
      .catch((error) => {
        authError(
          "Something Went Wrong Please Try Again Later "
        );
        alert(error);
        toast({
          title: `Try Again`,
          position: "top",
          isClosable: true,
          status: "error",
        });
      });
  };

  const verifyCode = async () => {
    setLoading(true);
    if (Otp.length !== 6) {
      dispatch(authError(""));
      return;
    }
    let code = Otp * 1;

    await Authinicated.confirm(code)
      .then((result) => {
        // dispatch({ type: AUTH_OTP_SUCCESS });
        toast({
          title: `OTP Verified`,
          position: "top",
          isClosable: true,
          status: "success",
        });
        const user = result.user;
        console.log(user);
        setOtpVerification(true);
        setLoading(false);
      })
      .catch((error) => {
        // dispatch({ type: AUTH_LOGIN_REQ_ERROR });
        toast({
          title: error,
          position: "top",
          isClosable: true,
          status: "error",
        });
      });

    
    
  };
  const handleChange = (e) => {
    setOtp(e);
  };
  const checkNoIndb = () => {
    axios.post(`http://localhost:3000/api/user/signup?${Number}`).then((res) => {
    
  })
}
  return (
    <>
      <div>
        <div id="recaptcha-container"></div>
        <Button
          fontSize={{ base: 0, md: "md" }}
          fontWeight={500}
          variant={"link"}
          color="black"
          onClick={onOpen}
        >
          Hello, Log in
        </Button>

        <Drawer
          size="sm"
          isOpen={isOpen}
          placement="right"
          initialFocusRef={firstField}
          onClose={onClose}
        >
          <DrawerOverlay />

          <DrawerContent>
            <DrawerCloseButton
              color="white"
              right="var(--chakra-space-0)"
            />
            <DrawerHeader
              display="flex"
              bg={useColorModeValue("gray.50", "gray.800")}
              gap="40px"
              justifyContent={"space-between"}
              alignItems="center"
            >
              <Img
                w="250px"
                padding={"30px"}
                src="https://user-images.githubusercontent.com/97351159/207395646-47cbbbb8-e5d4-45c0-a42b-d62ad5123a3f.png"
              />
              <Img
                paddingRight={"10px"}
                w="80px"
                src="https://assets.pharmeasy.in/web-assets/dist/1fe1322a.svg?dim=256x0"
              />
            </DrawerHeader>{" "}
            <hr />
            {!otpVerification ? (
              <DrawerBody marginTop={"40px"}>
                <Stack spacing="24px">
                  {otpSented ? (
                    !loading ? (
                      <Box>
                        <FormLabel
                          fontWeight={"bold"}
                          mb="30px"
                        >
                          Quick Login / Register
                        </FormLabel>
                        <Input
                          _focus={{
                            border: "1px solid #10847E",
                          }}
                          onChange={(e) => {
                            setNumber(e.target.value);
                          }}
                          height={"50px"}
                          ref={firstField}
                          id="contact"
                          placeholder="Enter your phone no."
                          autoComplete="off"
                        />
                        <br />
                        {!!error ? (
                          <Text
                            marginTop={"20px"}
                            color="red"
                          >
                            {error}
                          </Text>
                        ) : null}
                        <br />
                        <Button
                          disabled={Number[0] === "0"}
                          onClick={sendOtp}
                          width="100%"
                          height={"50px"}
                          color="white"
                          bg="#10847E"
                          borderRadius={"3px"}
                          _hover={{
                            background: "#10847E",
                            color: "white",
                          }}
                        >
                          Send OTP
                        </Button>
                      </Box>
                    ) : (
                      <Box>
                        <Box
                          display={"flex"}
                          justifyContent="center"
                          alignItems={"center"}
                        >
                          <Spinner
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
                          <Text>
                            You will receive OTP shortly
                          </Text>
                        </Box>
                        <br />
                      </Box>
                    )
                  ) : (
                    <Box>
                      {loading1 ? (
                        <Box>
                          <Box
                            display={"flex"}
                            justifyContent="center"
                            alignItems={"center"}
                          >
                            <Spinner
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
                            <Text>Checking OTP</Text>
                          </Box>
                          <br />
                        </Box>
                      ) : (
                        <Box>
                          <FormLabel mb="30px">
                            Enter OTP sent to +91{Number}
                          </FormLabel>
                          <PinInput
                            otp
                            type="number"
                            placeholder=" "
                            onChange={handleChange}
                            size="lg"
                            display={"flex"}
                            justifyContent="center"
                          >
                            <PinInputField
                              _focus={{
                                border: "1px solid #10847E",
                              }}
                              autoComplete="off"
                              mr={"20px"}
                            />
                            <PinInputField
                              _focus={{
                                border: "1px solid #10847E",
                              }}
                              autoComplete="off"
                              mr={"20px"}
                            />
                            <PinInputField
                              _focus={{
                                border: "1px solid #10847E",
                              }}
                              autoComplete="off"
                              mr={"20px"}
                            />
                            <PinInputField
                              _focus={{
                                border: "1px solid #10847E",
                              }}
                              autoComplete="off"
                              mr={"20px"}
                            />
                            <PinInputField
                              _focus={{
                                border: "1px solid #10847E",
                              }}
                              autoComplete="off"
                              mr={"20px"}
                            />
                            <PinInputField
                              autoComplete="off"
                              _focus={{
                                border: "1px solid #10847E",
                              }}
                            />
                          </PinInput>
                          <br /> <br /> <br />
                          <Button
                            disabled={Otp.length !== 6}
                            onClick={verifyCode}
                            width="100%"
                            height={"50px"}
                            color="white"
                            bg="#10847E"
                            borderRadius={"3px"}
                            _hover={{
                              background: "#10847E",
                              color: "white",
                            }}
                          >
                            Continue
                          </Button>
                          <Timer
                            setOtpSented={setOtpSented}
                          />
                        </Box>
                      )}
                    </Box>
                  )}
                  <Box>
                    {!loading && !loading1 ? (
                      <Text>
                        By clicking continue, you agree with
                        our
                        <Link
                          style={{ color: "#10847E" }}
                          href={"#"}
                        >
                          {" "}
                          Privacy Policy
                        </Link>
                      </Text>
                    ) : null}
                  </Box>
                </Stack>
              </DrawerBody>
            ) : (
              <Form Number={Number} />
            )}
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}

export default Login;
