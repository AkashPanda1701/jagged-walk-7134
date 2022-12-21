import { Box } from "@chakra-ui/react";
import Alltest from "../../components/Labtest/Alltest";
import FAQ from "../../components/Labtest/FAQ";
import OurPatients from "../../components/Labtest/OurPatients";
import SimpleSlider from "../../components/Labtest/Slider";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Mainfooter/footer";

function Booktest({ data }) {
    
  return (
    <Box>
      <Navbar />
      <SimpleSlider />
      <Alltest data={data} />
      <FAQ />
      <OurPatients />
      <Footer/>
    </Box>
  );
}

export default Booktest;

export async function getServerSideProps(context) {
  const res = await fetch(`https://medspharma.netlify.app/api/labtests`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
