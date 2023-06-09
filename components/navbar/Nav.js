import { BellIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";
import Search from "./Search";

const Nav = () => {
   return (
      <div className="grid grid-cols-[14%_auto_30%] gap-size-space items-center overflow-hidden px-size-space max-w-[90rem] m-auto">
         <Logo />
         <Search />
         <div className="w-full flex justify-between items-center">
            <button className="rounded-full bg-white">
               <BellIcon className="w-7 h-7 text-gray-600" />
            </button>
            <button className="bg-white py-2 px-7 rounded-xl font-bold text-sm">
               Connect
            </button>
         </div>
      </div>
   );
};

export default Nav;
