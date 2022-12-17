import { Box, Container, Image } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const Ads = [
  {
    img: "https://cdn01.pharmeasy.in/dam/banner/banner/760565c68b5-VIBES27.jpg",
    id: 1,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/banner/banner/1ef60ed33e9-VicksWinterBannerfinal.jpg",
    id: 2,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/banner/banner/048facc8065-634x274a.jpg",
    id: 3,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/banner/banner/a7e04988fcc-YAYY550.jpg",
    id: 4,
  },
];
const delay = 3000;

export default function Adslider  ()  {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === Ads.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <>
      <Container
        mt={20}
        className="slideshow"
        maxW={{ base: "100%", md: "90%", lg: "100%" }}
      >
        <Box
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 30}%, 0, 0)` }}
        >
          {Ads.map((backgroundColor, index) => (
            <Box className="slide" key={index}>
              <Image
                borderRadius="10px"
                shadow="lg"
                m="auto"
                src={backgroundColor.img}
                w={{ base: "90%", md: "80%" }}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
};
