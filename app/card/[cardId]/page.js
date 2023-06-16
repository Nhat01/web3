"use client";
import { React, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { gql, useQuery } from "@apollo/client";
import { MediaRenderer, useAddress } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { abi } from "../../../abi.js";
import { useContractWrite, useContract } from "@thirdweb-dev/react";
import Spinner from "@/components/spinner/Spinner.js";
const GET_OWNER = gql`
   query GetOwner($id: ID!) {
      nfts(where: { id: $id }) {
         id
         from
         to
         tokenURI
         price
      }
   }
`;
const GetOwner = (id) => {
   const { data, error, loading } = useQuery(GET_OWNER, {
      variables: {
         id,
      },
   });
   return {
      data,
      error,
      loading,
   };
};

const CardDetails = () => {
   const addressOfBuyer = useAddress();
   const keyword = useSearchParams();
   const url = keyword.get("url");
   const price = keyword.get("price");
   const idOfNFT = keyword.get("id");
   const nameAuthor = keyword.get("owner");

   const [buying, setBuying] = useState(false);
   const [canBuy, setCanBuy] = useState(true);

   const { contract } = useContract(
      "0x54e6505cd9C61460f9225e5A539CD3AF126cd65D"
   );
   const { mutateAsync: cancelListing, isCancellLoading } = useContractWrite(
      contract,
      "cancelListing"
   );

   useEffect(() => {
      if (addressOfBuyer !== undefined) {
         const address = addressOfBuyer.toLowerCase();
         if (address === nameAuthor) {
            setCanBuy(false);
         } else setCanBuy(true);
      }
   });
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
         await connectedContract.buyNFT(idOfNFT, {
            value: ethers.utils.parseEther(ether),
         });
      } catch (error) {
         console.log(error);
         setBuying(false);
      }
   };

   //Cancell NFT
   const CancellNFT = async (e) => {
      e.preventDefault();

      try {
         await cancelListing({ args: [idOfNFT] });
      } catch (err) {
         console.error("contract call failure", err);
      }
   };

   const { data, error, isLoading } = GetOwner(idOfNFT);
   if (isLoading) return <Spinner />;
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
      getResponse(url);
   }, []);
   return (
      <div className="bg-white p-size-space">
         {/* {data
            ? data.nfts.map((nft) => {
                 return (
                    <div className="bg-white w-full h-screen">
                       <MediaRenderer src={imageURL} />
                       <p>Title: {title}</p>
                       <p>description: {description}</p>
                       <p>price: {eth} ETH</p>
                       <p>Owner: {nft.from}</p>
                       <button
                          onClick={BuyNFT}
                          className={`bg-red-400 p-4 ${
                             canBuy ? null : "hidden"
                          }`}
                       >
                          {buying ? "Buying" : "Buy"}
                       </button>
                       <button
                          onClick={CancellNFT}
                          className={`bg-blue-400 p-4 ${
                             canBuy ? "hidden" : null
                          }`}
                       >
                          {isCancellLoading ? "Cancelling" : "Cancell"}
                       </button>
                    </div>
                 );
              })
            : null} */}
         <div className="flex justify-evenly">
            <MediaRenderer
               className="rounded-2xl p-2 aspect-[1/1]"
               src={imageURL}
               alt=""
               width="40%"
               height="auto"
               style={{ objectFit: "unset" }}
            />
            <div className="flex flex-col justify-around text-2xl">
               <h1 className=" text-3xl font-bold">Title: {title}</h1>
               <span className="text-green-700">price: {eth} ETH</span>
               <span>description: {description}</span>
               <span className="overflow-hidden whitespace-nowrap text-ellipsis">
                  Owner: {nameAuthor}
               </span>
               <button
                  onClick={BuyNFT}
                  className={`py-4 px-7 bg-[#b5ffff] rounded-xl mt-4 text-sm font-bold hover:bg-[#fca5f1] hover:text-white transition-all duration-300 w-full ${
                     canBuy ? "" : "cursor-not-allowed"
                  }`}
                  disabled={!canBuy}
               >
                  {buying ? "Buying" : `${canBuy ? "Buy" : "You are Owner"}`}
               </button>
            </div>
         </div>
      </div>
   );
};

export default CardDetails;
