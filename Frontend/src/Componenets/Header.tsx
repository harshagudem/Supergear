import React, { useEffect, useState } from "react";
import { logo } from "../assets";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { FiUser, FiStar, FiShoppingCart, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { config } from "../../config";
import { getData } from "../lib";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { CategoryProps } from "../../type";

const bottomNavigation = [
  { title: "Home", link: "/" },
  { title: "Shop", link: "/product" },
  { title: "Cart", link: "/cart" },
  { title: "Orders", link: "/orders" },
  { title: "My Account", link: "/profile" },
  { title: "Blog", link: "/blog" },
];

function Header() {
  const [searchText, setsearchText] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}categories`;
      try {
        const data = await getData(endpoint);
        setCategories(data);
      } catch (error) {
        console.log("Error on fetching data", error);
      }
    };
    fetchData();
  },[]);

  return (
    <div className="w-full bg-white md:sticky md:top-0 z-50">
      <div className="max-w-screen-xl mx-auto h-8 flex item-center justify-between px-4 lg:px-0 mt-5">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-44" />
        </Link>
        <div className=" hidden md:inline-flex max-w-3xl w-full relative">
          <input
            type="text"
            onChange={(e) => setsearchText(e.target.value)}
            value={searchText}
            placeholder="Search for Products"
            className="w-full flex-1 rounded-full text-gray-900 text-lg placeholder:text-base placeholder:tracking-wide shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-normal focus:ring-1  focus:ring-darkText sm:text-sm px-4 py-2"
          />
          {searchText ? (
            <IoClose
              className="absolute top-2.5 right-4 text-xl hover:text-red-500 cursor-pointer duration-200"
              onClick={() => setsearchText("")}
            />
          ) : (
            <IoSearchOutline className="absolute top-2.5 right-3 text-xl" />
          )}
        </div>
        <div className="flex item-center gap-x-6 text-2xl">
          <Link to={"/profile"}>
            <FiUser className="hover:text-skyText duration-200 cursor-pointer" />
          </Link>
          <Link to={"/favourite"} className="relative">
            <FiStar className="hover:text-skyText duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute top-0 right-0 text-[9px] rounded-full w-4 h-4 transform translate-x-1/2 -translate-y-1/2">
              0
            </span>
          </Link>
          <Link to={"/cart"} className="relative">
            <FiShoppingCart className="hover:text-skyText duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center bg-redText text-whiteText absolute top-0 right-0 text-[9px] rounded-full w-4 h-4 transform translate-x-1/2 -translate-y-1/2">
              0
            </span>
          </Link>
        </div>
      </div>
      <div className="w-full bg-darkText text-white mt-5 h-12">
        <div className="py-2 max-w-4xl flex items-center gap-10 justify-between mx-auto">
          <Menu>
            <MenuButton className="inline-flex items-center gap-2 rounded-md border border-gray-400 hover:border-white py-1.5 px-3 font-semibold text-gray-300 hover:text-whiteText">
              Select Catogery <FiChevronDown className="text-base mt-1" />
            </MenuButton>
            <Transition
              enter="transition ease-out duration-75"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <MenuItems
                anchor="bottom end"
                className="w-52 orogin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-gray-300 [--anchor-gap:var(--spacing-1)] focus:outline-none hover:text-white z-50"
              >
                {categories.map((item: CategoryProps) => (
                  <MenuItem key={item?._id}>
                    <Link to={`/category/${item?._base}`} className="flex w-full item-center gap-2 rounded-lg py-2 px-3 data-[focus]:bg-white/80 tracking-wide">
                      <img
                        src={item?.image}
                        alt="categoriesImage"
                        className="w-6 h-6 rounded-md"
                      />
                      {item?.name}
                    </Link>
                  </MenuItem>
                ))}
              </MenuItems>
            </Transition>
          </Menu>
          {/* <p className='flex items-center gap-2'></p> */}
          {bottomNavigation.map(({ title, link }) => (
            <Link
              to={link}
              key={title}
              className="uppercase hidden md:inline-flex text-sm font-semibold text-whiteText/90 hover:textWhite dutaion-200 relative overflow-hidden group "
            >
              {title}
              {/* <span className="inline-flex w-full h-[1px] bg-whiteText absolute bottom-0 left-0 transform -translate-x-[105%] group-hover:translate-x-0 duration-300" /> */}
              <span className="absolute bottom-0 left-0 w-full block h-[1px] bg-white -translate-x-[100%] group-hover:translate-x-0 duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
