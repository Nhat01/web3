import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";

const Balance = () => {
   return (
      <div className="p-4 h-[220px] bg-white rounded-lg flex-1">
         <p className="m-0 font-bold">Your Blance</p>
         <div className="flex">
            <span className="text-[11px] text-[#8c8c8c]">
               Crypto0987654ertgcksncdjjd...
            </span>
            <DocumentDuplicateIcon className="h-4 w-4 text-green-700" />
         </div>
         <h1 className="py-4 font-bold text-3xl">$345,765.23</h1>
         <div className="flex items-center">
            <span className="text-sm">Total Offers</span>
            <div className="w-[0.65rem] h-[0.65rem] rounded-full bg-green-700 mr-3 ml-1"></div>
            <span className="text-[11px] font-bold">
               USD 976,789
               <span className="text-green-700 font-bold">(90.12%)</span>
            </span>
         </div>
         <button
            type="button"
            className="py-1 px-7 bg-[#b5ffff] rounded-xl mt-4 text-sm font-bold hover:bg-[#fca5f1] hover:text-white transition-all duration-300 w-full"
         >
            Add Balance
         </button>
      </div>
   );
};

export default Balance;
