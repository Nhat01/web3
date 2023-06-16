import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { useAddress } from "@thirdweb-dev/react";
import { useState } from "react";
import { ethers } from "ethers";
import NotLoginBalance from "./NotLoginBalance";

const Balance = () => {
   const [userBalance, setBalance] = useState(null);
   const address = useAddress();
   if (!address) return <NotLoginBalance />;
   function copy(text) {
      navigator.clipboard.writeText(text);
   }
   const provider = ethers.getDefaultProvider(
      "https://rpc.ankr.com/eth_sepolia"
   );
   provider.getBalance(address).then((balance) => {
      // convert a currency unit from wei to ether
      const balanceInEth = ethers.utils.formatEther(balance);

      setBalance(Number(balanceInEth).toFixed(3));
   });
   return (
      <div className="p-4 h-[260px] bg-white rounded-lg flex-1 flex flex-col justify-around">
         <p className="m-0 font-bold">Your Balance</p>
         <div className="flex">
            <span className="text-[11px] text-[#8c8c8c]">{address}</span>
            <DocumentDuplicateIcon
               className="h-4 w-4 text-green-700 cursor-pointer"
               onClick={() => copy(address)}
            />
         </div>
         <h1 className="py-2 font-bold text-3xl">
            Your Balance: {userBalance} ETH
         </h1>
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
