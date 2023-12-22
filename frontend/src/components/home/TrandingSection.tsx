import React from "react";

const TrandingSection = () => {
  return (
    <section className="mt-[3rem]">
      <h1 className="text-3xl font-bold my-[1rem]">Trending Collection</h1>
      <p>Checkout our weekly updated trending collection.</p>
      <div className="grid items-center justify-between lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        <article className="flex flex-col gap-[1rem] rounded-md p-4 ">
          <img
            src="/src/assets/images/2150898699.jpg"
            className="rounded-md w-[300px] h-[300px]  object-cover"
            alt=""
          />
          <h4 className="text-xl font-semibold">DSGN Animals</h4>
          <footer className="flex flex-row gap-[1rem] items-center">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src="/src/assets/images/design-unique-nft-art-for-you.jpeg"
              alt=""
            />
            <p>MrFox</p>
          </footer>
        </article>

        <article className="flex flex-col gap-[1rem] rounded-md p-4">
          <img
            src="/src/assets/images/cyber-cat-with-giant-electro-flowers-sunrise-generative-ai.jpg"
            className="rounded-md w-[300px] h-[300px] object-cover"
            alt=""
          />
          <h4 className="text-xl font-semibold">DSGN Animals</h4>
          <footer className="flex flex-row gap-[1rem] items-center">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src="/src/assets/images/design-unique-nft-art-for-you.jpeg"
              alt=""
            />
            <p>MrFox</p>
          </footer>
        </article>

        <article className="flex flex-col gap-[1rem] rounded-md p-4">
          <img
            src="/src/assets/images/cartoon-character-with-handbag-sunglasses.jpg"
            className="rounded-md w-[300px] h-[300px] object-cover"
            alt=""
          />
          <h4 className="text-xl font-semibold">DSGN Animals</h4>
          <footer className="flex flex-row gap-[1rem] items-center">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src="/src/assets/images/design-unique-nft-art-for-you.jpeg"
              alt=""
            />
            <p>MrFox</p>
          </footer>
        </article>

        <article className="flex flex-col gap-[1rem] rounded-md p-4 ">
          <img
            src="/src/assets/images/dog.png"
            className="rounded-md w-[300px] h-[300px] object-cover"
            alt=""
          />
          <h4 className="text-xl font-semibold">DSGN Animals</h4>
          <footer className="flex flex-row gap-[1rem] items-center">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src="/src/assets/images/design-unique-nft-art-for-you.jpeg"
              alt=""
            />
            <p>MrFox</p>
          </footer>
        </article>
      </div>
    </section>
  );
};

export default TrandingSection;
