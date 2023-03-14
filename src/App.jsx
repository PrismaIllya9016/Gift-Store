import { useState } from "react";
import {
  RiMenuLine,
  RiAliensLine,
  RiAddFill,
  RiShoppingBag3Line,
  RiCloseFill,
  RiSearch2Line,
} from "react-icons/ri";
//Component
import Sidebar from "./components/shared/Sidebar.jsx";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-[#353941] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      {/* Movile Menu */}
      <nav className="bg-[#80161f] lg:hidden fixed w-full bottom-0 left-0 text-xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiAliensLine />
        </button>
        <button className="p-2">
          <RiAddFill />
        </button>
        <button className="p-2">
          <RiShoppingBag3Line />
        </button>
        <button onClick={toggleMenu} className="p-2">
          {showMenu ? <RiCloseFill /> : <RiMenuLine />}
        </button>
      </nav>
      <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8">
        <div className="lg:col-span-6">
          {/*Header*/}
          <header className="p-4">
            {/*Title and Search*/}
            <div className="flex flex-col gap-4 mb-6">
              <div>
                <h1 className="text-2xl text-gray-300">Aerospace Gift Shop</h1>
                <p className="text-gray-500">13 Marzo 2023</p>
              </div>
              <form>
                <div className="w-full relative">
                  <RiSearch2Line className="absolute left-1 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input
                    placeholder="Search"
                    className="bg-gray-600 w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
                    type="text"
                  />
                </div>
              </form>
            </div>
            {/*Tabs*/}
            <nav className="text-gray-300 flex items-center justify-between border-b">
              <a
                href=""
                className="relative py-2 pr-4 text-[#80161f] before:w-1/2 before:h-[2px] before:absolute before:bg-[#80161f] before:left-0 before:rounded-full before:-bottom-[1px]"
              >
                Aerospace
              </a>
              <a href="" className=" py-2 pr-4">
                Gifts
              </a>
              <a href="" className=" py-2 pr-4">
                Food
              </a>
              <a href="" className=" py-2">
                Tech
              </a>
            </nav>
          </header>
        </div>
        <div className="lg:col-span-2 fixed lg:static right-0">Carrito</div>
      </main>
    </div>
  );
}

export default App;
