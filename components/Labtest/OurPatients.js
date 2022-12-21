import { Button } from '@chakra-ui/button'
import { Img } from '@chakra-ui/image'
import { Input } from '@chakra-ui/input'
import { Box, Flex, Grid, Text } from '@chakra-ui/layout'
import { Select } from '@chakra-ui/select'
import React from 'react'
import PatientData from './Patients.json'
function OurPatients() {
  return (
    <Box bg='#d4e2fa' py={20} mt={4}>
        <Box w={{base:'90%',md:'85%',lg:'100%'}}  m="auto" mt="20px" mb="20px" >
            <Box as='h2' fontSize='2xl' textAlign='center' fontWeight='500' mb={4}>Our Happy Patients</Box>

            <Grid w={{base:'90%',md:'70%',lg:'60%'}} templateColumns={{md:'repeat(1,1fr)',lg:'repeat(2,1fr)'}} gap={4} m='auto' >
                   {
                          PatientData?.map((patient,index)=> <Box key={index} bg='white' p={4} borderRadius={10} boxShadow='md' _hover={{border:'2px solid #10847e'}} border='2px solid white'>
                         <Flex alignItems='end'gap={2} mb={4} >
                         <Img src={patient.image} w={20} h={20} />
                         <Box>
                         <Text>{patient.name}</Text>
                          <Text color='gray'>{patient.place}</Text>
                         </Box>
                         </Flex>
                          <Text color='#a0a0a0' fontSize={'sm'}>{patient.review}</Text>

                          
                        
                      </Box>
                        )
                      }
                  

                </Grid>
            </Box>
    </Box>
  )
}

export default OurPatients
