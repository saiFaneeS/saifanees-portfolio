import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useNavbar } from "@/context/Navbar";

const Projects = () => {
  const projects = [
    {
      name: "Agency",
      image: "/projects/noblesoft.jpg",
      url: "https://noblesoft.vercel.app",
    },
    {
      name: "MS Real Estate",
      image: "/projects/msre.jpg",
      url: "https://www.msrealestate.ae",
    },
    {
      name: "Modern Standards Luxury Motors",
      image: "/projects/mslm.jpg",
      url: "https://modernstandards.ae",
    },
    {
      name: "Oh GHAD!",
      image: "/projects/ohghad.png",
      url: "https://www.ohghad.org",
    },
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const { isActive, pageChanged, setPageChanged } = useNavbar();
  
  useEffect(() => {
    setPageChanged(false);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const index = Math.floor(scrollTop / windowHeight);
      setCurrentProjectIndex(index);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleProjectChange = (index) => {
    setCurrentProjectIndex(index);
  };

  return (
    <>
      <div
        className={`h-screen flex max-md:flex-col justify-center items-end max-md:items-start gap-8 max-md:gap-4 px-24 max-lg:px-16 max-md:px-12 max-sm:px-4 py-24 max-sm:mt-4 max-md:pb-0 relative w-full ${
          isActive ? "slide-out-top" : "slide-in-bottom"
        } ${pageChanged ? "hidden" : ""}`}
      >
        <div className="w-1/2 max-sm:w-4/5 shrink-0 aspect-video overflow-hidden relative transition-all border border-gray-900">
          <Link
            href={projects[currentProjectIndex]?.url}
            target="_blank"
          >
            <button
              className="bg-gray-950 text-white text-sm py-2 px-4 font-medium absolute bottom-0 left-1/2 -translate-x-1/2 bg-opacity-70 hover:bg-opacity-80 transition-all w-full"
            >
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
            <h2 className="text-3xl font-semibold">Works</h2>
            <p className="text-lg font-medium">{projects?.length}</p>
          </div>
          <div className="h-[2px] w-full bg-current mb-4"></div>
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleProjectChange(index)}
              className={`cursor-pointer h-full w-full p-2 font-medium transition-all ${
                index === currentProjectIndex ? "bg-gray-950 text-white" : ""
              }`}
            >
              <span>{project.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
