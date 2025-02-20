"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { navLinks } from "@/lib/constant";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const TopBar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const pathName = usePathname();
  return (
    <div className="sticky top-0 z-20 w-full flex justify-between items-center px-8 py-4 bg-black shadow-xl lg:hidden">
      <Image src={"/logo.webp"} alt="logo" width={150} height={70} />
      <div className="flex gap-8 max-md:hidden">
        {navLinks.map((link, index) => (
          <Link
            key={link.label}
            href={link.url}
            className={` hover:text-white ease-in duration-100 flex gap-4 text-body-medium items-center ${
              pathName === link.url ? "text-white" : "text-grey-1"
            }`}
          >
            <p>{link.label}</p>
          </Link>
        ))}
      </div>
      <div className="relative text-grey-1 hover:text-white ease-in duration-100 flex gap-4 text-body-medium items-center">
        <Menu
          className="cursor-pointer md:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />
        {dropdownMenu && (
          <div className="flex flex-col gap-8 absolute top-10 right-6 p-5 bg-white shadow-xl rounded-lg ">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.url}
                className={
                  "text-grey-1  flex gap-4 text-body-medium items-center"
                }
              >
                <p>{link.label}</p>
              </Link>
            ))}
          </div>
        )}
        <UserButton />
      </div>
    </div>
  );
};

export default TopBar;
