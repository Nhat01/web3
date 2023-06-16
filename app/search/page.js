"use client";
import { React, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { gql, useQuery } from "@apollo/client";
import { MediaRenderer, useAddress } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import Link from "next/link.js";
import { abi } from "../../abi.js";
import { useContractWrite, useContract } from "@thirdweb-dev/react";
import Spinner from "@/components/spinner/Spinner.js";

const GET_OWNER = gql`
   query GetOwner($from: Bytes!) {
      nfts(
         where: {
            to: "0x54e6505cd9C61460f9225e5A539CD3AF126cd65D"
            from: $from
         }
         orderBy: id
         orderDirection: desc
      ) {
         id
         from
         to
         tokenURI
         price
      }
   }
`;
const GetOwner = () => {
   const { data, error, loading, refetch } = useQuery(GET_OWNER);
   return {
      data,
      error,
      loading,
   };
};
const ShowCard = (props) => {
   const [imageURL, setImage] = useState("");
   const [title, setTitle] = useState("");
   const [description, setDes] = useState("");
   const [eth, setETH] = useState("");
   const [trueNFT, setTrueNFT] = useState(false);
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
         const checked = title
            .toLowerCase()
            .includes(props.searchKeyWord.toLowerCase());
         if (checked) setTrueNFT(true);
         setDes(des);
         setETH(ethers.utils.formatEther(props.price));
      }
      getResponse(props.uri);
   }, []);
   return (
      <div className={`${trueNFT ? null : "hidden"} bg-white rounded-lg my-5`}>
         <MediaRenderer src={imageURL} />
         <p>Hello {props.id}</p>
         <p>Title: {title}</p>
         <p>description: {description}</p>
         <p>price: {eth} ETH</p>
         <p>Owner: {props.owner}</p>
      </div>
   );
};

const page = () => {
   const keyword = useSearchParams();
   const search = keyword.get("data").toLowerCase();
   const { data, error, isLoading } = GetOwner();
   if (isLoading) return <Spinner />;

   return (
      <div>
         {data
            ? data.nfts.map((nft) => {
                 return (
                    <div>
                       <Link
                          href={{
                             pathname: `/nft/${nft.id}`,
                             query: {
                                id: `${nft.id}`,
                                url: `${nft.tokenURI}`,
                                price: `${nft.price}`,
                                owner: `${nft.from}`,
                             },
                          }}
                       >
                          <ShowCard
                             className="bg-white w-full h-screen"
                             id={nft.id}
                             title={nft.title}
                             des={nft.description}
                             uri={nft.tokenURI}
                             price={nft.price}
                             owner={nft.from}
                             searchKeyWord={search}
                          />
                       </Link>
                    </div>
                 );
              })
            : null}
      </div>
   );
};

export default page;
