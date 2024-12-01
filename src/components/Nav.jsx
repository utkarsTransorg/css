"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/asset0.png";
import electron from "../assets/asset1.svg";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import BurgerMenuList from "./BurgerMenuList";

const Nav = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const menuClickHandler = () => setMenuClicked(!menuClicked);

  return (
    <div className="bg-white text-black ">
      <div className="w-[95%] mx-auto flex justify-between items-center py-3">
        <div className="flex ">
          <Image src={logo} />
          <p className="mt-3">ToDesktop</p>
        </div>

        <div className=" gap-5 font-medium hidden md:flex ">
          <Link href={"/"}>Pricing</Link>
          <Link href={"/"}>Docs</Link>
          <Link href={"/"}>Blogs</Link>
          <Link href={"/"}>Login</Link>
        </div>
        <button className="hidden md:flex border-black border-2 p-2 gap-1 rounded-xl py-3 px-3">
          <Image src={electron}></Image>
          <p>Electron Developers</p>
          <FaLongArrowAltRight style={{ marginTop: "3px" }} />
        </button>

        <div className="md:hidden ">
          {menuClicked ? (
            <RxCross2
              size={30}
              style={{ cursor: "pointer" }}
              onClick={menuClickHandler}
            />
          ) : (
            <MdOutlineMenu
              onClick={menuClickHandler}
              style={{ cursor: "pointer" }}
              size={30}
            ></MdOutlineMenu>
          )}

          {menuClicked && (
            <div className="fixed left-0 top-[70px] bg-white w-[100vw] h-full">
              <div className="w-[90%] mx-auto py-5 ">
                <BurgerMenuList />
                <div className="h-[0.5px] bg-black mt-7"></div>
                <div className="flex pt-7 gap-2">
                  <Image src={electron}></Image>
                  <p>Electron Developers</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
