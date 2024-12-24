import React, { useEffect, useState } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [items, setItems] = useState([
    "/images/Bindra_One.png",
    "./images/bindra_one_1.jpg",
    "./images/bindra_one_2.jpg",
    "./images/bindra_one_3.jpg",
    "https://images.unsplash.com/photo-1508349937151-22b68b72d5b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1508349937151-22b68b72d5b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1675433344518-21eb72dfc7a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww",
  ]);

  const handleNext = () => {
    // Move the first item to the end
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

  return (
    <div className=" flex flex-col gap-10">
      <div className="box h-[45vh] md:h-[75vh] ">
        {items.map((item, index) => (
          <div key={index} className="item ">
            <img
              src={item}
              className={`bg-gray-900 ${index === 0 ? " h-[40vh]" : "m-0"}`}
            />
          </div>
        ))}
        {/* <div className="buttons absolute -bottom-0">
          <span className="prev" onClick={handlePrev}></span>
          <span className="next" onClick={handleNext}></span>
        </div> */}
      </div>
    </div>
  );
};

export default Carousel;
