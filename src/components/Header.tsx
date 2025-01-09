"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  const activeClassName = (currentPath: string) => {
    if (currentPath === pathname) return "text-amber-500";
    return "";
  };

  return (
    <div className="flex gap-5 p-5">
      <span>Header</span>
      <Link className={`font-semibold ${activeClassName("/")}`} href={"/"}>
        Home
      </Link>
      <Link
        className={`font-semibold ${activeClassName("/about")}`}
        href={"/about"}
      >
        About
      </Link>
      <Link
        className={`font-semibold ${activeClassName("/contact")}`}
        href={"/contact"}
      >
        Contact
      </Link>
    </div>
  );
};

export default Header;
