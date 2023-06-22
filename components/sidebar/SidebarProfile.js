import { useAddress } from "@thirdweb-dev/react";
import Link from "next/link";
const SidebarProfile = () => {
   const address = useAddress();
   if (!address) return null;
   return (
      <div className="w-[210px] text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
         <Link
            href={`/profile/${address}`}
            className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
         >
            <svg
               aria-hidden="true"
               className="w-4 h-4 mr-2 fill-current"
               fill="currentColor"
               viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
               ></path>
            </svg>
            Profile
         </Link>
         <Link
            href="/create"
            className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
         >
            <img
               src="https://simpleicon.com/wp-content/uploads/pencil.png"
               width={18}
               className="mr-1"
            />
            Create
         </Link>
      </div>
   );
};

export default SidebarProfile;
