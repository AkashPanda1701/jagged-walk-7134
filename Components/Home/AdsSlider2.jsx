import { Container, Image,Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const Ads = [
  {
    img: "https://cdn01.pharmeasy.in/dam/banner/banner/810889b6613-babycare-min.png?dim=1440x0",
    id: 1,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/banner/banner/5e9dc201ab9-DevicesClearanceStore.jpg?dim=1440x0",
    id: 2,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/banner/banner/ed87375d79f-DiabeticCare-min.png?dim=1440x0",
    id: 3,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/banner/banner/ee420d12d95-category_Sexual-wellnes.jpg?dim=1440x0",
    id: 4,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/banner/banner/d91d8a17483-b80e93634e8-Now-never_CB.jpg?dim=1440x0",
    id: 5,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/banner/banner/9b42ab4d9ab-home-page-banner_nutrition-.jpg?dim=1440x0",
    id: 6,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/banner/banner/cea76587546-Personal-care_c.jpg?dim=1440x0",
    id: 7,
  },
  {
    img: "https://cdn01.pharmeasy.in/dam/banner/banner/9452a363f7f-covid-19.jpg?dim=1440x0",
    id: 8,
  },
];
const delay = 3000;

export default function  Adslider2  ()  {
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
        className="slideshow2"
        maxW={{ base: "95%", md: "80%", lg: "100%" }}
      >
        <Box
          className="slideshowSlider2"
          style={{ transform: `translate3d(${-index * 15}%, 0, 0)` }}
        >
          {Ads.map((backgroundColor, index) => (
            <Box className="slide2" key={backgroundColor.id}>
              <Image
            //   p={10}
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
