import CardItem from "@/components/card/CardItem";
import { ChevronDownIcon, StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Profile = () => {
   const cards = [
      {
         nameAuthor: "@baonhat",
         imageSrc: "/images/image-1.png",
         nameCard: "Thẻ Pokemon",
         price: 100,
      },
      {
         nameAuthor: "@hung",
         imageSrc: "/images/image-2.png",
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
      <div className="bg-white">
         <div className=" h-32 bg-gray-600"></div>
         <div className=" h-72 bg-neutral-200 relative ">
            <Image
               className="h-28 w-28 absolute  left-1/2 -translate-y-1/2  -translate-x-1/2 bg-white rounded-xl"
               alt="user avatar"
               src="/images/user_avatar.png"
               width="0"
               height="0"
               sizes="fill"
               style={{ objectFit: "contain" }}
            />
            <div className=" top-20 relative flex flex-col items-center gap-2">
               <h2 className="font-bold text-3xl">Sad Duck</h2>
               <div className="flex items-center bg-white rounded-2xl py-1 px-5">
                  {/* <StarIcon className="w-6 h-6 " /> */}
                  <div className="star w-4 h-4 bg-[#05FF5A] relative mr-1">
                     <div className="star-inner"></div>
                  </div>
                  0x7a86c0b064171007716...
               </div>
               <span className=" break-words size w-96 text-center">
                  I make art with the simple goal of giving you something
                  pleasing to look at for a few seconds.
               </span>
               <span className="text-center text-sm">Joined December 2019</span>
            </div>
         </div>
         <div className=" max-w-5xl mx-auto ">
            <div className="flex gap-6 justify-center mt-6 border-b-[1px] border-[#E5E5E5] text-[#7E7C7C]">
               <button className="pb-2">On Sale</button>
               <button className="pb-2">Owned</button>
               <button className="pb-2">Created</button>
               <button className="pb-2">Collections</button>
            </div>

            <div className="mt-8">
               <div className="flex justify-between">
                  <div className="flex gap-6">
                     <button className="px-2 py-1 border-[1px] border-[#D1D0D0] rounded-lg">
                        Collections
                     </button>
                     <button className="px-2 py-1 border-[1px] border-[#D1D0D0] rounded-lg">
                        Category
                     </button>
                     <button className="px-2 py-1 border-[1px] border-[#D1D0D0] rounded-lg">
                        Price Range
                     </button>
                  </div>
                  <div className="flex items-center border-[1px] border-[#D1D0D0] px-2 py-1 rounded-lg cursor-pointer text-[#7E7C7C]">
                     <span className="mr-4">Added Recently</span>
                     <ChevronDownIcon className="h-5 w-5" />
                  </div>
               </div>

               <div className="grid grid-cols-4 gap-size-space mt-6">
                  {cards?.map(({ nameAuthor, imageSrc, nameCard, price }) => (
                     <CardItem
                        nameAuthor={nameAuthor}
                        nameCard={nameCard}
                        price={price}
                        imageSrc={imageSrc}
                        className="border-[1px] border-[#E5E5E5]"
                     />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Profile;
