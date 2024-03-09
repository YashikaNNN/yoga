import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className=" bg-primary text-white pt-10">
      <div className="container flex flex-col md:flex-row justify-center md:gap-40">
        <div className=" w-full md:w-2/4 lg:w-1/4">
          <img className=" rounded-lg" src={img} alt="img" />
        </div>
        <div className=" w-full md:w-2/4 space-y-10 pt-8">
          <h1 className="text-4xl lg:text-5xl font-bold">About Us</h1>
          <p className=" text-base lg:text-xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            labore debitis tempora quas quo consequuntur recusandae, officiis
            dolorem possimus soluta.
          </p>
          <p className="text-sm lg:text-lg font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, odio?
          </p>
          <p className=" text-xs lg:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            nemo deleniti asperiores laboriosam fuga ut quam alias maiores?
            Perspiciatis iure deserunt quidem voluptas obcaecati unde reiciendis
            doloremque, aliquam explicabo, commodi nesciunt consequuntur labore.
            Labore aliquam quis quisquam dolor laboriosam delectus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
