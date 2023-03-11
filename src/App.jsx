import { useState } from "react";
import {
  RiMenuLine,
  RiAliensLine,
  RiAddFill,
  RiShoppingBag3Line,
  RiCloseFill
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
      <Sidebar showMenu={showMenu}/>
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
          {showMenu ? <RiCloseFill/> : <RiMenuLine />}
        </button>
      </nav>
    </div>
  );
}

export default App;
