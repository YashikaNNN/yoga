import React from "react";
import img from "../assets/img/hero.png";

const Hero = () => {
  return (
    <div className=" h-[90vh] bg-navbar text-white flex flex-col sm:justify-center lg:justify-start">
      {/* bg-[url('assets/img/hero.png')] bg-cover bg-no-repeat */}
      <div className=" relative flex justify-center">
        <img src={img} alt="img" className=" hidden sm:flex mx-auto w-3/5" />

        <div className=" absolute top-0">
          <h1 className=" text-[160px] lg:text-[290px] text-center">Y O G A</h1>
          <p className=" text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            necessitatibus.
          </p>
          <div className=" flex justify-center">
            <button className=" bg-white py-2 px-6 mt-2 text-black font-bold hover:bg-black hover:text-white transition duration-200 ease-linear rounded-full">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
