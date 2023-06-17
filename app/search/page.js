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
import CardItem from "./CardItem.js";

const GET_LASTEST = gql`
   query {
      nfts(
         where: { to: "0x54e6505cd9C61460f9225e5A539CD3AF126cd65D" }
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
   const { data, error, loading, refetch } = useQuery(GET_LASTEST);
   return {
      data,
      error,
      loading,
   };
};

const page = () => {
   const keyword = useSearchParams();
   const search = keyword.get("data").toLowerCase();
   const { data, error, isLoading } = GetOwner();
   console.log(data);
   if (isLoading) return <Spinner />;

   return (
      <div className="grid grid-cols-4 gap-size-space">
         {data
            ? data.nfts.map((nft) => {
                 return (
                    <CardItem
                       nameAuthor={nft.from}
                       price={nft.price}
                       uri={nft.tokenURI}
                       key={nft.id}
                       id={nft.id}
                       searchKeyWord={search}
                    />
                 );
              })
            : null}
      </div>
   );
};

export default page;
