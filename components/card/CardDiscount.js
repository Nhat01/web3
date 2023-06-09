import Image from "next/image";

const CardDiscount = () => {
   return (
      <div className="bg-white rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-[#fca5f1] hover:to-[#b5ffff] transition-all duration-300">
         <div className="relative h-64">
            <Image
               className="rounded-t-lg"
               alt="card-1"
               src="/images/2487539c2657a919339904b125f54e55.jpg"
               fill
               style={{ objectFit: "content" }}
            />
         </div>

         <div className="px-4 py-2 flex-1">
            <div className="text-[10px] font-light mb-2">@hungpham</div>
            <h5 className="uppercase font-bold text-base mb-2">Thẻ Pokemon</h5>
         </div>
      </div>
   );
};

export default CardDiscount;
