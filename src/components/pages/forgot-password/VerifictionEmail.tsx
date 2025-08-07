import Image from "next/image";
import Link from "next/link";
import React from "react";

function VerifictionEmail() {
  return (
    <div className="max-w-[1440px] mx-auto w-full">
      <div className="flex justify-center">
        <Link href={"/"} className="w-max  mt-[68px]">
          <Image
            src={"/assest/svg/logonavbar.svg"}
            width={199}
            height={46}
            alt="logo"
          />
        </Link>
      </div>
    </div>
  );
}

export default VerifictionEmail;
