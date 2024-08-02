import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useNavbar } from "@/context/Navbar";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "Agency",
      image: "/projects/noblesoft.jpg",
      url: "https://noblesoft.vercel.app",
      icons: "nextdotjs-color.svg",
    },
    {
      name: "MS Real Estate",
      image: "/projects/msre.jpg",
      url: "https://www.msrealestate.ae",
      icons: "nextdotjs-color.svg",
    },
    {
      name: "Modern Standards Luxury Motors",
      image: "/projects/mslm.jpg",
      url: "https://modernstandards.ae",
      icons: "nextdotjs-color.svg",
    },
    {
      name: "Oh GHAD!",
      image: "/projects/ohghad.png",
      url: "https://www.ohghad.org",
      icons: "wp.svg",
    },
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const { isActive, pageChanged, setPageChanged } = useNavbar();

  useEffect(() => {
    setPageChanged(false);

    const handleKeyDown = (e) => {
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        setCurrentProjectIndex(
          (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
        );
      } else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        setCurrentProjectIndex(
          (prevIndex) => (prevIndex + 1) % projects.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleProjectChange = (index) => {
    setCurrentProjectIndex(index);
  };

  return (
    <>
      <div
        className={`h-screen max-sm:h-[90vh] flex max-md:flex-col justify-center items-end max-md:items-start gap-8 max-md:gap-4 px-24 max-lg:px-16 max-md:px-12 max-sm:px-4 py-24 max-sm:mt-4 max-md:pb-0 relative w-full ${
          isActive ? "slide-out-top" : "slide-in-bottom"
        } ${pageChanged ? "hidden" : ""}`}
      >
        <div className="w-1/2 max-sm:w-4/5 shrink-0 aspect-video overflow-hidden relative transition-all border border-gray-900">
          <Link href={projects[currentProjectIndex]?.url} target="_blank">
            <button className="bg-gray-950 text-white text-sm py-2 px-4 font-medium absolute bottom-0 left-1/2 -translate-x-1/2 bg-opacity-70 hover:bg-opacity-80 transition-all w-full">
              Visit
            </button>
          </Link>
          <Image
            src={projects[currentProjectIndex]?.image}
            alt=""
            width={"1000"}
            height={"1000"}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex gap-6 justify-between items-center">
            <div className="flex items-baseline gap-4">
              <h2 className="text-3xl font-semibold">Works</h2>
              {/* <p className="text-2xl font-medium">{projects?.length}</p> */}
            </div>
            <div>
              <ArrowBigUp size={18} />
              <ArrowBigDown size={18} />
            </div>
          </div>
          <div className="h-[2px] shrink-0 w-full bg-current mb-4"></div>
          <div className="">
            <div className="w-full">
              {projects.map((project, index) => (
                <div
                  onClick={() => setCurrentProjectIndex(index)}
                  key={index}
                  className={`flex justify-between cursor-pointer w-full p-2 font-medium transition-all ${
                    index === currentProjectIndex
                      ? "bg-gray-950 text-white"
                      : "hover:bg-gray-200"
                  }`}
                >
                  <span>{project.name}</span>
                  {project.icons && (
                    <div className="flex items-center gap-2 grayscale hover:grayscale-0">
                      <Image
                        src={`/icons/${project.icons}`}
                        className={`h-5 w-5 ${
                          index === currentProjectIndex
                            ? "invert"
                            : "contrast-150"
                        }`}
                        alt=""
                        height={"100"}
                        width={"100"}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
