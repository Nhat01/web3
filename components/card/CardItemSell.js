import { MediaRenderer } from "@thirdweb-dev/react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useContract, useContractWrite } from "@thirdweb-dev/react";

const CardItemSell = ({ uri, id }) => {
   const { contract } = useContract(
      "0x54e6505cd9C61460f9225e5A539CD3AF126cd65D"
   );
   const { mutateAsync: listNFT, isLoading } = useContractWrite(
      contract,
      "listNFT"
   );

   const [form, setForm] = useState({
      tokenID: "",
      price: "",
      category: "",
   });
   const [openModel, setOpen] = useState(false);

   const [ETHpriceError, setError] = useState("");

   const handleFormFieldChange = (fieldName, e) => {
      setForm({ ...form, [fieldName]: e.target.value });
   };

   const handleClick = () => {
      setOpen((openModel) => !openModel);
   };
   //Sell NFT
   const SellNFT = async (e) => {
      e.preventDefault();
      if (form.price > 0) {
         try {
            const ETHprice = ethers.utils.parseEther(form.price.toString());
            await listNFT({ args: [id, ETHprice, form.category] });
         } catch (err) {
            console.error("contract call failure", err);
         }
      } else {
         setError("Price must higher 0 ETH!");
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
      <div className="bg-white rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-[#fca5f1] hover:to-[#b5ffff] transition-all duration-300 border-[1px] shadow-md">
         <div className="relative">
            <MediaRenderer
               className="rounded-2xl p-2 aspect-[1/1]"
               src={imageURL}
               alt=""
               width="240"
               height="240"
               style={{ objectFit: "unset" }}
            />
         </div>
         <div className="px-4 py-2 flex-1">
            <div className="text-[10px] font-light mb-2"></div>
            <h5 className="uppercase font-bold text-xl mb-2">{title}</h5>
            <p>{description}</p>
            <div className="relative">
               <button
                  className=" ml-16 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={handleClick}
               >
                  {isLoading ? "Selling" : "Sell"}
               </button>
            </div>
         </div>
         <div
            id="authentication-modal"
            tabIndex="-1"
            className={`fixed flex justify-center items-center z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${
               openModel ? "block" : "hidden"
            }`}
         >
            <div className="relative w-full max-w-md max-h-full">
               <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <button
                     type="button"
                     className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                     data-modal-hide="authentication-modal"
                     onClick={handleClick}
                  >
                     <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           fillRule="evenodd"
                           d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                           clipRule="evenodd"
                        ></path>
                     </svg>
                     <span className="sr-only">Close modal</span>
                  </button>
                  <div className="px-6 py-6 lg:px-8">
                     <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                        Set your {title}'s price
                     </h3>
                     <form className="space-y-6" onSubmit={SellNFT}>
                        <div>
                           <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Price (ETH)
                           </label>
                           <input
                              placeholder="0.01"
                              type="number"
                              value={form.price}
                              onChange={(e) =>
                                 handleFormFieldChange("price", e)
                              }
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              required
                           />
                           <p>{ETHpriceError}</p>
                        </div>
                        <div>
                           <label
                              htmlFor="countries"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                           >
                              Select an option
                           </label>
                           <select
                              id="countries"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              value={form.category}
                              onChange={(e) =>
                                 handleFormFieldChange("category", e)
                              }
                           >
                              <option defaultValue={""}>Choose categogy</option>
                              <option value="art">Art</option>
                              <option value="photo">Photography</option>
                              <option value="membership">Membership</option>
                              <option value="pfps">PFPs</option>
                           </select>
                        </div>
                        <button
                           type="submit"
                           className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                           Sell
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CardItemSell;
