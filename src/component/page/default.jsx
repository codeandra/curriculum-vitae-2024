import React, { useEffect } from "react";
import useAOS from "../../hooks/useAOS";

const Default = ({ handleNavigation }) => {
  useAOS();
  return (
    <div className="min-h-screen bg-slate-100 p-6 flex items-center justify-center flex-col">
      <h1
        className="text-3xl md:text-4xl font-bold"
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
      >
        Hello Everyone👋
      </h1>
      <p
        className="text-xl mt-1 font-medium"
        data-aos="fade-left"
        data-aos-duration="900"
        data-aos-easing="ease-in-out"
      >
        I Am Kevin Andra
      </p>
      <div
        data-aos="fade-up"
        data-aos-duration="750"
        data-aos-easing="ease-in-out"
      >
        <button
          onClick={() => handleNavigation("Tentang Saya")}
          className="mt-4 px-6 py-2 border-[3px] text-black border-black font-semibold hover:text-white hover:bg-black duration-300 ease-in-out rounded-3xl"
        >
          About Me  
        </button>
      </div>
    </div>
  );
};

export default Default;
