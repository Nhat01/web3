"use client";
import { MediaRenderer, useAddress, useMetamask } from "@thirdweb-dev/react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { abi } from "../../abi.js";

const CardItem = ({ nameAuthor, uri, nameCard, price, id }) => {
   const connectMetamask = useMetamask();
   const addressOfBuyer = useAddress();
   // tạo thuộc tính để thông báo buying
   const [buying, setBuying] = useState(false);
   // nếu người mua không phải là người tạo (creater) thì true, nếu buyer == creater thì false => không thể mua
   const [canBuy, setCanBuy] = useState(true);
   useEffect(() => {
      if (addressOfBuyer === undefined) {
         setCanBuy(true);
      } else if (addressOfBuyer !== undefined) {
         const address = addressOfBuyer.toLowerCase();
         console.log(address);
         if (address == nameAuthor) {
            setCanBuy(false);
         } else setCanBuy(true);
      }
   });
   //buy NFT
   const BuyNFT = async (e) => {
      if (addressOfBuyer === undefined) connectMetamask();
      e.preventDefault();
      //buying
      setBuying(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const connectedContract = new ethers.Contract(
         "0x54e6505cd9C61460f9225e5A539CD3AF126cd65D",
         abi,
         signer
      );
      const ether = ethers.utils.formatEther(price);
      try {
         await connectedContract.buyNFT(id, {
            value: ethers.utils.parseEther(ether),
         });
      } catch (error) {
         console.log(error);
         setBuying(false);
      }
   };
   const [imageURL, setImage] = useState("");
   const [title, setTitle] = useState("");
   const [description, setDes] = useState("");
   const [eth, setETH] = useState("");
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

         console.log(response);
         setImage(image);
         setTitle(title);
         setDes(des);
         setETH(ethers.utils.formatEther(price));
      }
      getResponse(uri);
   }, []);
   return (
      <div className="bg-white rounded-xl cursor-pointer transition-all duration-300">
         <div className="relative h-48">
            <MediaRenderer
               className="rounded-2xl p-2"
               src={imageURL}
               alt=""
               width="240"
               height="240"
            />
         </div>

         <div className="px-4 py-2 flex-1">
            <div className="text-[10px] font-light mb-2">
               <p className="mb-1 overflow-hidden whitespace-nowrap text-ellipsis">
                  {nameAuthor}
               </p>
               <span>Thể loại - chuyên mục</span>
            </div>
            <h5 className="uppercase font-bold text-lg mb-2">{title}</h5>
            <p className="text-[10px] font-light">
               Giá khởi điểm:
               <span className="text-green-700 font-bold ml-1">{eth} ETH</span>
            </p>
            <button
               onClick={BuyNFT}
               className={`py-1 px-7 bg-[#b5ffff] rounded-xl mt-4 text-sm font-bold hover:bg-[#fca5f1] hover:text-white transition-all duration-300 w-full ${
                  canBuy ? "" : "cursor-not-allowed"
               }`}
               disabled={!canBuy}
            >
               {buying ? "Buying" : `${canBuy ? "Buy" : "You are Owner"}`}
            </button>
         </div>
      </div>
   );
};

export default CardItem;
