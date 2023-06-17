"use client";

import Image from "next/image";
import Nav from "../components/navbar/Nav";
import Sidebar from "../components/sidebar/Sidebar";
import Info from "@/components/info/Info";
import Balance from "@/components/blance/Balance";
import CategoryList from "@/components/category/CategoryList";
import CategoryAll from "@/components/category/CategoryAll";
import CardItem from "@/components/card/CardItem";
import CardDiscount from "@/components/card/CardDiscount";
import Spinner from "@/components/spinner/Spinner";
import { gql, useQuery } from "@apollo/client";
import {
   EnvelopeIcon,
   MapPinIcon,
   PhoneIcon,
} from "@heroicons/react/24/outline";
import Logo from "@/components/navbar/Logo";

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

export default function Home() {
   const { data, error, loading } = useQuery(GET_LASTEST);
   if (loading) return <Spinner />;
   return (
      <div className="h-full w-full">
         <div className="fixed w-[100%] top-0 left-0 z-10  bg-gradient-to-r from-[#fca5f1] to-[#b5ffff]">
            <Nav />
         </div>
         <div className="grid lg:grid-cols-[auto_30%] md:grid-cols-[auto_17rem]  grid-rows-[auto_auto_auto] gap-size-space mt-[100px]  max-w-[90rem] mx-auto px-size-space relative">
            <div className="mt-[10px] bg-white rounded-lg lg:col-start-1 md:col-start-1">
               <Info />
            </div>
            <div className="mt-[10px] rounded-lg flex items-center">
               <Balance />
            </div>
            <div className="lg:col-start-1 md:col-start-1 grid md:grid-cols-4 grid-cols-2 gap-size-space">
               {data
                  ? data.nfts.map((nft) => {
                       return (
                          <CardItem
                             nameAuthor={nft.from}
                             price={nft.price}
                             uri={nft.tokenURI}
                             key={nft.id}
                             id={nft.id}
                          />
                       );
                    })
                  : null}
            </div>
            <div className=" md:grid grid-cols-2 h-min rounded-lg gap-size-space md:gap-2 hidden"></div>
         </div>
         <div className="mt-8 ">
            <div className="min-h-365 bg-gray-800 px-size-space">
               <div className="container child-footer py-16">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     <div className="col-span-1">
                        <h6 className="mb-4 text-white">CLB CODER GDU</h6>
                        <Logo />
                        <p className="text-sm text-gray-400">
                           Create, Explore, Collect Digital Art NFTs
                        </p>
                        <a href="" className="text-sm text-green-500">
                           More about us{" "}
                           <i className="fas fa-long-arrow-alt-right"></i>
                        </a>
                     </div>
                     <div className="col-span-1">
                        <h6 className="mb-4 text-white">LATEST WORKS</h6>
                        <div className="images">
                           <a href="">
                              <img src="" alt="" />
                           </a>
                           <a href="">
                              <img src="" alt="" />
                           </a>
                           <a href="">
                              <img src="" alt="" />
                           </a>
                           <a href="">
                              <img src="" alt="" />
                           </a>
                        </div>
                     </div>
                     <div className="col-span-1">
                        <h6 className="mb-4 text-white">GET IN TOUCH</h6>
                        <p className="text-sm text-gray-400">
                           If you have any questions or need assistance, feel
                           free to get in touch with us.
                        </p>
                        <div className="text-sm my-0 text-gray-400">
                           <p className="m-0">
                              <MapPinIcon className="h-4 w-4 inline-block text-gray-400" />{" "}
                              Cơ sở Hoàng Văn Thụ: 185-187 Hoàng Văn Thụ, P.8,
                              Q.Phú Nhuận, TP.HCM
                              <br />
                              Cơ sở Tân Sơn Nhất: 371 Nguyễn Kiệm, P.3, Q.Gò
                              Vấp, TP.HCM
                           </p>
                           <p className="m-0">
                              <PhoneIcon className="h-4 w-4 inline-block text-gray-400" />{" "}
                              Điện thoại: (028)7301.3456 - Hotline:
                              0961.12.10.18 - 0962.12.10.18
                           </p>
                           <p className="m-0">
                              <EnvelopeIcon className="h-4 w-4 inline-block text-gray-400" />{" "}
                              Email: tuyensinh@giadinh.edu.vn
                           </p>
                        </div>
                     </div>
                     <div className="col-span-1">
                        <h6 className="mb-4 text-white">FREE UPDATES</h6>
                        <p className="text-sm text-gray-400">
                           Stay up to date with the latest news and updates by
                           subscribing to our newsletter.
                        </p>
                        <form className="flex justify-between items-center bg-gray-700 text-white">
                           <input
                              type="email"
                              className=" bg-gray-700 text-white"
                              placeholder="Enter your email address"
                           />
                           <button className="bg-[#00bc9c]">SUBSCRIBE</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="bg-gray-900 text-gray-500">
               <div className="container">
                  <div className="flex justify-between items-center">
                     <p className="text-sm">
                        © 2014 REEN. All rights reserved.
                     </p>
                     <ul className="flex">
                        <li>
                           <a href="">Home</a>
                        </li>
                        <li>
                           <a href="">Portfolio</a>
                        </li>
                        <li>
                           <a href="">Blog</a>
                        </li>
                        <li>
                           <a href="">About</a>
                        </li>
                        <li>
                           <a href="">Services</a>
                        </li>
                        <li>
                           <a href="">Contact</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
