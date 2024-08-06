import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Card = ({ icon, text, img, customStyle }) => {
  return (
    <div className="bg-white shadow-sm rounded-xl size-[105px] sm:size-[130px] cursor-pointer hover:bg-[#032541ce] hover:text-white duration-500 ease-in-out">
      <div className="flex flex-col justify-center items-center h-full w-full">
        <FontAwesomeIcon icon={icon} className="size-8 mb-3" />
        {img ? <img src={img} alt="img" className={customStyle} /> : null}
        <p className="text-[10px] font-semibold">{text}</p>
      </div>
    </div>
  );
};

export default Card;
