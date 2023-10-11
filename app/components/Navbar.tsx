"use client";

import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [scrollDown, setScrollDown] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollDown(true);
      } else {
        setScrollDown(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="w-full absolute z-10">
      <nav
        className={`max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4`}
        // ${
        //   !scrollDown ? "bg-transparent" : " bg-slate-50"
        // }
      >
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign in"
          btnType={"button"}
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default NavBar;
