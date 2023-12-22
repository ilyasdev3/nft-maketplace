import React from "react";

const AboutHome = () => {
  return (
    <div className="">
      <h1 className="text-5xl font-bold text-center mt-20">About Us</h1>
      <div className="flex justify-center mt-10">
        <div className="w-[90%] md:w-[70%] lg:w-[50%]">
          <p className="text-center text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, voluptatum, quod, voluptate voluptatem dolorum
          </p>
        </div>
      </div>
      <div className="flex  items-center justify-center mt-[3rem] ">
        <div className="flex-1 flex">
          <img
            src="/src/assets/images/cartoon-character-with-fashion-bag.jpg"
            alt=""
            className="w-[400px] h-[400px] object-cover"
          />
        </div>
        <div className="flex-1 w-[90%] md:w-[70%] lg:w-[50%] flex flex-col gap-[1.5rem] ">
          <h4 className="text-3xl font-bold">Get Popular NFT</h4>
          <p
            className="text-gray-400"
            style={{ maxWidth: "500px", lineHeight: "2rem" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, voluptatum, quod, voluptate voluptatem dolorum Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, voluptatum, quod, voluptate voluptatem dolorum Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, voluptatum, quod, voluptate voluptatem dolorum Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, voluptatum, quod, voluptate voluptatem dolorum
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
