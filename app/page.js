import Image from "next/image";
import Nav from "../components/navbar/Nav";
import Sidebar from "../components/sidebar/Sidebar";
import Info from "@/components/info/Info";
import Balance from "@/components/blance/Balance";
import CategoryList from "@/components/category/CategoryList";
import CategoryAll from "@/components/category/CategoryAll";
import CardItem from "@/components/card/CardItem";
import CardDiscount from "@/components/card/CardDiscount";
import Logo from "@/components/navbar/Logo";
import Search from "@/components/navbar/Search";
import { BellIcon } from "@heroicons/react/24/outline";

export default function Home() {
   const cards = [
      {
         nameAuthor: "@baonhat",
         imageSrc: "/images/2487539c2657a919339904b125f54e55.jpg",
         nameCard: "Thẻ Pokemon",
         price: 100,
      },
      {
         nameAuthor: "@hung",
         imageSrc: "/images/5bfeb617e8ffa6ec2764c54220c7c128.jpg",
         nameCard: "Thẻ Pokemon",
         price: 50,
      },
      {
         nameAuthor: "@kimtin",
         imageSrc: "/images/6e3310737c31dd845d5dbf6a0a7b9129.jpg",
         nameCard: "Thẻ Pokemon",
         price: 200,
      },
      {
         nameAuthor: "@baonhat",
         imageSrc: "/images/2487539c2657a919339904b125f54e55.jpg",
         nameCard: "Thẻ Pokemon",
         price: 100,
      },
      {
         nameAuthor: "@baonhat",
         imageSrc: "/images/2487539c2657a919339904b125f54e55.jpg",
         nameCard: "Thẻ Pokemon",
         price: 100,
      },
   ];
   return (
      <div className="h-full w-full">
         <div className="fixed w-[100%] top-0 left-0 z-10  bg-gradient-to-r from-[#fca5f1] to-[#b5ffff]">
            <Nav />
         </div>
         <div className="grid lg:grid-cols-[14%_auto_30%] md:grid-cols-[auto_17rem] sm:grid-cols-1 grid-rows-[auto_auto_auto] gap-size-space mt-[100px]  max-w-[90rem] mx-auto px-size-space relative">
            <Sidebar />
            <div className="mt-[10px] bg-white rounded-lg lg:col-start-2 md:col-start-1">
               <Info />
            </div>
            <div className="mt-[10px] rounded-lg flex items-center">
               <Balance />
            </div>
            <div className="lg:col-start-2 md:col-start-1 flex justify-between">
               <CategoryList />
            </div>
            <div className=" flex justify-between">
               <CategoryAll />
            </div>
            <div className="lg:col-start-2 md:col-start-1 grid grid-cols-3 gap-size-space">
               {cards?.map(({ nameAuthor, imageSrc, nameCard, price }) => (
                  <CardItem
                     nameAuthor={nameAuthor}
                     nameCard={nameCard}
                     price={price}
                     imageSrc={imageSrc}
                  />
               ))}
            </div>
            <div className=" grid grid-cols-2 h-min rounded-lg gap-size-space md:gap-2">
               <CardDiscount />
               <CardDiscount />
            </div>
         </div>
         {/* <div className={`h-screen max-w-[90rem] m-auto`}>
            <div className="h-screen mt-[10px] relative top-nav-size flex">
               <div className="flex relative">
                  <Sidebar />
               </div>
               <div className="w-[100%] pl-[224px] pr-size-space">
                  <div className="flex w-full h-[240px] items-center">
                     <div className="bg-white flex-1 mr-size-space rounded-lg flex relative h-full">
                        <div className="w-[50%] p-5 z-[2]">
                           <h1 className="pb-[15px] text-2xl font-bold">
                              ĐÂY LÀ TIÊU ĐỀ 1 NÈ HE!!!
                           </h1>
                           <p className="text-[12px]">
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
                              style={{ objectFit: "contain" }}
                              alt="image"
                              className="absolute w-[80%] h-[112%] top-[-24px] right-[-70px] z-[1]"
                           />
                        </div>
                     </div>
                     <div className="bg-white w-[34%] z-[2] rounded-lg h-[220px]">
                        <div className="p-4">
                           <p className="m-0 font-bold">Your Blance</p>
                           <div className="flex">
                              <span className="text-[11px] text-[#8c8c8c]">
                                 Crypto0987654ertgcksncdjjd...
                              </span>
                              <DocumentDuplicateIcon className="h-4 w-4 text-green-700" />
                           </div>
                           <h1 className="py-4 font-bold text-3xl">
                              $345,765.23
                           </h1>
                           <div>
                              <span className="text-sm mr-3">Total Offers</span>
                              <span className="text-[11px] font-bold">
                                 USD 976,789
                                 <span className="text-green-700 font-bold">
                                    (90.12%)
                                 </span>
                              </span>
                           </div>
                           <button
                              type="button"
                              className="py-1 px-7 bg-[#b5ffff] rounded-xl mt-4 text-sm font-bold hover:bg-[#fca5f1] hover:text-white transition-all duration-300 w-full"
                           >
                              Add Balance
                           </button>
                        </div>
                     </div>
                  </div>

                  <div className="flex mt-size-space">
                     <div className="flex-1 mr-size-space rounded-lg flex justify-between relative  font-mono">
                        <h2 className="font-bold">Trend NFTs</h2>
                        <div className="text-[13px]">
                           <button className="bg-white rounded-[5px] px-[15px] mr-4">
                              Arts
                           </button>
                           <button className="bg-white  rounded-[5px] px-[15px] mr-4">
                              Arts
                           </button>
                           <button className="bg-white  rounded-[5px] px-[15px]">
                              Arts
                           </button>
                        </div>
                     </div>
                     <div className="w-[34%]">
                        <div className="flex justify-between font-mono">
                           <h2 className="font-bold">Live Auctions</h2>
                           <button className="bg-white  rounded-[5px] px-[15px] text-[13px]">
                              View all
                           </button>
                        </div>
                     </div>
                  </div>

                  <div className=" flex mt-size-space">
                     <div className=" flex-1 mr-size-space grid grid-cols-3 gap-size-space">
                        <div className="bg-white rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-[#fca5f1] hover:to-[#b5ffff] transition-all duration-300">
                           <div className="relative h-72">
                              <Image
                                 className="rounded-t-xl"
                                 alt="card-1"
                                 src="/images/2487539c2657a919339904b125f54e55.jpg"
                                 fill
                                 style={{ objectFit: "content" }}
                              />
                           </div>
                           <div className="px-4 py-2 flex-1">
                              <div className="text-[10px] font-light mb-2">
                                 <p className="mb-1">@hungpham</p>
                                 <span className="">Thể loại - chuyên mục</span>
                              </div>
                              <h5 className="uppercase font-bold text-xl mb-2">
                                 Thẻ Pokemon
                              </h5>
                              <p className="text-[10px] font-light">
                                 Giá khởi điểm:
                                 <span className="text-green-700 font-bold ml-1">
                                    5.0 ETH
                                 </span>
                              </p>
                              <span className="text-[8px] font-light block">
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
                                 className="rounded-t-xl"
                                 alt="card-1"
                                 src="/images/2487539c2657a919339904b125f54e55.jpg"
                                 fill
                                 style={{ objectFit: "content" }}
                              />
                           </div>
                           <div className="px-4 py-3 flex-1">
                              <div className="text-[10px] font-light mb-2">
                                 <p className="mb-1">@hungpham</p>
                                 <span className="">Thể loại - chuyên mục</span>
                              </div>
                              <h5 className="uppercase font-bold text-xl mb-2">
                                 Thẻ Pokemon
                              </h5>
                              <p className="text-[10px] font-light">
                                 Giá khởi điểm:
                                 <span className="text-green-700 font-bold ml-1">
                                    5.0 ETH
                                 </span>
                              </p>
                              <span className="text-[8px] font-light block">
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
                                 className="rounded-t-xl"
                                 alt="card-1"
                                 src="/images/2487539c2657a919339904b125f54e55.jpg"
                                 fill
                                 style={{ objectFit: "content" }}
                              />
                           </div>
                           <div className="px-4 py-2 flex-1">
                              <div className="text-[10px] font-light mb-2">
                                 <p className="mb-1">@hungpham</p>
                                 <span className="">Thể loại - chuyên mục</span>
                              </div>
                              <h5 className="uppercase font-bold text-xl mb-2">
                                 Thẻ Pokemon
                              </h5>
                              <p className="text-[10px] font-light">
                                 Giá khởi điểm:
                                 <span className="text-green-700 font-bold ml-1">
                                    5.0 ETH
                                 </span>
                              </p>
                              <span className="text-[8px] font-light block">
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
                                 className="rounded-t-xl"
                                 alt="card-1"
                                 src="/images/2487539c2657a919339904b125f54e55.jpg"
                                 fill
                                 style={{ objectFit: "content" }}
                              />
                           </div>
                           <div className="px-4 py-2 flex-1">
                              <div className="text-[10px] font-light mb-2">
                                 <p className="mb-1">@hungpham</p>
                                 <span className="">Thể loại - chuyên mục</span>
                              </div>
                              <h5 className="uppercase font-bold text-xl mb-2">
                                 Thẻ Pokemon
                              </h5>
                              <p className="text-[10px] font-light">
                                 Giá khởi điểm:
                                 <span className="text-green-700 font-bold ml-1">
                                    5.0 ETH
                                 </span>
                              </p>
                              <span className="text-[8px] font-light block">
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
                                 className="rounded-t-xl"
                                 alt="card-1"
                                 src="/images/2487539c2657a919339904b125f54e55.jpg"
                                 fill
                                 style={{ objectFit: "content" }}
                              />
                           </div>
                           <div className="px-4 py-2 flex-1">
                              <div className="text-[10px] font-light mb-2">
                                 <p className="mb-1">@hungpham</p>
                                 <span className="">Thể loại - chuyên mục</span>
                              </div>
                              <h5 className="uppercase font-bold text-xl mb-2">
                                 Thẻ Pokemon
                              </h5>
                              <p className="text-[10px] font-light">
                                 Giá khởi điểm:
                                 <span className="text-green-700 font-bold ml-1">
                                    5.0 ETH
                                 </span>
                              </p>
                              <span className="text-[8px] font-light block">
                                 @Crypto
                                 <span className="float-right text-[#8C8C8C] font-bold">
                                    Lost Soid For: 9.99 ETH
                                 </span>
                              </span>
                           </div>
                        </div>
                     </div>
                     <div className="bg-white h-min w-[34%] grid grid-cols-2 gap-4 rounded-xl">
                        <div className="rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-[#fca5f1] hover:to-[#b5ffff] transition-all duration-300">
                           <div className="relative h-64">
                              <Image
                                 className="rounded-t-xl"
                                 alt="card-1"
                                 src="/images/2487539c2657a919339904b125f54e55.jpg"
                                 fill
                                 style={{ objectFit: "content" }}
                              />
                           </div>

                           <div className="px-4 py-2 flex-1">
                              <div className="text-[10px] font-light mb-2">
                                 @hungpham
                              </div>
                              <h5 className="uppercase font-bold text-base mb-2">
                                 Thẻ Pokemon
                              </h5>
                           </div>
                        </div>
                        <div className="rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-[#fca5f1] hover:to-[#b5ffff] transition-all duration-300">
                           <div className="relative h-64">
                              <Image
                                 className="rounded-t-xl"
                                 alt="card-1"
                                 src="/images/2487539c2657a919339904b125f54e55.jpg"
                                 fill
                                 style={{ objectFit: "content" }}
                              />
                           </div>
                           <div className="px-4 py-2 flex-1">
                              <div className="text-[10px] font-light mb-2">
                                 @hungpham
                              </div>
                              <h5 className="uppercase font-bold text-base mb-2">
                                 Thẻ Pokemon
                              </h5>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div> */}
      </div>
   );
}
