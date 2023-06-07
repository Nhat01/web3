"use client";

import Image from "next/image";
function Logo() {
   return (
      <Image
         alt="Logo"
         className="mx-logo-space"
         width="100"
         height="100"
         src="/images/logoviphd.png"
      />
   );
}

export default Logo;
