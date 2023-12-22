import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import connectMetamask from "../../utils/connectMetamask";

const Navbar = () => {
  const [address, setAddress] = React.useState("");
  const [first5Digits, setFirst5Digits] = React.useState("");
  const [last5Digits, setLast5Digits] = React.useState("");

  const handleConnectMetamask = async () => {
    const connect = await connectMetamask();
    setAddress(connect);
    if (connect) {
      setFirst5Digits(connect.slice(0, 5));
      setLast5Digits(connect.slice(-5));
    }
  };

  const activeStyle = "bg-purple-500 font-bold px-2 py-1 rounded";
  const inactiveStyle = "hover:bg-purple-500 px-2 py-1 rounded duration-300";
  const navigations = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "Explore",
      path: "/explore",
    },

    {
      name: "Faq",
      path: "/faq",
    },
  ];
  return (
    <nav
      className="
      flex md:flex-row flex-col justify-between items-center gap-[1.5rem]
    "
    >
      <ul className="flex md:flex-row flex-col items-center md:gap-[1rem] gap-[3rem]">
        {navigations.map((navigation, index) => (
          <li key={index}>
            <NavLink
              to={navigation.path}
              className={({ isActive }) =>
                isActive ? activeStyle : inactiveStyle
              }
            >
              {navigation.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <Button size="small" variant="primary">
        <NavLink to="/login">Login</NavLink>
      </Button>
      <Button size="small" variant="primary">
        <NavLink to="/register">Register</NavLink>
      </Button>
      <Button onClick={handleConnectMetamask} size="small" variant="secondary">
        {address ? `${first5Digits}...${last5Digits}` : "Connect Metamask"}
      </Button>
    </nav>
  );
};

export default Navbar;
