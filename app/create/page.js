"use client";
import { React, useState } from "react";
import {
   useContractWrite,
   useStorageUpload,
   useAddress,
   useContract,
} from "@thirdweb-dev/react";

const Create = () => {
   const { contract } = useContract(
      "0x54e6505cd9C61460f9225e5A539CD3AF126cd65D"
   );
   const { mutateAsync: mintNFT, isLoading } = useContractWrite(
      contract,
      "mintNFT"
   );
   const { mutateAsync: upload } = useStorageUpload();
   const address = useAddress();

   const [selectedFile, setSelectedFile] = useState(null);

   const [uri, setUri] = useState({
      title: "",
      description: "",
      image: null,
   });

   const handleFormFieldChangeUri = (fieldName, e) => {
      setUri({ ...uri, [fieldName]: e.target.value });
   };

   const handleSubmit = async (e) => {
      if (!address) {
         alert("You need connect wallet to create NFT!");
      } else {
         e.preventDefault();
         setSelectedFile(e.target.files);
         uri.image = selectedFile;
         const dataToUpload = [uri];
         // And upload the data with the upload function
         const uris = await upload({ data: dataToUpload });
         try {
            const data = await mintNFT({ args: uris });
            console.info("contract call successs", data);
         } catch (err) {
            console.error("contract call failure", err);
         }
      }
   };
   return (
      <div className="w-full bg-gray-50 bg-blur rounded-2xl h-[800px]">
         <main className="flex">
            <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen">
               <div className="max-w-lg flex-1 mx-auto px-4 text-gray-600">
                  <div>
                     <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Create New Item
                     </h3>
                     <p className="mt-3">
                        <span className="text-red-400">*</span> Required fields
                     </p>
                  </div>
                  <form
                     className="space-y-5 mt-5 lg:pb-12"
                     onSubmit={handleSubmit}
                  >
                     <div>
                        <label className="font-medium text-black text-xl">
                           Image <span className="text-red-400">*</span>
                        </label>
                        <input
                           className="block w-full text-sm text-gray-900 border mt-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                           aria-describedby="file_input_help"
                           id="file_input"
                           type="file"
                           onChange={(e) => setSelectedFile(e.target.files[0])}
                           required
                        />
                        <p
                           className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                           id="file_input_help"
                        >
                           SVG, PNG, JPG or GIF (MAX. 100MB).
                        </p>
                     </div>
                     <div>
                        <label className="font-medium text-black text-xl">
                           Name <span className="text-red-400">*</span>
                        </label>
                        <input
                           type="text"
                           required
                           className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                           placeholder="NFT's Name"
                           value={uri.title}
                           onChange={(e) =>
                              handleFormFieldChangeUri("title", e)
                           }
                        />
                     </div>
                     <div>
                        <label className="font-medium text-black text-xl">
                           External link
                        </label>
                        <input
                           type="url"
                           className="w-full my-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                           placeholder="https://yourwebsite/details"
                        />
                        <label className="font-medium text-gray-500">
                           Where buyer can know more about your NFT's details.
                           You are welcome to link to your own webpage with more
                           details.
                        </label>
                        <div>
                           <label className="font-medium text-black text-xl">
                              Description
                           </label>
                           <textarea
                              type="text"
                              className="w-full h-[150px] mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                              placeholder="NFT's details"
                              value={uri.description}
                              onChange={(e) =>
                                 handleFormFieldChangeUri("description", e)
                              }
                           />
                        </div>
                     </div>
                     <button
                        className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
                        type="submit"
                     >
                        {isLoading ? "Creating" : "Create Your NFT"}
                     </button>
                  </form>
               </div>
            </div>
         </main>
      </div>
   );
};

export default Create;
