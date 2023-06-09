import Image from "next/image";

const Info = () => {
   return (
      <div className="md:flex w-full h-[240px] items-center">
         <div className="bg-white flex-1 rounded-lg md:flex relative h-full">
            <div className="md:w-[55%] p-5 pb-0 z-[2] flex flex-col h-full">
               <h1 className="pb-[15px] text-3xl md:text-2xl font-bold">
                  ĐÂY LÀ TIÊU ĐỀ 1 NÈ HE!!!
               </h1>
               <p className="text-[12px]">
                  Đây là trang web của CLB Coder. Nếu bạn yêu thích hãy để lại 1
                  Like và một chút tấm lòng để chúng mình có thêm động lực làm
                  tiếp.
               </p>
               <div className=" flex-1 flex items-center justify-center">
                  <button
                     type="button"
                     className="py-1 px-7 bg-[#b5ffff] rounded-xl mr-8 text-sm font-bold hover:bg-[#fca5f1] hover:text-white transition-all duration-300"
                  >
                     Like
                  </button>
                  <button
                     type="button"
                     className="py-1 px-3 bg-white rounded-xl border-[#b5ffff] border-[1px] text-sm font-bold hover:border-[#fca5f1] transition-all duration-300"
                  >
                     Ủng hộ team
                  </button>
               </div>
            </div>
            <div className="flex-1 relative hidden md:block">
               <Image
                  src="/images/dfrgds.png"
                  width="0"
                  height="0"
                  sizes="100vw"
                  alt="image"
                  className="absolute w-[170%] h-[120%] top-[-49px] right-[-96px] z-[1] max-w-none "
               />
            </div>
         </div>
      </div>
   );
};

export default Info;
