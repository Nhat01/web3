import { BellIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";
import { ConnectWallet } from "@thirdweb-dev/react";
import SidebarProfile from "../sidebar/SidebarProfile";
import { useState } from "react";
import Link from "next/link";
import Search from "../search/Search";

const Nav = () => {
   const [isOpenSideBar, setOpenSideBar] = useState(false);

   return (
      <div className="grid md:grid-cols-[14%_auto_30%] grid-cols-2 gap-size-space items-center overflow-hidden px-size-space max-w-[90rem] m-auto">
         <Link href="/">
            <Logo />
         </Link>
         <Search />
         <div className="w-full flex justify-center items-center">
            <div
               onMouseEnter={() => {
                  setOpenSideBar(true);
               }}
               onMouseLeave={() => setOpenSideBar(false)}
               className=""
            >
               <ConnectWallet
                  theme="light"
                  className="hover:!bg-white hover:!text-black"
               />
            </div>
            <div
               onMouseEnter={() => setOpenSideBar(true)}
               onMouseLeave={() => setOpenSideBar(false)}
               className="block absolute z-20 top-[70px] xl:right-[calc((100%_-_74rem)/2)] row-span-3 "
            >
               {isOpenSideBar && <SidebarProfile />}
            </div>
         </div>
      </div>
   );
};

export default Nav;
