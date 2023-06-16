"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Link from "next/link";

const Search = () => {
   const [uri, setUri] = useState({
      title: "",
   });

   const handleFormFieldChangeForm = (fieldName, e) => {
      setUri({ ...uri, [fieldName]: e.target.value });
   };
   return (
      <div className="flex-1 relative">
         <input
            type="text"
            placeholder="Search"
            className="w-[100%] h-[35px] rounded-xl px-[10px] "
            onChange={(e) => handleFormFieldChangeForm("title", e)}
         />
         <Link href={{ pathname: `/search`, query: { data: `${uri.title}` } }}>
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500/100 absolute right-[10px] top-[8px]" />
         </Link>
      </div>
   );
};

export default Search;
