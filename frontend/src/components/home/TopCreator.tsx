import React from "react";
import Button from "../reuseable/Button";

const TopCreator = () => {
  return (
    <div className=" py-[2rem]">
      <section className="flex justify-between items-center">
        <div className="flex flex-col gap-[1rem]">
          <h1 className="text-3xl font-bold">Top creators</h1>
          <p>Checkout Top Rated Creators on the NFT Marketplace</p>
        </div>
        <Button>View Rankings</Button>
      </section>
      <section className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-[1rem] mt-[2rem]">
        <article className="bg-[#3B3B3B] flex flex-col items-center justify-center gap-[0.5rem] p-[0.5rem] rounded-md h-[200px]">
          <img
            src="/src/assets/images/Avatar6.png"
            alt=""
            className="rounded-[50%] w-[100px] h-[100px] object-cover"
          />
          <h4 className="text-lg">Keepitreal</h4>
          <span className="text-[#858584]">
            Total Sales:{" "}
            <span className="text-green-500 ml-[0.3rem]">34.53 ETH</span>
          </span>
        </article>
        <article className="bg-[#3B3B3B] flex flex-col items-center justify-center gap-[0.5rem] p-[0.5rem] rounded-md h-[200px]">
          <img
            src="/src/assets/images/Avatar5.png"
            alt=""
            className="rounded-[50%] w-[100px] h-[100px] object-cover"
          />
          <h4 className="text-lg">Keepitreal</h4>
          <span className="text-[#858584]">
            Total Sales:{" "}
            <span className="text-green-500 ml-[0.3rem]">34.53 ETH</span>
          </span>
        </article>
        <article className="bg-[#3B3B3B] flex flex-col items-center justify-center gap-[0.5rem] p-[0.5rem] rounded-md h-[200px]">
          <img
            src="/src/assets/images/Avatar4.png"
            alt=""
            className="rounded-[50%] w-[100px] h-[100px] object-cover"
          />
          <h4 className="text-lg">Keepitreal</h4>
          <span className="text-[#858584]">
            Total Sales:{" "}
            <span className="text-green-500 ml-[0.3rem]">34.53 ETH</span>
          </span>
        </article>
        <article className="bg-[#3B3B3B] flex flex-col items-center justify-center gap-[0.5rem] p-[0.5rem] rounded-md h-[200px]">
          <img
            src="/src/assets/images/Avatar3.png"
            alt=""
            className="rounded-[50%] w-[100px] h-[100px] object-cover"
          />
          <h4 className="text-lg">Keepitreal</h4>
          <span className="text-[#858584]">
            Total Sales:{" "}
            <span className="text-green-500 ml-[0.3rem]">34.53 ETH</span>
          </span>
        </article>
        <article className="bg-[#3B3B3B] flex flex-col items-center justify-center gap-[0.5rem] p-[0.5rem] rounded-md h-[200px]">
          <img
            src="/src/assets/images/Avatar2.png"
            alt=""
            className="rounded-[50%] w-[100px] h-[100px] object-cover"
          />
          <h4 className="text-lg">Keepitreal</h4>
          <span className="text-[#858584]">
            Total Sales:{" "}
            <span className="text-green-500 ml-[0.3rem]">34.53 ETH</span>
          </span>
        </article>
        <article className="bg-[#3B3B3B] flex flex-col items-center justify-center gap-[0.5rem] p-[0.5rem] rounded-md h-[200px]">
          <img
            src="/src/assets/images/avatar1.png"
            alt=""
            className="rounded-[50%] w-[100px] h-[100px] object-cover"
          />
          <h4 className="text-lg">Keepitreal</h4>
          <span className="text-[#858584]">
            Total Sales:{" "}
            <span className="text-green-500 ml-[0.3rem]">34.53 ETH</span>
          </span>
        </article>
      </section>
    </div>
  );
};

export default TopCreator;
