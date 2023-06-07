import Logo from "./Logo";
import Search from "./Search";

const Nav = () => {
   return (
      <div className="flex justify-around items-center px-size-space overflow-hidden max-w-[90rem] m-auto">
         <Logo />
         <Search />
         <div className="w-[25%]">
            <button className="bg-white py-2 px-7 rounded-xl font-bold text-sm">
               Connect
            </button>
         </div>
      </div>
   );
};

export default Nav;
