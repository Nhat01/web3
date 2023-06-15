import { MediaRenderer } from "@thirdweb-dev/react";
import { useState, useEffect } from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";

const CardItemCancel = ({ uri, id }) => {
   const { contract } = useContract(
      "0x54e6505cd9C61460f9225e5A539CD3AF126cd65D"
   );
   const { mutateAsync: cancelListing, isLoading } = useContractWrite(
      contract,
      "cancelListing"
   );

   //Cancell NFT
   const CancellNFT = async (e) => {
      e.preventDefault();
      try {
         await cancelListing({ args: [id] });
      } catch (err) {
         console.error("contract call failure", err);
      }
   };
   const [imageURL, setImage] = useState("");
   const [title, setTitle] = useState("");
   const [description, setDes] = useState("");
   useEffect(() => {
      async function getResponse(url) {
         if (!url.startsWith("ipfs://")) throw new Error("Not an IPFS url");
         const cid = url.substring(7);
         const newURL = `https://ipfs.io/ipfs/${cid}`;
         const response = await fetch(newURL).then(function (result) {
            return result.json();
         });
         const image = response.image;
         const title = response.title;
         const des = response.description;

         setImage(image);
         setTitle(title);
         setDes(des);
      }
      getResponse(uri);
   }, []);
   return (
      <div className="bg-white rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-[#fca5f1] hover:to-[#b5ffff] transition-all duration-300">
         <div className="relative h-72">
            <MediaRenderer className="rounded-t-lg" src={imageURL} alt="" />
         </div>
         <div className="px-4 py-2 flex-1">
            <div className="text-[10px] font-light mb-2"></div>
            <h5 className="uppercase font-bold text-xl mb-2">{title}</h5>
            <p>{description}</p>
            <div className="relative">
               <button
                  className=" ml-16 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={CancellNFT}
               >
                  {isLoading ? "Cancelling" : "Cancell"}
               </button>
            </div>
         </div>
      </div>
   );
};

export default CardItemCancel;
