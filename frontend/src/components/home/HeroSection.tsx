import Button from "../reuseable/Button";

const HeroSection = () => {
  return (
    <div className="pt-[4rem] md:h-[90vh] flex justify-between gap-[2rem] md:flex-row flex-col items-center">
      <section className="flex-1 flex flex-col items-start gap-[2rem]">
        <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-2xl font-bold">
          Create, Sell & Collect Your Own Creative NFT
        </h1>
        <p className="text-gray-400 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit.
        </p>
        <div className="flex justify-between gap-[3rem]">
          <Button size="large" colors="primary">
            Create NFT
          </Button>
          <Button size="large" colors="secondary">
            Sell NFT
          </Button>
        </div>
        <div className="flex  gap-[3rem]">
          <div className=" text-center">
            <h3 className="font-bold text-2xl">37k+</h3>
            <span className="text-gray-400">Artworks</span>
          </div>
          <div className=" text-center">
            <h3 className="font-bold text-2xl">37k+</h3>
            <span className="text-gray-400">Artists</span>
          </div>
          <div className=" text-center">
            <h3 className="font-bold text-2xl">37k+</h3>
            <span className="text-gray-400">Aucations</span>
          </div>
        </div>
      </section>
      <section className="img-section flex-1 flex items-center md:justify-end">
        <img
          src="/src/assets/images/cartoon-character-with-fashion-bag.jpg"
          alt=""
          className="w-full h-[500px] object-cover"
        />
      </section>
    </div>
  );
};

export default HeroSection;
