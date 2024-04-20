import { ArrowUpRightFromCircle, LayoutGrid } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="absolute top-0 w-full flex gap-4 items-center justify-between px-24 pt-24 z-20">
        <Link href={"/"} className="text-lg font-bold">
          SAIF ANEES
        </Link>
        <div className="text-lg font-bold flex gap-4 items-center justify-center">
          <span>{currentTime}</span>
          <span className="cursor-pointer" onClick={() => setMenu(!menu)}>
            <LayoutGrid size={32} />
          </span>
        </div>
      </div>
      <div
        className={`h-screen w-full fixed left-0 bg-white bg-opacity-70 backdrop-blur-md border-b border-b-black flex flex-col justify-center px-[25%] py-4 z-10 transition-all delay-75 duration-1000 ${
          menu ? "top-0" : "top-[-110%]"
        }`}
      >
        <div className="font-semibold flex flex-col text-4xl leading-none mb-8 -ml-9 pt-20">
          <Link
            href={"/"}
            className={`hover:ml-12 transition-all delay-75 duration-700 w-fit`}
          >
            <span className="text-base font-medium mr-2">01</span>HOME
          </Link>
          <Link
            href={"/works"}
            className={`hover:ml-12 transition-all delay-75 duration-700 w-fit`}
          >
            <span className="text-base font-medium mr-2">02</span>WORKS
          </Link>
          <Link
            href={"/about"}
            className={`hover:ml-12 transition-all delay-75 duration-700 w-fit`}
          >
            <span className="text-base font-medium mr-2">03</span>ABOUT
          </Link>
          <Link
            href={"/contact"}
            className={`hover:ml-12 transition-all delay-75 duration-700 w-fit`}
          >
            <span className="text-base font-medium mr-2">04</span>CONTACT
          </Link>
        </div>
        <div className="flex gap-6 items-center">
          <Link
            href={"/"}
            className="flex gap-2 items-center text-base font-semibold"
          >
            <ArrowUpRightFromCircle size={18} strokeWidth={2.4} />
            Github
          </Link>
          <Link
            href={"/"}
            className="flex gap-2 items-center text-base font-semibold"
          >
            <ArrowUpRightFromCircle size={18} strokeWidth={2.4} />
            Behance
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
