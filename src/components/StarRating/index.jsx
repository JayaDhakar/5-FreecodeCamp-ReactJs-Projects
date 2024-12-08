import React, { useState } from "react";

import { FaStar } from "react-icons/fa";// npm i-react icons

export default function StarRating({ noOfStars }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    // console.log(getCurrentIndex);
    setRating(getCurrentIndex)
  }

  function handleMouseEnter(getCurrentIndex) {
    // console.log(getCurrentIndex);
    setHover(getCurrentIndex)
  }

  function handleMouseLeave() {
    // console.log(getCurrentIndex);
    setHover(rating)
  }

  return (
    <>
      <div className=" flex justify-center font-bold text-2xl p-3 mt-5 mb-2 bg-gray-800 text-white">
        Star-Rating
      </div>
      <div className="star-rating flex ">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;

          return (
            <FaStar
              key={index}
              className={index <= (hover || rating )?'active':'inactive'}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              size={40}
            />
          );
        })}
      </div>
    </>
  );
}
