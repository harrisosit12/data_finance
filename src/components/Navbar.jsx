import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] m-auto px-3 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">Data Finance</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Analytics</li>
        <li className="p-4">Projects</li>
        <li className="p-4">Contact</li>
        <li className="p-4">
          <button className="bg-white text-black rounded-sm w-[100px]">
            Get Started
          </button>
        </li>
      </ul>
      <div onClick={handleMenu} className="block sm:hidden m-auto">
        {menu ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          menu
            ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300 m-auto px-4 justify-between items-center"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] p-4">
          Data Finance
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Analytics</li>
          <li className="p-4 border-b border-gray-600">Projects</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
