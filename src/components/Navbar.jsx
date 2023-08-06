import React, { useState } from "react";
import Menu from "./Menu";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import CardContainer from "./CardContainer";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [genre, setGenre] = useState("");

  const handleMenu = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <div className="w-full h-16 flex justify-center text-purple-600 bg-purple-300">
        <nav className="w-4/5 flex justify-between items-center">
          <div className="text-purple-800 text-3xl font-semibold px-4 py-1">
            Berchha
          </div>
          <div>
            <div
              onClick={handleMenu}
              className="flex w-auto justify-between items-center text-xl font-semibold cursor-pointer px-3 py-2 transition duration-300 hover:bg-purple-600 hover:text-purple-50"
            >
              <button>Menu</button>
              <div className="text-2xl">
                <HiOutlineBars3BottomLeft />
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div
        className={`transition duration-500 ease-in-out ${
          visible ? "translate-x-0" : "translate-x-[-2000px]"
        }`}
      >
        <Menu visible={visible} setVisible={setVisible} setGenre={setGenre} />
      </div>
      <div>{genre ? <CardContainer genre={genre} /> : "cards nahi he"}</div>;
    </div>
  );
}
