import React, { useEffect } from 'react'
import { Box, Button, Flex, Grid, Img, Input, Select, Text, useToast } from "@chakra-ui/react"
import {FcReadingEbook} from 'react-icons/fc'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { getLabcart, postLabcart } from '../../redux/labcart/action'
function Alltest({data}) {
    const {Labtests} = data
    const [patients, setPatients] = React.useState(0)
    const [date , setDate] = React.useState('')
   const toast = useToast()
   const dispatch = useDispatch();
   const {data:labcart} = useSelector(state => state.labcart)
   console.log('labcart: ', labcart);
   const authState = useSelector(state => state.auth)
   console.log('authState: ', authState);

   useEffect(() => {
    dispatch(getLabcart(authState.user.id))
    }, [dispatch, authState.user])

    const handleBookTest =async (testId) => {
      
      if(patients < 1){
        
        toast({
            title: "Please select number of patients",
            status: "error",
            duration: 3000,
            isClosable: true,
            position:'top'
          })
            return
        }
        if(date === ''){
            toast({
                title: "Please select date",
                status: "error",
                duration: 3000,
                isClosable: true,
                position:'top'
              })
                return
        }
        const textExist = labcart.find((item) => item.testId._id === testId)
        console.log('textExist: ', textExist);
        if(textExist){

            toast({
                title: "Test already added to cart",
                status: "error",
                duration: 3000,
                isClosable: true,
                position:'top'
              })
                return
        }
        //verify date for future date
        const today = new Date()
        const selectedDate = new Date(date)
        if(selectedDate < today){
            toast({
                title: "Please select date in future",
                status: "error",
                duration: 3000,
                isClosable: true,
                position:'top'
              })

              return
        }

        dispatch(postLabcart(authState.user.id,{testId,patients,appointmentDate:date}))

        toast({
            title: "Test added to Lab cart",
            status: "success",
            duration: 3000,
            isClosable: true,
            position:'top'
          })


    }

  return (<>
    <Box bg='#d4e2fa' py={20} mt={4} mx='auto'>
   <Flex w={{base:'90%',md:'70%',lg:'60%'}}  m='auto'  justifyContent='flex-end'  my={4}   alignItems='center' >
    <Link href='/labtests/carts'>
    <Button bg={'#10847e'} color='white' borderRadius='10px'  _hover={{bg:'white',color:'#10847e' ,border:'2px solid #10847e'}} >
      Tests Booked
    </Button>
    </Link>
    <FcReadingEbook size={30} color='#10847e' />
    <Flex  bg='red' w={'25px'} h="25px" borderRadius='50%' color='white' position={'absolute'}   alignItems='center' justifyContent='center' mr={'-20px'} mt={'-20px'}>
      {labcart?.length}
    </Flex>
   </Flex>
                <Grid w={{base:'90%',md:'70%',lg:'60%'}} templateColumns={{md:'repeat(2,1fr)',lg:'repeat(3,1fr)'}} gap={4} m='auto' >
                   {
                          Labtests?.map((test,index)=> <Box key={index} bg='white' p={'14px 0 14px 14px'} borderRadius={10} boxShadow='md' _hover={{border:'2px solid #10847e'}} border='2px solid white'>
                          <Img src={test.image} w={20} h={20} />
                          <Text>{test.testName.slice(0, 30)}...</Text>
                          <Text color='#a0a0a0' fontSize={'sm'}>{test.description}</Text>

                          <Flex mt={4} alignItems='center' justifyContent='space-between' gap={4}>
                          <Select placeholder='Patients' w='40%' mt={4} onChange={(e)=>setPatients(e.target.value)}  borderRadius='0 10px 10px 0' _hover={{border:'2px solid #10847e'}} border='2px solid #10847e' >
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                          </Select>
                          <Input mr={4} type='date' w='60%' mt={4} onChange={(e)=>setDate(e.target.value)}  borderRadius='10px 0 0 10px' _hover={{border:'2px solid #10847e'}} border='2px solid #10847e' />
                          </Flex>
                          <Flex mt={4} alignItems='center' justifyContent='space-between'>
                          <Text color='#a0a0a0' fontSize={'lg'}>₹{test.price}</Text>
                          <Button  ml={4} color='#10847e'  borderRadius='10px 0 0 10px' _hover={{bg:'#10847e',color:'white'}}
                          onClick={()=>{
                            if(!authState.user && !authState.user?.role){
                              toast({
                                  title: "Please Login First",
                                  status: "error",
                                  duration: 3000,
                                  isClosable: true,
                                  position : 'top'
                              })
                              return;
                          }
                            handleBookTest(test._id)
                          }}
                          >Book Now</Button>
  
                             
                          </Flex>
                      </Box>
                        )
                      }
                  

                </Grid>

            </Box>
                      </>
  )
}

export default Alltest


