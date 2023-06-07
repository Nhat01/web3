import Image from "next/image";
import Nav from "./components/navbar/Nav";
import Sidebar from "./components/sidebar/Sidebar";

export default function Home() {
   return (
      <div>
         <div className="fixed w-[100%] top-0 left-0 z-10  bg-gradient-to-r from-[#fca5f1] to-[#b5ffff]">
            <Nav />
         </div>
         <div className={`h-screen max-w-[90rem] m-auto`}>
            <div className="h-screen mt-[10px] relative top-nav-size">
               <Sidebar />
               <div className="w-[100%] pl-[224px] pr-size-space">
                  <div className="flex w-full h-[200px]">
                     <div className="bg-white flex-1 mr-size-space rounded-lg flex relative">
                        <div className="w-[50%] p-4 z-[2]">
                           <h1 className="pb-[15px] text-2xl font-bold">
                              Shopping
                           </h1>
                           <p className="text-[11px]">
                              Đây là trang web của CLB Coder. Nếu bạn yêu thích
                              hãy để lại 1 Like và một chút tấm lòng để chúng
                              mình có thêm động lực làm tiếp.
                           </p>
                           <div className="mt-6">
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
                        <div className="flex-1 ">
                           <Image
                              src="/images/dfrgds.png"
                              width="0"
                              height="0"
                              sizes="100vw"
                              alt="image"
                              className="absolute w-[80%] h-[112%] top-[-24px] right-[-70px] z-[1]"
                           />
                        </div>
                     </div>
                     <div className="bg-white w-[30%] z-[2] rounded-lg">
                        <div className="p-4">
                           <p className="m-0 font-bold">Your Blance</p>
                           <span className="text-[10px] text-[#8c8c8c]">
                              Crypto0987654ertg...
                           </span>
                           <h1 className="p-3 font-bold text-2xl">
                              $345,765.23
                           </h1>
                           <div>
                              <span className="text-sm mr-3">Total Offers</span>
                              <span className="text-[10px] font-bold">
                                 USD 976,789
                                 <span className="text-green-700 font-bold">
                                    (90.12%)
                                 </span>
                              </span>
                           </div>
                           <button
                              type="button"
                              className="py-1 px-7 bg-[#b5ffff] rounded-xl mt-2 text-sm font-bold hover:bg-[#fca5f1] hover:text-white transition-all duration-300 w-full"
                           >
                              Add Balance
                           </button>
                        </div>
                     </div>
                  </div>

                  <div className=" flex mt-size-space">
                     <div className=" flex-1 mr-8 grid grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-[#fca5f1] hover:to-[#b5ffff] transition-all duration-300">
                           <div className="relative h-72">
                              <Image
                                 className="rounded-xl"
                                 alt="card-1"
                                 src="/images/2487539c2657a919339904b125f54e55.jpg"
                                 fill
                                 style={{ objectFit: "content" }}
                              />
                           </div>
                           <div className="p-5 flex-1">
                              <div className="text-[10px] font-light mb-3">
                                 <p className="mb-1">@hungpham</p>
                                 <span className="">Thể loại - chuyên mục</span>
                              </div>
                              <h5 className="uppercase font-bold text-xl mb-3">
                                 Thẻ Pokemon
                              </h5>
                              <p className="text-[10px] font-light">
                                 Giá khởi điểm:
                                 <span className="text-green-700 font-bold ml-1">
                                    5.0 ETH
                                 </span>
                              </p>
                              <span className="text-[10px] font-light block">
                                 @Crypto
                                 <span className="float-right text-[#8C8C8C] font-bold">
                                    Lost Soid For: 9.99 ETH
                                 </span>
                              </span>
                           </div>
                        </div>
                        <div className="bg-white rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-[#fca5f1] hover:to-[#b5ffff] transition-all duration-300">
                           <div className="relative h-72">
                              <Image
                                 className="rounded-xl"
                                 alt="card-1"
                                 src="/images/2487539c2657a919339904b125f54e55.jpg"
                                 fill
                                 style={{ objectFit: "content" }}
                              />
                           </div>
                           <div className="p-5 flex-1">
                              <div className="text-[10px] font-light mb-3">
                                 <p className="mb-1">@hungpham</p>
                                 <span className="">Thể loại - chuyên mục</span>
                              </div>
                              <h5 className="uppercase font-bold text-xl mb-3">
                                 Thẻ Pokemon
                              </h5>
                              <p className="text-[10px] font-light">
                                 Giá khởi điểm:
                                 <span className="text-green-700 font-bold ml-1">
                                    5.0 ETH
                                 </span>
                              </p>
                              <span className="text-[10px] font-light block">
                                 @Crypto
                                 <span className="float-right text-[#8C8C8C] font-bold">
                                    Lost Soid For: 9.99 ETH
                                 </span>
                              </span>
                           </div>
                        </div>
                        <div className="bg-white rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-[#fca5f1] hover:to-[#b5ffff] transition-all duration-300">
                           <div className="relative h-72">
                              <Image
                                 className="rounded-xl"
                                 alt="card-1"
                                 src="/images/2487539c2657a919339904b125f54e55.jpg"
                                 fill
                                 style={{ objectFit: "content" }}
                              />
                           </div>
                           <div className="p-5 flex-1">
                              <div className="text-[10px] font-light mb-3">
                                 <p className="mb-1">@hungpham</p>
                                 <span className="">Thể loại - chuyên mục</span>
                              </div>
                              <h5 className="uppercase font-bold text-xl mb-3">
                                 Thẻ Pokemon
                              </h5>
                              <p className="text-[10px] font-light">
                                 Giá khởi điểm:
                                 <span className="text-green-700 font-bold ml-1">
                                    5.0 ETH
                                 </span>
                              </p>
                              <span className="text-[10px] font-light block">
                                 @Crypto
                                 <span className="float-right text-[#8C8C8C] font-bold">
                                    Lost Soid For: 9.99 ETH
                                 </span>
                              </span>
                           </div>
                        </div>
                        <div className="bg-white rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-[#fca5f1] hover:to-[#b5ffff] transition-all duration-300">
                           <div className="relative h-72">
                              <Image
                                 className="rounded-xl"
                                 alt="card-1"
                                 src="/images/2487539c2657a919339904b125f54e55.jpg"
                                 fill
                                 style={{ objectFit: "content" }}
                              />
                           </div>
                           <div className="p-5 flex-1">
                              <div className="text-[10px] font-light mb-3">
                                 <p className="mb-1">@hungpham</p>
                                 <span className="">Thể loại - chuyên mục</span>
                              </div>
                              <h5 className="uppercase font-bold text-xl mb-3">
                                 Thẻ Pokemon
                              </h5>
                              <p className="text-[10px] font-light">
                                 Giá khởi điểm:
                                 <span className="text-green-700 font-bold ml-1">
                                    5.0 ETH
                                 </span>
                              </p>
                              <span className="text-[10px] font-light block">
                                 @Crypto
                                 <span className="float-right text-[#8C8C8C] font-bold">
                                    Lost Soid For: 9.99 ETH
                                 </span>
                              </span>
                           </div>
                        </div>
                        <div className="bg-white rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-[#fca5f1] hover:to-[#b5ffff] transition-all duration-300">
                           <div className="relative h-72">
                              <Image
                                 className="rounded-xl"
                                 alt="card-1"
                                 src="/images/2487539c2657a919339904b125f54e55.jpg"
                                 fill
                                 style={{ objectFit: "content" }}
                              />
                           </div>
                           <div className="p-5 flex-1">
                              <div className="text-[10px] font-light mb-3">
                                 <p className="mb-1">@hungpham</p>
                                 <span className="">Thể loại - chuyên mục</span>
                              </div>
                              <h5 className="uppercase font-bold text-xl mb-3">
                                 Thẻ Pokemon
                              </h5>
                              <p className="text-[10px] font-light">
                                 Giá khởi điểm:
                                 <span className="text-green-700 font-bold ml-1">
                                    5.0 ETH
                                 </span>
                              </p>
                              <span className="text-[10px] font-light block">
                                 @Crypto
                                 <span className="float-right text-[#8C8C8C] font-bold">
                                    Lost Soid For: 9.99 ETH
                                 </span>
                              </span>
                           </div>
                        </div>
                     </div>
                     <div className="bg-white h-10 w-[30%]"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
