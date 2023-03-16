import { useState } from "react";
import {
  RiMenuLine,
  RiAliensLine,
  RiAddFill,
  RiShoppingBag3Line,
  RiCloseFill,
  RiSearch2Line,
  RiArrowDownSLine,
  RiDeleteBin2Line,
} from "react-icons/ri";
//Component
import Sidebar from "./components/shared/Sidebar.jsx";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  return (
    <div className="bg-gray-800 w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      {/* Movile Menu */}
      <nav className="bg-[#80161f] lg:hidden fixed w-full bottom-0 left-0 text-xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiAliensLine />
        </button>
        <button className="p-2">
          <RiAddFill />
        </button>
        <button onClick={toggleOrders} className="p-2">
          <RiShoppingBag3Line />
        </button>
        <button onClick={toggleMenu} className="p-2">
          {showMenu ? <RiCloseFill /> : <RiMenuLine />}
        </button>
      </nav>
      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 pb-20">
        <div className="lg:col-span-6 md:p-8 p-4">
          {/*Header*/}
          <header className="p-4">
            {/*Title and Search*/}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
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
            <nav className="text-gray-300 flex items-center justify-between border-b mb-6 md:justify-start md:gap-10">
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
          {/*Title Content*/}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300 p-4">Products</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-gray-600 py-2 px-4 rounded-lg">
              <RiArrowDownSLine />
              Aircraft{" "}
            </button>
          </div>
          {/*Content*/}
          <div className="p-8 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {/*Card*/}
            <div className="bg-gray-900 p-8 rounded-xl flex flex-col items-center gap-2 text-gray-300 text-center">
              <img
                src="https://m.media-amazon.com/images/I/61Rf6dXk9YL._AC_SL1000_.jpg"
                className="w-40 h-40 object-cover -mt-20 rounded-full shadow-2xl"
                alt=""
              />
              <p className="text-xl">Combat aircraft model, night light</p>
              <span className="text-gray-400">$378.15</span>
              <p className="text-gray-600">15 units avaidable</p>
            </div>
            {/*Card*/}
            <div className="bg-gray-900 p-8 rounded-xl flex flex-col items-center gap-2 text-gray-300 text-center">
              <img
                src="https://img.freepik.com/premium-photo/wood-toy-airplane-wood-table-with-blue-clean-background_43379-60.jpg"
                className="w-40 h-40 object-cover -mt-20 rounded-full shadow-2xl"
                alt=""
              />
              <p className="text-xl">Wood toy airplane</p>
              <span className="text-gray-400">$50</span>
              <p className="text-gray-600">1 unit avaidable</p>
            </div>
            {/*Card*/}
            <div className="bg-gray-900 p-8 rounded-xl flex flex-col items-center gap-2 text-gray-300 text-center">
              <img
                src="https://cdn.thewirecutter.com/wp-content/media/2022/10/drones-2048px-0706-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=980&dpr=2"
                className="w-40 h-40 object-cover -mt-20 rounded-full shadow-2xl"
                alt=""
              />
              <p className="text-xl"> DJI Air 2S</p>
              <span className="text-gray-400">$24,206.50</span>
              <p className="text-gray-600">3 units avaidable</p>
            </div>
            {/*Card*/}
            <div className="bg-gray-900 p-8 rounded-xl flex flex-col items-center gap-2 text-gray-300 text-center">
              <img
                src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51bURq5U6wL._AC_SL1500_.jpg"
                className="w-40 h-40 object-cover -mt-20 rounded-full shadow-2xl"
                alt=""
              />
              <p className="text-xl">DJI Mini 2</p>
              <span className="text-gray-400">$7,288.97</span>
              <p className="text-gray-600">43 units avaidable</p>
            </div>
            {/*Card*/}
            <div className="bg-gray-900 p-8 rounded-xl flex flex-col items-center gap-2 text-gray-300 text-center">
              <img
                src="https://cdn.shopify.com/s/files/1/1226/7914/products/IN71.jpg?v=1674157761"
                className="w-40 h-40 object-cover -mt-20 rounded-full shadow-2xl"
                alt=""
              />
              <p className="text-xl">SR-71 Blackbird</p>
              <span className="text-gray-400">$322.05</span>
              <p className="text-gray-600">45 units avaidable</p>
            </div>
            {/*Card*/}
            <div className="bg-gray-900 p-8 rounded-xl flex flex-col items-center gap-2 text-gray-300 text-center">
              <img
                src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71wKGBIcGrL._AC_SL1500_.jpg"
                className="w-40 h-40 object-cover -mt-20 rounded-full shadow-2xl"
                alt=""
              />
              <p className="text-xl">Transbordador espacial Rocket Toy</p>
              <span className="text-gray-400">$455.81</span>
              <p className="text-gray-600">9 units avaidable</p>
            </div>
            {/*Card*/}
            <div className="bg-gray-900 p-8 rounded-xl flex flex-col items-center gap-2 text-gray-300 text-center">
              <img
                src="https://cdn.shopify.com/s/files/1/1226/7914/products/INSPSH_4e9ac01d-c6a3-4085-b358-dde27409ecb0.jpg?v=1556552789"
                className="w-40 h-40 object-cover -mt-20 rounded-full shadow-2xl"
                alt=""
              />
              <p className="text-xl">InAir E-Z Build Model Kit - Space Shuttle</p>
              <span className="text-gray-400">$379.05</span>
              <p className="text-gray-600">Last available!</p>
            </div>
          </div>
        </div>

        <div
          className={`lg:col-span-2 fixed  top-0 bg-[#80161f] w-full h-full transition-all lg:right-0 lg:w-96
        ${showOrder ? "right-0" : "-right-full"}`}
        >
          {/*Cart*/}
          <div className="relative lg:pt-8 pt-16 text-gray-300 p-8  h-full">
            <button className="lg:hidden" onClick={toggleOrders}>
              <RiCloseFill className="absolute left-4 top-4 p-2 box-content text-gray-300 bg-red-600 rounded-full text-xl" />
            </button>
            <h1 className="text-2xl my-4">Order #34553</h1>
            {/*Tabs*/}
            <div className="flex items-center gap-4 flex-wrap mb-8">
              <button className="bg-gray-600 text-white py-2 px-4 text-sm rounded-xl">
                Order
              </button>
              <button className=" hover:bg-gray-600 text-white py-2 px-4 rounded-xl border text-sm border-gray-600">
                Past Orders
              </button>
              <button className=" hover:bg-gray-600 text-white py-2 px-4 rounded-xl border text-sm border-gray-600">
                Delivery
              </button>
            </div>
            {/*Cart */}
            <div>
              <div className="grid grid-cols-6 mb-4 p-4">
                <h5 className="col-span-4">Item</h5>
                <h5>Qty</h5>
                <h5>Price</h5>
              </div>
              {/*Products*/}
              <div className="h-[400px] md:h-[700px] lg:h-[540px] overflow-scroll">
                {/* Orders Card */}
                <div className="bg-gray-600 p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6">
                    {/*Product Description*/}
                    <div className="flex items-center gap-2 col-span-4 mb-2">
                      <img
                        className="w-12 h-12 rounded-full object-cover"
                        src="https://m.media-amazon.com/images/I/61Rf6dXk9YL._AC_SL1000_.jpg"
                        alt=""
                      />
                      <div>
                        <h5 className="text-sm">Combat aircra...</h5>
                        <p className="text-xs text-gray-800">$378.15</p>
                      </div>
                    </div>
                    {/*QTY*/}
                    <div className="px-2">
                      <span>2</span>
                    </div>
                    {/*Price*/}
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  {/*Comments*/}
                  <div className="grid grid-cols-6 items-center gap-2">
                    <div className=" col-span-4">
                      <input
                        className="bg-gray-800 rounded-lg px-2 py-2 outline-none"
                        placeholder="Leave a comment"
                        type="text"
                      />
                    </div>
                    <div className="col-span-2 text-center ml-9 ">
                      <button className="border border-red-500 p-2 rounded-lg">
                        <RiDeleteBin2Line className="text-red-500 text-2xl" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Orders Card */}
                <div className="bg-gray-600 p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6">
                    {/*Product Description*/}
                    <div className="flex items-center gap-2 col-span-4 mb-2">
                      <img
                        className="w-12 h-12 rounded-full object-cover"
                        src="https://m.media-amazon.com/images/I/61Rf6dXk9YL._AC_SL1000_.jpg"
                        alt=""
                      />
                      <div>
                        <h5 className="text-sm">Combat aircra...</h5>
                        <p className="text-xs text-gray-800">$378.15</p>
                      </div>
                    </div>
                    {/*QTY*/}
                    <div className="px-2">
                      <span>2</span>
                    </div>
                    {/*Price*/}
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  {/*Comments*/}
                  <div className="grid grid-cols-6 items-center gap-2">
                    <div className=" col-span-4">
                      <input
                        className="bg-gray-800 rounded-lg px-2 py-2 outline-none"
                        placeholder="Leave a comment"
                        type="text"
                      />
                    </div>
                    <div className="col-span-2 text-center ml-9 ">
                      <button className="border border-red-500 p-2 rounded-lg">
                        <RiDeleteBin2Line className="text-red-500 text-2xl" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Orders Card */}
                <div className="bg-gray-600 p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6">
                    {/*Product Description*/}
                    <div className="flex items-center gap-2 col-span-4 mb-2">
                      <img
                        className="w-12 h-12 rounded-full object-cover"
                        src="https://m.media-amazon.com/images/I/61Rf6dXk9YL._AC_SL1000_.jpg"
                        alt=""
                      />
                      <div>
                        <h5 className="text-sm">Combat aircra...</h5>
                        <p className="text-xs text-gray-800">$378.15</p>
                      </div>
                    </div>
                    {/*QTY*/}
                    <div className="px-2">
                      <span>2</span>
                    </div>
                    {/*Price*/}
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  {/*Comments*/}
                  <div className="grid grid-cols-6 items-center gap-2">
                    <div className=" col-span-4">
                      <input
                        className="bg-gray-800 rounded-lg px-2 py-2 outline-none"
                        placeholder="Leave a comment"
                        type="text"
                      />
                    </div>
                    <div className="col-span-2 text-center ml-9 ">
                      <button className="border border-red-500 p-2 rounded-lg">
                        <RiDeleteBin2Line className="text-red-500 text-2xl" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Orders Card */}
                <div className="bg-gray-600 p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6">
                    {/*Product Description*/}
                    <div className="flex items-center gap-2 col-span-4 mb-2">
                      <img
                        className="w-12 h-12 rounded-full object-cover"
                        src="https://m.media-amazon.com/images/I/61Rf6dXk9YL._AC_SL1000_.jpg"
                        alt=""
                      />
                      <div>
                        <h5 className="text-sm">Combat aircra...</h5>
                        <p className="text-xs text-gray-800">$378.15</p>
                      </div>
                    </div>
                    {/*QTY*/}
                    <div className="px-2">
                      <span>2</span>
                    </div>
                    {/*Price*/}
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  {/*Comments*/}
                  <div className="grid grid-cols-6 items-center gap-2">
                    <div className=" col-span-4">
                      <input
                        className="bg-gray-800 rounded-lg px-2 py-2 outline-none"
                        placeholder="Leave a comment"
                        type="text"
                      />
                    </div>
                    <div className="col-span-2 text-center ml-9 ">
                      <button className="border border-red-500 p-2 rounded-lg">
                        <RiDeleteBin2Line className="text-red-500 text-2xl" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Submit Payment*/}
            <div className="bg-gray-600 absolute bottom-0 left-0 p-4 w-full">
              <div className="flex items-center justify-between mb-4">
                <span className=""> Discount </span>
                <span>$0</span>
              </div>
              <div className="flex items-center justify-between mb-6">
                <span> Sub total </span>
                <span>$123213</span>
              </div>
              <div>
                <button className="bg-[#80161f] w-full py-2 px-4 rounded-lg">
                  Continue to payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
