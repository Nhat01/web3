import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
   return (
      <div className="flex-1 mx-size-space relative">
         <input
            type="text"
            placeholder="Search"
            className="w-[100%] h-[35px] rounded-xl px-[10px] "
         />
         <button>
            <MagnifyingGlassIcon class="h-5 w-5 text-gray-500/100 absolute right-[10px] top-[8px]" />
         </button>
      </div>
   );
};

export default Search;
