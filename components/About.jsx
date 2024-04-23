import React, { useEffect } from "react";
import Image from "next/image";
import { ArrowDownToDot } from "lucide-react";
import Link from "next/link";
import { useNavbar } from "@/context/Navbar";

const About = () => {
  const { isActive, pageChanged, setPageChanged } = useNavbar();
  useEffect(() => {
    setPageChanged(false);
  }, []);

  return (
    <>
      <div
        className={`h-screen overflow-x-hidden overflow-y-auto relative flex flex-col justify-center gap-8 px-24 max-lg:px-16 max-md:px-12 max-sm:px-4 max-sm:mt-16 ${
          isActive ? "slide-out-top" : "slide-in-bottom"
        } ${pageChanged ? "hidden" : ""}`}
      >
        <div className="fixed nav-gradient w-full h-48 top-0 left-0 md:hidden overflow-hidden"></div>

        <div className="h-full w-full flex flex-col justify-center lg:w-4/5 pt-16">
          <h2 className="text-3xl font-semibold">About </h2>
          <div className="h-[2px] shrink-0 w-full bg-current mb-4"></div>
          <p className="text-base">
            Hey, I&apos;m Saif Anees and I&apos;m a full-stack web engineer with
            a primary focus on building user friendly websites. I Love Working
            at the intersection Of Creativity. I have a experience building
            websites for small to medium-sized businesses. When I&apos;m not
            building, I&apos;m learning new stuff.
          </p>
          <p className="text-lg font-semibold text-slate-950 my-4">Tools</p>
          <div className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-2 gap-y-4 mb-6">
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 brightness-[20%] hover:brightness-100 cursor-pointer font-medium">
              <Image
                src={"/icons/react-color.svg"}
                className="h-5 w-5"
                alt=""
                height={"100"}
                width={"100"}
              />
              React
            </div>
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 brightness-[20%] hover:brightness-100 cursor-pointer font-medium">
              <Image
                src={"/icons/javascript-color.svg"}
                className="h-5 w-5"
                alt=""
                height={"100"}
                width={"100"}
              />
              <span>Javascript</span>
            </div>

            <div className="flex items-center gap-2 grayscale hover:grayscale-0 brightness-[20%] hover:brightness-100 cursor-pointer font-medium">
              <Image
                src={"/icons/tailwindcss-color.svg"}
                className="h-5 w-5"
                alt=""
                height={"100"}
                width={"100"}
              />
              TailwindCSS
            </div>
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 brightness-[20%] hover:brightness-100 cursor-pointer font-medium">
              <Image
                src={"/icons/shadcnui-color.svg"}
                className="h-5 w-5"
                alt=""
                height={"100"}
                width={"100"}
              />
              Shadcn
            </div>
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 brightness-[20%] hover:brightness-100 cursor-pointer font-medium">
              <Image
                src={"/icons/mongodb-color.svg"}
                className="h-5 w-5"
                alt=""
                height={"100"}
                width={"100"}
              />
              MongoDB
            </div>
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 brightness-[20%] hover:brightness-100 cursor-pointer font-medium">
              <Image
                src={"/icons/nodedotjs-color.svg"}
                className="h-5 w-5"
                alt=""
                height={"100"}
                width={"100"}
              />
              Node.js
            </div>
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 brightness-[20%] hover:brightness-100 cursor-pointer font-medium">
              <Image
                src={"/icons/nextdotjs-color.svg"}
                className="h-5 w-5"
                alt=""
                height={"100"}
                width={"100"}
              />
              Next.js
            </div>
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 brightness-[20%] hover:brightness-100 cursor-pointer font-medium">
              <Image
                src={"/icons/github-color.svg"}
                className="h-5 w-5"
                alt=""
                height={"100"}
                width={"100"}
              />
              GitHub
            </div>
          </div>
          {/* <Link
            href={"/"}
            className="flex gap-2 items-center text-base font-medium mt-4"
          >
            <ArrowDownToDot size={18} />
            resume
          </Link> */}
        </div>

        {/* <div className="w-full flex justify-end mb-4">
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
        </div> */}
      </div>
    </>
  );
};

export default About;
