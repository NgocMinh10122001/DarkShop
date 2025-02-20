"use client";
import { navLinks } from "@/lib/constant";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LeftSideBar = () => {
  const pathName = usePathname();
  console.log("====================================");
  console.log(pathName);
  console.log("====================================");
  return (
    <div className="h-screen left-0 top-0 sticky p-10 flex flex-col gap-16 bg-black shadow-xl max-lg:hidden">
      <Image src={"/logo.webp"} alt="logo" width={150} height={70} />
      <div className="flex flex-col gap-12">
        {navLinks.map((link, index) => (
          <Link
            key={link.label}
            href={link.url}
            className={` hover:text-white ease-in duration-100 flex gap-4 text-body-medium items-center ${
              pathName === link.url ? "text-white" : "text-grey-1"
            }`}
          >
            {link.icon}
            <p>{link.label}</p>
          </Link>
        ))}
      </div>
      <div className="text-grey-1 hover:text-white ease-in duration-100 flex gap-4 text-body-medium items-center">
        <UserButton />
        <p>Edit Profile</p>
      </div>
    </div>
  );
};

export default LeftSideBar;
