import React from "react";
import Layout from "./Layout";
import Image from "next/image";
import { ArrowDownToDot, Circle } from "lucide-react";
import Link from "next/link";
import { useNavbar } from "@/context/Navbar";

const about = () => {
  const { isActive } = useNavbar();

  return (
    <Layout>
      <div
        className={`h-screen overflow-hidden relative flex flex-col justify-center gap-8 p-24 slide-in-bottom ${
          isActive ? "slide-in-top" : ""
        }`}
      >
        <div className="h-full w-full flex flex-col justify-center lg:w-4/5 pt-16">
          <h2 className="text-3xl font-semibold">About </h2>
          <div className="h-[2px] w-full bg-current mb-4"></div>
          <p className="text-lg">
            Hey, I&apos;m Saif Anees and I&apos;m a full-stack web engineer with
            a focus on building user friendly websites. I Love Working at the
            intersection Of Creativity. I have a experience building websites
            for small to medium-sized businesses. When I&apos;m not building,
            I&apos;m learning new stuff.
          </p>
        </div>
        <div className="w-full flex justify-between items-end mb-4">
          <Link
            href={"/"}
            className="flex gap-2 items-center text-base font-medium"
          >
            <ArrowDownToDot size={18} />
            resume
          </Link>
          <div className="h-44 w-44 relative -m-8">
            <Image
              src={"/circular-name-img.png"}
              height={500}
              width={500}
              className="h-16 w-16 object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <Image
              src={"/circular-name.png"}
              height={500}
              width={500}
              className="h-full w-full object-contain animate-rotate"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default about;
