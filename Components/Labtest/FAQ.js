import React from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading } from "@chakra-ui/react"
import FaqData from './FAQ.json'
function FAQ() {
  return (
    <Box w={{base:'90%',md:'70%',lg:'60%'}}  m="auto" mt="20px" mb="20px" >

        <Heading as="h2" size="lg" mb={4} textAlign='center'>Frequently Asked Questions</Heading>
        
      <Accordion allowToggle>
      
      {
        FaqData.map((item,index) => <AccordionItem key={index} border='1px solid gray' borderRadius='5px' mb={4} >
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left' color='blackAlpha.800' fontWeight='500'>
              {
                item.query
              }
            </Box>
            <AccordionIcon  color={'#10847e'} />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} color={'gray'}>
        {
            item.ans
        }
        </AccordionPanel>
      </AccordionItem>
        )
      }

</Accordion>
    </Box>
  )
}

export default FAQ
