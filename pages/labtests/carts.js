import {
  Box,
  Text,
  Img,
  Button,
  Flex,
  Container,
  Grid,
  GridItem,
  useToast,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  PinInputField,
  PinInput,
  HStack,
} from "@chakra-ui/react";
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Mainfooter/footer";
import { useDispatch, useSelector } from "react-redux";
import { deleteLabcart, getLabcart, testBooking, updateLabcart } from "../../redux/labcart/action";

function Cart() {
    const dispatch = useDispatch();
    const {data:state} = useSelector((state) => state.labcart);
  const [product, setProduct] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: IsOpen, onOpen: OnOpen, onClose: OnClose } = useDisclosure();
  const cancelRef = useRef();
  const toast = useToast();

  const authState = useSelector(state => state.auth)
  console.log('authState: ', authState);

  useEffect(() => {
   dispatch(getLabcart(authState.user.id))
   }, [dispatch, authState.user])

  return (
    <Box>
      <Navbar />

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Remove Item
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You want to remove {product?.testId?.testName} from the cart?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                ml={3}
                onClick={() => {
                    dispatch(deleteLabcart(authState.user.id, product._id));
                  onClose();
                  toast({
                    title: `${product?.testId.testName} `,
                    position: "bottom-left",
                    description: "Removed from cart.",
                    status: "warning",
                    duration: 3000,
                    isClosable: true,
                    position: "top",
                  });
                }}
              >
                Remove
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      {state?.length > 0 ? (
        <Box>
          <Container maxW="container.lg" mt={8}>
            <Grid templateColumns={"repeat(5, 1fr)"} gap="6">
              <GridItem colSpan={{ base: 5, md: 3 }}>
                {state?.map((item) => (
                  <Box
                    key={item._id}
                    mt={2}
                    bg="white"
                    p="6"
                    borderRadius="3px"
                    border="1px solid"
                    borderColor="gray.200"
                  >
                    <Box
                      borderRadius="3px"
                      bg="white"
                      display="grid"
                      gridTemplateColumns="24% 75%"
                      gridGap="1%"
                    >
                      <Box colSpan="1">
                        <Img src={item.testId.image} w="100%" />
                      </Box>
                      <Box p="4" colSpan="2">
                        <Flex justifyContent={"space-between"}>
                          <Text fontSize="16px" fontWeight="bold">
                            {item.testId.testName}
                          </Text>
                          <Box mt="-15px">
                            <FontAwesomeIcon
                              position="relative"
                              fontSize={22}
                              color="gray"
                              icon={faXmark}
                              cursor="pointer"
                              onClick={() => {
                                onOpen();
                                setProduct(item);
                              }}
                            />
                          </Box>
                        </Flex>
                        <Text fontSize="13px" mt={1} fontWeight="600">
                          {item.testId.description}
                        </Text>
                       
                        <Flex gap={1} alignItems="center">
                          <Text fontWeight="bold" fontSize="16px" mt="1">
                          ₹{item.testId.price}
                          </Text>
                         
                        </Flex>
                        <Flex 
                        flexWrap={'wrap'}
                        justifyContent="space-between" mt={2}>

                        <Box>

                        <Text 
                            fontSize="11px" mt={1} fontWeight="600">
                          <FontAwesomeIcon
                            icon={faCheck}
                            fontSize="13px"
                            color="teal"
                          />{" "}
                          Booking Date <strong>
                            {new Date(item.bookedDate).toDateString()}
                          </strong>
                        </Text>
                        <Text 
                            fontSize="11px" mt={1} fontWeight="600">
                          <FontAwesomeIcon
                            icon={faCheck}
                            fontSize="13px"
                            color="teal"
                            />{" "}
                          Appointment Date <strong>
                            {new Date(item.appointmentDate).toDateString()}
                          </strong>
                        </Text>
                            </Box>
                            <Box>
                            <Text
                            fontSize="11px" mt={1} fontWeight="600">
                            <FontAwesomeIcon
                            icon={faCheck}
                            fontSize="13px"
                            color="teal"
                            />{" "}
                            Patients 
                        </Text>
                        <Button
                        onClick={() => {

                            if(item.patients === 1){
                                toast({
                                    title: `${item?.testId.testName} `,
                                    description: "Minimum 1 patient required.",
                                    status: "warning",
                                    duration: 3000,
                                    isClosable: true,
                                    position: "top",
                                    });
                                return;
                            }
                            dispatch(updateLabcart(authState.user.id, item._id, item.patients - 1))
                            toast({
                                title: `${item?.testId.testName} `,
                                description: "Removed a patient.",
                                status: "success",
                                duration: 3000,
                                isClosable: true,
                                position: "top",
                                });
                        }}
                        fontSize={'30px'}>
                            -
                        </Button>
                        <Button bg='none' 
                        _hover={{bg:'none'}}>
                           {
                                item.patients
                           }
                        </Button>
                        <Button fontSize={'30px'}
                        onClick={() => {
                            dispatch(updateLabcart(authState.user.id, item._id, item.patients + 1))
                            toast({
                                title: `${item?.testId.testName} `,
                                description: "Added a patient.",
                                status: "success",
                                duration: 3000,
                                isClosable: true,
                                position: "top",
                                });
                        }}
                        >
                            +
                        </Button>
                                </Box>
                            </Flex>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </GridItem>
              <GridItem colSpan={{ base: 5, md: 2 }}>
               
               
                   
                <Box
                  mt={4}
                  bg="white"
                  p="6"
                  borderRadius="3px"
                  border="1px solid"
                  borderColor="gray.200"
                >
                  <Text fontSize="14px" fontWeight="bold">
                    Price Details ({state.length} Tests)
                  </Text>
                  <Flex justifyContent="space-between" mt={4}>
                    <Text fontSize="14px" fontWeight="thin">
                      Total MRP
                    </Text>
                    <Text fontSize="14px" fontWeight="thin">

                     ₹ {state.reduce((acc, item) => acc + (item.testId.price*item.patients), 0)}
                    </Text>
                  </Flex>
                  <Flex justifyContent="space-between" mt={3}>
                   
                    
                  </Flex>
                  
                  <Flex justifyContent="space-between" mt={3}>
                    <Text fontSize="14px" fontWeight="thin">
                      Convenience Fee
                    </Text>
                    <Text fontSize="14px" color="teal" fontWeight="thin">
                      <Text as={"s"} color="blue">
                        Rs. 99
                      </Text>{" "}
                      &nbsp;Free
                    </Text>
                  </Flex>
                  <Box
                    borderBottom={"1px solid"}
                    borderColor="gray.200"
                    mt={4}
                  />
                  <Flex justifyContent="space-between" mt={4}>
                    <Text fontSize="14px" fontWeight="bold">
                      Total MRP
                    </Text>
                    <Text fontSize="14px" fontWeight="bold">
                    ₹ {state.reduce((acc, item) => acc + (item.testId.price*item.patients), 0)}
                    </Text>
                  </Flex>
                  <Button
                    mt={4}
                    w="100%"
                    bg="rgb(80,80,80)"
                    color="white"
                    _hover={{ bg: "black" }}
                    borderRadius="4px"
                    onClick={OnOpen}
                  >
                    Pay Now
                  </Button>
                  <Modal isOpen={IsOpen} onClose={OnClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Verify Cvv</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <HStack>
                          <PinInput>
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                          </PinInput>
                        </HStack>
                        <Button
                          my={4}
                          colorScheme="green"
                          onClick={() => {
                            dispatch(testBooking(authState.user.id));
                            toast({
                              title: "Booking Confirmed",
                              description:
                                "Your tests has been booked successfully.",
                              status: "success",
                              duration: 3000,
                              position: "top",
                              isClosable: true,
                            });
                            
                            OnClose();
                          }}
                        >
                          Verify
                        </Button>
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                </Box>
              </GridItem>
            </Grid>
          </Container>
        </Box>
      ) : (
        <Box w="400px" h="400px" m="auto" mt="150px" textAlign="center">
          <Box>
            <Img
              src="https://cdn-icons-png.flaticon.com/512/57/57327.png"
              w="40%"
              m="auto"
            />
            <Text fontWeight="bold" fontSize="xl" mt="4">
              Hey, feel free to get a health checkup
            </Text>
            <Text fontWeight="thin" fontSize="12px" color="gray" mt="1">
              There is nothing in your bag. Lets add some items
            </Text>
            <Link href="/labtests">
              <Button
                border="1px solid black"
                borderRadius="3px"
                mt="8"
                color="black"
                bg="white"
                _hover={{ bg: "black", color: "white" }}
              >
                Book Test Now
              </Button>
            </Link>
          </Box>
        </Box>
      )}

      <Footer />
    </Box>
  );
}

export default Cart;
