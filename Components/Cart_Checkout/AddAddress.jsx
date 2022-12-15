import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    Input,
    Radio,
    RadioGroup,
    Select,
    Stack,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../../pages/carts/Css/cart.module.css";

const initialState = {
    deliverTo: "",
    mobileNo: "",
    pinCode: "",
    houseNumber: "",
    streetName: "",
    addressType: "",
};

export default function AddAddress() {
    const [disable, setDisable] = useState(false);

    const [address, setAddress] = useState(initialState);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    const handleChange = (e) => {
        const { value, name } = e.target;
        setAddress({ ...address, [name]: value });

        if (
            address.deliverTo !== "" &&
            address.mobileNo !== "" &&
            address.pinCode !== "" &&
            address.houseNumber !== "" &&
            address.streetName !== "" &&
            address.addressType !== ""
        ) {
            setDisable(true);
        }

    };
    const handleAddress = async () => {
        console.log("Address Details:", address);
        const payload = address;
        try {
            let res = await axios.post(`http://localhost:2707/address`, payload);
        } catch (e) {
            console.log(e.message);
        }
        setAddress(initialState);
    };

    const { deliverTo, mobileNo, pinCode, houseNumber, streetName, addressType } =
        address;
    console.log("disable:", disable);
    return (
        <>
            <Button
                ref={btnRef}
                onClick={onOpen}
                w={{ base: "", sm: "", md: "280px", lg: "420px" }}
                colorScheme="blue"
                bg="#10847e"
            >
                <Text color="#fff">Add Delivery Address </Text>
            </Button>

            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
                size={"sm"}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader className={styles.addressHead}>
                        <Heading as="h1"> Add Address</Heading>
                    </DrawerHeader>

                    <DrawerBody className={styles.addressContent}>
                        <FormControl isRequired>
                            <FormLabel> Deliver to</FormLabel>
                            <Input
                                placeholder="Deliver to"
                                value={deliverTo}
                                name="deliverTo"
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Mobile Number</FormLabel>
                            <Input
                                placeholder="Mobile Number"
                                value={mobileNo}
                                name="mobileNo"
                                onChange={handleChange}
                                type="number"
                            />
                            <FormHelperText>
                                For all delivery related communication
                            </FormHelperText>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Pincode</FormLabel>
                            <Input
                                placeholder="Pincode"
                                value={pinCode}
                                name="pinCode"
                                onChange={handleChange}
                                type="number"
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>House number</FormLabel>
                            <Input
                                placeholder="House number and building"
                                value={houseNumber}
                                name="houseNumber"
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Street Name </FormLabel>
                            <Input
                                placeholder="Street Name"
                                value={streetName}
                                name="streetName"
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Address Type </FormLabel>

                            <Select
                                onChange={handleChange}
                                name="addressType"
                                colorScheme="green"
                            >
                                <option value="-">Address Type</option>
                                <option value="Home">Home</option>
                                <option value="Work">Work</option>
                                <option value="Others">Others</option>
                            </Select>
                        </FormControl>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button
                            colorScheme="red"
                            variant="outline"
                            mr={3}
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleAddress}
                            colorScheme="green"
                            variant="outline"
                            disabled={!disable ? true : false}
                        >

                            <Link href="/carts/payment-method"> Save and Continue</Link>
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}
