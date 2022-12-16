import { Box } from "@chakra-ui/react"
import Alltest from "../../components/Labtest/Alltest"
import SimpleSlider from "../../components/Labtest/Slider"
import Navbar from "../../Components/Navbar/Navbar"

function Booktest({data}){

    
    return (
        <Box>
            <Navbar/>
            <SimpleSlider/>
            
            <Alltest data={data}/>
            <h1>Booktest Page</h1>
        </Box>
    )
}

export default Booktest

export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/api/labtests`)
    const data = await res.json()
    return {
        props: {
            data

        }   
    }
  }