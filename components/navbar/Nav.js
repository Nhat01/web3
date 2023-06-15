import { BellIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";
import Search from "./Search";
import { ConnectWallet } from "@thirdweb-dev/react";
import SidebarProfile from "../sidebar/SidebarProfile";
import { useState } from "react";

const Nav = () => {
   const [isOpen, setOpen] = useState(false);
   const [isOpenSideBar, setOpenSideBar] = useState(false);

   return (
      <div className="grid md:grid-cols-[14%_auto_30%] grid-cols-2 gap-size-space items-center overflow-hidden px-size-space max-w-[90rem] m-auto">
         <Logo />
         <Search />
         <div className="w-full flex justify-between items-center">
            <button className="rounded-full bg-white">
               <BellIcon className="w-7 h-7 text-gray-600" />
            </button>
            <div
               onMouseEnter={() => {
                  setOpenSideBar(true);
               }}
               onMouseLeave={() => setOpenSideBar(false)}
               className=""
            >
               <ConnectWallet theme="light" />
            </div>
            <div
               onMouseEnter={() => setOpenSideBar(true)}
               onMouseLeave={() => setOpenSideBar(false)}
               className="hidden lg:block absolute z-20 top-[70px] right-[55px] row-span-3 lg:w-[13.5%] 2xl:w-[195px]"
            >
               {isOpenSideBar && <SidebarProfile />}
            </div>
         </div>
      </div>
   );
};

export default Nav;
