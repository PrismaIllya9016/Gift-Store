import React from "react";
import { RiStore2Line } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="bg-[#80161f] fixed left-0 top-0 w-28 h-full">
      <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">
        LOGO
      </h1>
      <ul className="pl-4">
        <li className="bg-[#353941] p-4 rounded-tl-xl rounded-bl-xl">
          <a href="#" className="bg-[#80161f] p-4 block rounded-xl text-white">
            <RiStore2Line className="text-2xl "/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
