import Image from "next/image";

const CardItem = ({ nameAuthor, imageSrc, nameCard, price }) => {
   return (
      <div className="bg-white rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-[#fca5f1] hover:to-[#b5ffff] transition-all duration-300">
         <div className="relative h-72">
            <Image
               className="rounded-t-xl"
               alt="card-1"
               src={imageSrc}
               fill
               style={{ objectFit: "content" }}
            />
         </div>
         <div className="px-4 py-2 flex-1">
            <div className="text-[10px] font-light mb-2">
               <p className="mb-1">{nameAuthor}</p>
               <span className="">Thể loại - chuyên mục</span>
            </div>
            <h5 className="uppercase font-bold text-xl mb-2">{nameCard}</h5>
            <p className="text-[10px] font-light">
               Giá khởi điểm:
               <span className="text-green-700 font-bold ml-1">
                  {price} ETH
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
   );
};

export default CardItem;
