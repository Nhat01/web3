import Image from "next/image";
import Nav from "../components/navbar/Nav";
import Sidebar from "../components/sidebar/Sidebar";
import Info from "@/components/info/Info";
import Balance from "@/components/blance/Balance";
import CategoryList from "@/components/category/CategoryList";
import CategoryAll from "@/components/category/CategoryAll";
import CardItem from "@/components/card/CardItem";
import CardDiscount from "@/components/card/CardDiscount";

export default function Home() {
   const cards = [
      {
         nameAuthor: "@baonhat",
         imageSrc: "/images/image-1.png",
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
         <div className="grid lg:grid-cols-[14%_auto_30%] md:grid-cols-[auto_17rem]  grid-rows-[auto_auto_auto] gap-size-space mt-[100px]  max-w-[90rem] mx-auto px-size-space relative">
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
            <div className="lg:col-start-2 md:col-start-1 grid md:grid-cols-3 grid-cols-2 gap-size-space">
               {cards?.map(({ nameAuthor, imageSrc, nameCard, price }) => (
                  <CardItem
                     nameAuthor={nameAuthor}
                     nameCard={nameCard}
                     price={price}
                     imageSrc={imageSrc}
                  />
               ))}
            </div>
            <div className=" md:grid grid-cols-2 h-min rounded-lg gap-size-space md:gap-2 hidden">
               <CardDiscount />
               <CardDiscount />
            </div>
         </div>
      </div>
   );
}
