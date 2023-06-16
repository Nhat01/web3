// import Image from "next/image";

// const Info = () => {
//    return (
//       <div className="md:flex w-full h-[280px] items-center">
//          <div className="bg-white flex-1 rounded-lg md:flex relative h-full">
//             <div className="md:w-[55%] p-5 pb-0 z-[2] flex flex-col h-full">
//                <h1 className="pb-[15px] text-3xl md:text-2xl font-bold">
//                   ĐÂY LÀ TIÊU ĐỀ 1 NÈ HE!!!
//                </h1>
//                <p className="text-[14px]">
//                   Đây là trang web của CLB Coder. Nếu bạn yêu thích hãy để lại 1
//                   Like và một chút tấm lòng để chúng mình có thêm động lực làm
//                   tiếp.
//                </p>
//                <div className=" flex-1 flex items-center justify-center">
//                   <button
//                      type="button"
//                      className="py-1 px-7 bg-[#b5ffff] rounded-xl mr-8 text-sm font-bold hover:bg-[#fca5f1] hover:text-white transition-all duration-300"
//                   >
//                      Like
//                   </button>
//                   <button
//                      type="button"
//                      className="py-1 px-3 bg-white rounded-xl border-[#b5ffff] border-[1px] text-sm font-bold hover:border-[#fca5f1] transition-all duration-300"
//                   >
//                      Ủng hộ team
//                   </button>
//                </div>
//             </div>
//             <div className="flex-1 relative hidden md:block">
//                <Image
//                   src="/images/dfrgds.png"
//                   width="0"
//                   height="0"
//                   sizes="100vw"
//                   alt="image"
//                   className="absolute w-[165%] h-[117%] top-[-49px] right-[-96px] z-[1] max-w-none "
//                />
//             </div>
//          </div>
//       </div>
//    );
// };

// export default Info;

import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
const Info = () => {
   const address = useAddress();
   return (
      <div className="md:flex w-full h-[280px] items-center shadow-2xl">
         <div className="bg-white flex-1 rounded-lg md:flex relative h-full bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="md:w-[55%] p-5 pb-0 z-[2] flex flex-col h-full">
               <h1 className="pb-[15px] text-2xl lg:text-[35px] font-bold text-[#220273]">
                  Create, Explore, Collect Digital Art NFTs
               </h1>
               <p className="md:text-[20px] text-[18px] font-semibold text-yellow-50">
                  Build Your Future With Cryto
               </p>
               <div className=" flex-1 flex items-center justify-center">
                  <Link href="/create">
                     <div
                        className={`py-3 ${
                           address ? "block" : "hidden"
                        } absolute mt-[-20px] px-7 bg-[#5EE6EB] rounded-xl mr-8 text-sm font-bold hover:bg-[#fca5f1] hover:text-black transition-all duration-300`}
                     >
                        Create NFTs
                     </div>
                  </Link>
                  <div className={`${address ? "hidden" : "block"}`}>
                     <ConnectWallet className="hover:!bg-black hover:!text-white" />
                  </div>
               </div>
            </div>
            <div className="flex-1 relative hidden md:block">
               <Image
                  src="/images/dfrgds.png"
                  width="0"
                  height="0"
                  sizes="100vw"
                  alt="image"
                  className="absolute w-[165%] h-[117%] top-[-49px] right-[-96px] z-[1] max-w-none "
               />
            </div>
         </div>
      </div>
   );
};

export default Info;
