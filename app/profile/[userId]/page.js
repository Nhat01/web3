import { StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Profile = () => {
   return (
      <div>
         <div className=" h-32 bg-gray-600"></div>
         <div className="h-56 bg-neutral-200 relative">
            <Image
               className="h-28 w-28 absolute  left-1/2 -translate-y-1/2  -translate-x-1/2 bg-white rounded-xl"
               alt="user avatar"
               src="/images/user_avatar.png"
               width="0"
               height="0"
               sizes="fill"
               style={{ objectFit: "contain" }}
            />
            <div className=" top-20 relative flex flex-col items-center">
               <h2 className="font-bold text-3xl">Sad Duck</h2>
               <div className="flex items-center bg-white rounded-2xl py-1 px-5 mt-2">
                  {/* <StarIcon className="w-6 h-6 " /> */}
                  <div class="star w-4 h-4 bg-[#05FF5A] relative">
                     <div class="star-inner"></div>
                  </div>
                  0x7a86c0b064171007716...
               </div>
               <span>
                  I make art with the simple goal of giving you something
                  pleasing to look at for a few seconds.
               </span>
            </div>
         </div>
         <div className=""></div>
      </div>
   );
};

export default Profile;
