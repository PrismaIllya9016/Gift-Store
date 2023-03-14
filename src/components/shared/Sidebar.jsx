import React from "react";
import {
  RiStore2Line,
  RiShoppingBag3Line,
  RiMailLine,
  RiNotification2Line,
  RiSettings3Line,
  RiLogoutBoxRLine,
} from "react-icons/ri";

const Sidebar = (props) => {
  const { showMenu } = props;

  return (
    <div
      className={`bg-[#80161f] fixed lg:left-0 transition-all top-0 w-28 h-full flex flex-col justify-between py-6 rounded-br-xl rounded-tr-xl z-50 
      ${showMenu ? "left-0" : "-left-full"}`}
    >
      <div>
        <ul className="pl-4">
          <div className="text-2xl text-gray-300 uppercase font-bold text-center my-5">
            <img
              src="public\twitter_400x400.png"
              className="rounded-full"
              alt=""
            />
          </div>
          <li className="bg-gray-800 p-4 rounded-tl-xl rounded-bl-xl">
            <a
              href="#"
              className="bg-[#80161f] p-4 flex justify-center rounded-xl text-white"
            >
              <RiStore2Line className="text-2xl " />
            </a>
          </li>
          <li className="hover:bg-gray-800 p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="bg-[#80161f] p-4 flex justify-center rounded-xl group-hover:text-white transition-colors"
            >
              <RiShoppingBag3Line className="text-2xl " />
            </a>
          </li>
          <li className="hover:bg-gray-800 p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="bg-[#80161f] p-4 flex justify-center rounded-xl group-hover:text-white transition-colors"
            >
              <RiMailLine className="text-2xl " />
            </a>
          </li>
          <li className="hover:bg-gray-800 p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="bg-[#80161f] p-4 flex justify-center rounded-xl group-hover:text-white transition-colors"
            >
              <RiNotification2Line className="text-2xl " />
            </a>
          </li>
          <li className="hover:bg-gray-800 p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="bg-[#80161f] p-4 flex justify-center rounded-xl group-hover:text-white transition-colors"
            >
              <RiSettings3Line className="text-2xl " />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li className="hover:bg-gray-800 p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="bg-[#80161f] p-4 flex justify-center rounded-xl group-hover:text-white transition-colors"
            >
              <RiLogoutBoxRLine className="text-2xl " />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
