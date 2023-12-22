import React from "react";
import Header from "../components/reuseable/Header";
import Button from "../components/reuseable/Button";
import Dashboard from "../components/Dashboard";

const Profile = () => {
  const [activeTab, setActiveTab] = React.useState("created");
  const [follow, setFollow] = React.useState(false);

  const handleFollow = () => {
    console.log("follow");

    setFollow(!follow);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gradient-black-gray text-white">
      <Dashboard>
        <Header />
      </Dashboard>
      <section className="relative">
        <img
          src="/src/assets/images/cyber-cat-with-giant-electro-flowers-sunrise-generative-ai.jpg"
          className="w-full object-cover h-[300px] rounded-md"
          alt=""
        />
        <img
          className="w-[100px] h-[100px] rounded-full absolute top-[250px] left-[15%] transform translate-x-[-50%] border-4 border-white"
          src="/src/assets/images/cartoon-character-with-yellow-jacket-sunglasses.jpg"
          alt=""
        />
      </section>
      <section className="flex md:flex-row flex-col justify-between md:items-center w-[80%] gap-[2rem] mt-[4rem] mx-auto">
        <section>
          <h1
            style={{ fontFamily: "Poppins" }}
            className="text-2xl font-bold mt-5"
          >
            Animakid
          </h1>
          <section>
            <div className="flex flex-row gap-[2rem] mt-5">
              <div className="flex flex-col gap-[0.5rem]">
                <p className="text-sm">Followers</p>
                <p className="text-lg font-bold">1.2K</p>
              </div>
              <div className="flex flex-col gap-[0.5rem]">
                <p className="text-sm">Following</p>
                <p className="text-lg font-bold">1.2K</p>
              </div>
              <div className="flex flex-col gap-[0.5rem]">
                <p className="text-sm">Listed</p>
                <p className="text-lg font-bold">1.2K</p>
              </div>
            </div>
          </section>
        </section>
        <section className="">
          <div className="flex flex-row gap-[2rem]">
            <Button>0x0a4...a7b</Button>
            <Button onClick={handleFollow}>
              {follow ? "Unfollow" : "Follow"}
            </Button>
          </div>
        </section>
      </section>
      <section className="mt-[4rem] w-[80%] mx-auto">
        <div className="flex flex-row justify-between items-start  gap-[2rem]">
          <button
            onClick={() => handleTabChange("created")}
            className={`${
              activeTab === "created" ? "border-b-2 border-gray-400" : ""
            } p-2`}
          >
            Created
          </button>
          <button
            onClick={() => handleTabChange("On Sale")}
            className={`${
              activeTab === "On Sale" ? "border-b-2 border-gray-400" : ""
            } p-2`}
          >
            On Sale
          </button>
          <button
            onClick={() => handleTabChange("purchased")}
            className={`${
              activeTab === "purchased" ? "border-b-2 border-gray-400" : ""
            } p-2`}
          >
            Purchased
          </button>
        </div>
      </section>
      <section className="mt-[4rem] w-[80%] mx-auto">
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
          <article className="bg-[#3B3B3B] rounded-t-lg">
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
    </div>
  );
};

export default Profile;
