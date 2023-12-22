import Header from "../components/reuseable/Header";

const ExploreNFT = () => {
  return (
    <div className="bg-gradient-black-gray text-white">
      <div className=" w-[80%] mx-auto">
        <Header />

        <section className="flex flex-col gap-[1rem] items-center justify-center text-center">
          <h1 className="text-3xl font-bold">Browse Marketplace</h1>
          <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
        </section>

        <section className="flex justify-between mt-[2rem] md:w-[50%] sm:w-[70%] w-[80%]  mx-auto">
          <span className="w-full flex items-center gap-[0.5rem] border border-gray-500 rounded-md p-[0.5rem]">
            <input
              placeholder="Search your favourite NFTs"
              type="text"
              className="bg-transparent placeholder:text-gray-500 outline-none w-[95%]"
            />
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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
        </section>
        <div className="grid items-center gap-[1rem] justify-between lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-[2rem]">
          <article className="flex flex-col gap-[1rem] rounded-md mx-auto">
            <img
              src="/src/assets/images/2150898699.jpg"
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

          <article className="flex flex-col gap-[1rem] rounded-md mx-auto">
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

          <article className="flex flex-col gap-[1rem] rounded-md mx-auto">
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

          <article className="flex flex-col gap-[1rem] rounded-md mx-auto">
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
          <article className="flex flex-col gap-[1rem] rounded-md mx-auto">
            <img
              src="/src/assets/images/2150898699.jpg"
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

          <article className="flex flex-col gap-[1rem] rounded-md mx-auto">
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

          <article className="flex flex-col gap-[1rem] rounded-md mx-auto">
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

          <article className="flex flex-col gap-[1rem] rounded-md mx-auto">
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
          <article className="flex flex-col gap-[1rem] rounded-md mx-auto">
            <img
              src="/src/assets/images/2150898699.jpg"
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

          <article className="flex flex-col gap-[1rem] rounded-md mx-auto">
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

          <article className="flex flex-col gap-[1rem] rounded-md mx-auto">
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

          <article className="flex flex-col gap-[1rem] rounded-md mx-auto ">
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
          <article className="flex flex-col gap-[1rem] rounded-md mx-auto">
            <img
              src="/src/assets/images/2150898699.jpg"
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

          <article className="flex flex-col gap-[1rem] rounded-md  mx-auto">
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

          <article className="flex flex-col gap-[1rem] rounded-md mx-auto">
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

          <article className="flex flex-col gap-[1rem] rounded-md mx-auto">
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
          <article className="flex flex-col gap-[1rem] rounded-md mx-auto">
            <img
              src="/src/assets/images/2150898699.jpg"
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

          <article className="flex flex-col gap-[1rem] rounded-md mx-auto">
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

          <article className="flex flex-col gap-[1rem] rounded-md mx-auto">
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

          <article className="flex flex-col gap-[1rem] rounded-md mx-auto">
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
          <article className="flex flex-col gap-[1rem] rounded-md mx-auto">
            <img
              src="/src/assets/images/2150898699.jpg"
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

          <article className="flex flex-col gap-[1rem] rounded-md mx-auto">
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

          <article className="flex flex-col gap-[1rem] rounded-md mx-auto">
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

          <article className="flex flex-col gap-[1rem] rounded-md mx-auto">
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
          <article className="flex flex-col gap-[1rem] rounded-md mx-auto">
            <img
              src="/src/assets/images/2150898699.jpg"
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

          <article className="flex flex-col gap-[1rem] rounded-md mx-auto">
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

          <article className="flex flex-col gap-[1rem] rounded-md mx-auto">
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

          <article className="flex flex-col gap-[1rem] rounded-md mx-auto">
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
      </div>
    </div>
  );
};

export default ExploreNFT;
