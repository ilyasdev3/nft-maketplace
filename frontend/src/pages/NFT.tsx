import React from "react";
import Dashboard from "../components/Dashboard";
import Header from "../components/reuseable/Header";
import Button from "../components/reuseable/Button";

const NFT = () => {
  return (
    <Dashboard>
      <Header />
      <section className="flex gap-[2rem] md:flex-row flex-col pt-[3rem]">
        <section className="flex-1">
          <img
            className="w-full object-cover h-[500px] rounded-lg"
            src="/src/assets/images/cartoon-character-with-fashion-bag.jpg"
            alt=""
          />
        </section>
        <section className="flex-[1.4]">
          <span className="text-base text-gray-500">Ilyas Khan</span>
          <h1 className="md:text-3xl text-2xl font-bold my-[1rem]">
            Women Unite Silver Throne Pass
          </h1>

          <section className="flex gap-[3rem]">
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
              <span>Owners</span>
            </div>
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
              <span>Items</span>
            </div>
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
              <span>Favourites</span>
            </div>
          </section>

          <section className="bg-[#3B3B3B] p-[1rem] rounded-lg my-[2rem]">
            <span>Current Price</span>
            <section className="flex flex-row justify-between items-start my-[1rem]">
              <div className="flex items-center gap-[1rem]">
                {" "}
                <h2 className="text-3xl font-bold">0.822 ETH</h2>
                <span>$1,674.39</span>
              </div>
              <div className="">
                <div className="border border-gray-500  rounded-xl">
                  {" "}
                  <button className=" text-white px-[20px] py-[10px] text-2xl font-bold rounded-lg hover:bg-gray-500 duration-300">
                    -
                  </button>
                  <span className="text-2xl font-bold rounded-lg">1</span>
                  <button className="text-white px-[20px] py-[10px] text-2xl font-bold rounded-lg hover:bg-gray-500 duration-300">
                    +
                  </button>
                </div>
              </div>
            </section>
            <Button> Buy Now</Button>
          </section>
          <section className="bg-[#3B3B3B] p-[1rem] rounded-lg my-[2rem]">
            <h2
              className="text-2xl font-bold my-[1rem] text-center"
              style={{ color: "#fff" }}
            >
              Price History
            </h2>
            <img
              src="/src/assets/images/RGSK7L6F3RNQXN7GKY22CEJ3YI.png"
              alt=""
            />
          </section>
        </section>
      </section>

      {/* Recommended  */}

      <section className="my-[2rem]">
        <h2 className="text-2xl font-bold my-[1rem]">Recommended</h2>
        <div className="grid  gap-[2rem] lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          <article className="bg-[#3B3B3B] rounded-lg">
            <img
              src="/src/assets/images/cyber-cat-with-giant-electro-flowers-sunrise-generative-ai.jpg"
              className="w-full object-cover h-[270px] rounded-t-lg"
              alt=""
            />
            <main className="p-[1rem]">
              <h3 className="font-semi-bold text-lg">Distant Galaxy</h3>
              <div className="flex flex-row items-center gap-[1rem]">
                <img
                  className="w-[40px] h-[40px] rounded-full "
                  src="/src/assets/images/cyber-cat-with-giant-electro-flowers-sunrise-generative-ai.jpg"
                  alt=""
                />
                <span>Animakid</span>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <span className="text-[#858584]">Price</span>
                  <span className="">0.1 ETH</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#858584]">Highest Bid</span>
                  <span className="">0.33 wETH</span>
                </div>
              </div>
            </main>
          </article>
          <article className="bg-[#3B3B3B] rounded-lg">
            <img
              src="/src/assets/images/cyber-cat-with-giant-electro-flowers-sunrise-generative-ai.jpg"
              className="w-full object-cover h-[270px] rounded-t-lg"
              alt=""
            />
            <main className="p-[1rem]">
              <h3 className="font-semi-bold text-lg">Distant Galaxy</h3>
              <div className="flex flex-row items-center gap-[1rem]">
                <img
                  className="w-[40px] h-[40px] rounded-full "
                  src="/src/assets/images/cyber-cat-with-giant-electro-flowers-sunrise-generative-ai.jpg"
                  alt=""
                />
                <span>Animakid</span>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <span className="text-[#858584]">Price</span>
                  <span className="">0.1 ETH</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#858584]">Highest Bid</span>
                  <span className="">0.33 wETH</span>
                </div>
              </div>
            </main>
          </article>
          <article className="bg-[#3B3B3B] rounded-lg">
            <img
              src="/src/assets/images/cyber-cat-with-giant-electro-flowers-sunrise-generative-ai.jpg"
              className="w-full object-cover h-[270px] rounded-t-lg"
              alt=""
            />
            <main className="p-[1rem]">
              <h3 className="font-semi-bold text-lg">Distant Galaxy</h3>
              <div className="flex flex-row items-center gap-[1rem]">
                <img
                  className="w-[40px] h-[40px] rounded-full "
                  src="/src/assets/images/cyber-cat-with-giant-electro-flowers-sunrise-generative-ai.jpg"
                  alt=""
                />
                <span>Animakid</span>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <span className="text-[#858584]">Price</span>
                  <span className="">0.1 ETH</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#858584]">Highest Bid</span>
                  <span className="">0.33 wETH</span>
                </div>
              </div>
            </main>
          </article>
          <article className="bg-[#3B3B3B] rounded-lg">
            <img
              src="/src/assets/images/cyber-cat-with-giant-electro-flowers-sunrise-generative-ai.jpg"
              className="w-full object-cover h-[270px] rounded-t-lg"
              alt=""
            />
            <main className="p-[1rem]">
              <h3 className="font-semi-bold text-lg">Distant Galaxy</h3>
              <div className="flex flex-row items-center gap-[1rem]">
                <img
                  className="w-[40px] h-[40px] rounded-full "
                  src="/src/assets/images/cyber-cat-with-giant-electro-flowers-sunrise-generative-ai.jpg"
                  alt=""
                />
                <span>Animakid</span>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <span className="text-[#858584]">Price</span>
                  <span className="">0.1 ETH</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#858584]">Highest Bid</span>
                  <span className="">0.33 wETH</span>
                </div>
              </div>
            </main>
          </article>
        </div>
      </section>
    </Dashboard>
  );
};

export default NFT;
