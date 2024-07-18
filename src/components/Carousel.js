import React, { useEffect, useState } from "react";
import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";

const images = [banner1, banner2];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // this will move the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // clean up function for timer
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt="carousel" />
    </div>
  );
};

export default Carousel;
