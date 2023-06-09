"use client";

import Image from "next/image";
function Logo() {
   return (
      <Image
         alt="Logo"
         className="mx-logo-space md:block hidden"
         width="80"
         height="80"
         src="/images/logoviphd.png"
      />
   );
}

export default Logo;
