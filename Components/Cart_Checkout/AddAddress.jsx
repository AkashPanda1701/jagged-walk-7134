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
    Stack,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import styles from "../../pages/carts/Css/cart.module.css";

export default function AddAddress() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

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

                        <Heading as="h1">
                            {" "}
                            Add Address
                        </Heading>
                    </DrawerHeader>

                    <DrawerBody className={styles.addressContent}>
                        <FormControl isRequired>
                            <FormLabel> Deliver to</FormLabel>
                            <Input placeholder="Deliver to" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Mobile Number</FormLabel>
                            <Input placeholder="Mobile Number" />
                            <FormHelperText>
                                For all delivery related communication
                            </FormHelperText>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Pincode</FormLabel>
                            <Input placeholder="Pincode" />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>House number</FormLabel>
                            <Input placeholder="House number and building" />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Street Name </FormLabel>
                            <Input placeholder="Street Name" />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Address Type </FormLabel>
                            <RadioGroup defaultValue="1">
                                <Stack spacing={5} direction="row">
                                    <Radio colorScheme="green" value="1">
                                        Home
                                    </Radio>
                                    <Radio colorScheme="green" value="2">
                                        Work
                                    </Radio>
                                    <Radio colorScheme="green" value="3">
                                        Others
                                    </Radio>
                                </Stack>
                            </RadioGroup>
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
                        <Button colorScheme="green" variant="outline">
                            Save and Continue
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}
