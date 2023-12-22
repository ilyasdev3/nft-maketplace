import React from "react";

import Navbar from "./Navbar";

const Header = () => {
  const [show, setShow] = React.useState(true);

  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  const calculateScreenWidth = () => {
    const newScreenWidth = window.innerWidth;
    setScreenWidth(newScreenWidth);
    if (newScreenWidth > 768) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("resize", calculateScreenWidth);
    return () => window.removeEventListener("resize", calculateScreenWidth);
  }, [screenWidth]);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <header
      className={`flex md:flex-row md:sticky fixed z-50 md:bg-transparent ${
        show ? "bg-[#3B3B3B] w-[350px] h-[100vh] justify-center" : ""
      }  right-0 md:w-full md:h-full   flex-col md:justify-between  gap-[4rem] items-center py-4`}
    >
      <div className="md:hidden absolute top-[10px] right-[45px]">
        {" "}
        <button className="text-white" onClick={handleShow}>
          {show ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
      {show && (
        <>
          <section className="flex items-center gap-[1.5rem]">
            <h2
              className="
            text-2xl font-bold"
            >
              NFT Place
            </h2>
            {/* search bar */}
            {/* <span
            className=" 
               bg-gray-800 rounded-md
              flex items-center  gap-[0.7rem]
             px-4 py-2
          "
          >
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              name=""
              id=""
              className="bg-transparent border-none outline-none"
              placeholder="Search items and collections"
            />
          </span> */}
          </section>
          <section>
            <Navbar />
          </section>
        </>
      )}
    </header>
  );
};

export default Header;
