import React, { use, useEffect, useState } from "react";
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
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import { FcGoogle } from 'react-icons/fc';

import Link from "next/link";


import {
    getAuth,
    RecaptchaVerifier,
    signInWithPhoneNumber,
} from "firebase/auth";
import app from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut, useSession } from "next-auth/react"


import Timer from "./Timer";
import Form from "./Form";
import { login } from "../../redux/auth/action";
import { RESET_AUTH } from "../../redux/auth/type";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaAccusoft, FaAirbnb, FaDailymotion, FaFacebookSquare, FaFighterJet, FaFire, FaFirefox, FaGoogle, FaUser } from "react-icons/fa";
function Login() {

    const auth = getAuth(app);
    const dispatch = useDispatch();
    const { data: session, status } = useSession();
    const { user } = useSelector(state => state.auth)
   
    const [Number, setNumber] = useState("0");
    const [Authinicated, setAuthinicated] = useState(false);
    const [otpSented, setOtpSented] = useState(true);
    const [Otp, setOtp] = useState("");
    const [otpVerification, setOtpVerification] = useState(false);
    const [loading1, setLoading] = useState(false);
    const [loading, setLoading1] = useState(false);
    const [error, setError] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const firstField = React.useRef();
    const toast = useToast();
    const { message } = useSelector(state => state.auth)
    useEffect(() => {
        if (message === "User does not exist") {

            setOtpVerification(true);
            dispatch({ type: RESET_AUTH })
        }
        if (message === "User exists") {
            //use next Auth here
            onClose();
            signIn("credentials", { phone: Number, callbackUrl: "/" });


        }
    }, [message]);


    const sendOtp = () => {
        // signIn("credentials", { phone: Number, callbackUrl: "/" });
        if (
            Number.length > 10 ||
            Number.length < 10 ||
            Number === "" ||
            Number === undefined
        ) {
            console.log(Number + "number");

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
                console.log(res);
                setAuthinicated(res);
                setOtpSented(false);
                toast({
                    title: `OTP Sent`,
                    position: "top",
                    isClosable: true,
                    status: "success",
                    duration: 2000
                });
            })
            .catch((error) => {
                console.log(error);
                onClose();
                setLoading(false);
                toast({
                    title: `Try Again`,
                    position: "top",
                    isClosable: true,
                    status: "error",
                    duration: 2000
                });
            });
    };

    const verifyCode = async () => {
        setLoading(true);
        if (Otp.length !== 6) {
            return;
        }
        let code = Otp * 1;

        await Authinicated.confirm(code)
            .then((result) => {
                toast({
                    title: `OTP Verified`,
                    position: "top",
                    isClosable: true,
                    status: "success",
                    duration: 2000
                });
                dispatch(login({ phone: Number }));
                const user = result.user;
                // setOtpVerification(true);
                setLoading(false);

            })
            .catch((error) => {
                // onClose();
                toast({
                    title: `Worng OTP`,
                    position: "top",
                    isClosable: true,
                    status: "error",
                    duration: 2000

                });
                setLoading(false);
            });
    };
    const handleChange = (e) => {
        setOtp(e);
    };
    return (
        <>
            <div>
                <div id="recaptcha-container"></div>
                <Menu variant='ghost'>
                    <MenuButton _hover={{color : 'red'}} w='28' fontSize={'18'} righticon={<ChevronDownIcon />} onClick={session ? null : onOpen}>
                        Hi, {session ? session.user.name : "Sign In"}
                    </MenuButton>
                    <MenuList>
                        {
                            user?.role === 'admin' && <Link href="/admin">
                                <MenuItem>
                                    Admin
                                </MenuItem>
                            </Link>
                        }
                        <MenuItem onClick={() => {
                            signOut();
                            toast({
                                title: `Signed Out`,
                                position: "top",
                                isClosable: true,
                                status: "success",
                                duration: 2000

                            });
                            localStorage.removeItem('user');
                        }}>

                            Sign Out
                        </MenuItem>

                    </MenuList>
                </Menu>


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
                        <Box
                            display="flex"
                            bg={useColorModeValue("gray.50", "gray.800")}
                            justifyContent={"space-between"}
                            alignItems="center"
                            p='4'
                        >
                            <Img
                                w="60%"
                                padding={"30px"}
                                src="https://user-images.githubusercontent.com/97351159/208255522-22126415-4bf1-422b-9c54-d637ae7ecf91.png"
                            />
                            <Img w="40%" p='4' mr='20px' src="https://assets.pharmeasy.in/web-assets/dist/1fe1322a.svg?dim=256x0" />
                        </Box>{" "}
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
                                                {/* <Button
                                                    width="100%"
                                                    mt='4'
                                                    height={"50px"}
                                                    borderRadius={"3px"}
                                                    variant='solid'
                                                    onClick={()=>{
                                                        signIn('google')
                                                    }}
                                                >
                                                    <FcGoogle size='20' />
                                                    <Text ml='2'>Continue with Google</Text>
                                                </Button>
                                                <Button
                                                    width="100%"
                                                    mt='4'
                                                    height={"50px"}
                                                    borderRadius={"3px"}
                                                    colorScheme="facebook"
                                                >
                                                    <FaFacebookSquare size='20' />
                                                    <Text ml='2'>Continue with Facebook</Text>
                                                </Button> */}
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
                            <Form Number={Number} onClose={onClose} />
                        )}
                    </DrawerContent>
                </Drawer>
            </div>
        </>
    );
}

export default Login;