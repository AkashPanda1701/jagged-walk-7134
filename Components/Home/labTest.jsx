import { SimpleGrid,Image,Box,Heading } from "@chakra-ui/react"

const db = [
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/10dfe8c8aa7-HealthCheckups.jpg?dim=256x0",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/6c5479c6c0c-Vitamins.jpg?dim=256x0",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/69588f95674-Diabetes.jpg?dim=256x0",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/c507b2563fd-thyroid.png?dim=256x0",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/eeb3fe3251f-WomenCare.jpg?dim=256x0",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/355e9b77fb5-FeverInfection.jpg?dim=256x0",
  },
  {
    img: "https://cms-contents.pharmeasy.in/homepage_top_categories_images/6e78a241e48-CovidCare.jpg?dim=256x0",
  },
];

export const LabTest=()=>{
    return (
      <>
        <Heading ml={20} fontWeight={500} as="h3" size="lg" mt={20}>
         Lab Test by Health Concern
        </Heading>
        <SimpleGrid pt={10} w="85%" m="auto" gap={9} columns={[3, 4, 4, 7]}>
          {db.map((ele) => {
            return (
              <Box>
                <Image src={ele.img} />
              </Box>
            );
          })}
        </SimpleGrid>
      </>
    );

}
// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class MultipleItems extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 3,
//     };
//     return (
//       <div>
//         <h2> Multiple items </h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//           <div>
//             <h3>7</h3>
//           </div>
//           <div>
//             <h3>8</h3>
//           </div>
//           <div>
//             <h3>9</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }

