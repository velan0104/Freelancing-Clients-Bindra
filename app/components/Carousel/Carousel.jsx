"use client";
import React, { useEffect, useState } from "react";
import "./Carousel.css";
import Image from "next/image";

const Carousel = () => {
  const [items, setItems] = useState([
    "/images/Bindra_One/Bindra_One.png",
    "/images/Bindra_One/bindra_one_2.jpg",
    "/images/Bindra_One/bindra_one_4.JPG",
    "/images/Bindra_One/bindra_one_1.jpg",
    "/images/Bindra_One/bindra_one_3.jpg",
    "/images/Bindra_One/bindra_one_5.jpeg",
  ]);

  const handleNext = () => {
    setItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
  };

  const handlePrev = () => {
    // Move the last item to the front
    setItems((prevItems) => [
      prevItems[prevItems.length - 1],
      ...prevItems.slice(0, -1),
    ]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Automatically move to the next item every 3 seconds
    }, 2000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Function to return classes for the Image
  const getImageClasses = (item) => {
    if (item === "/images/Bindra_One.png") {
      return "max-h-[90%] aspect-auto max-w-[90%] m-[5%]";
    }
    return "p-0";
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="box h-[45vh] md:h-[75vh]">
        {items.map((item, index) => (
          <div key={index} className="item">
            <Image
              src={item}
              className={getImageClasses(item)}
              alt={`img-${index + 1}`}
              width={400}
              height={400}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
