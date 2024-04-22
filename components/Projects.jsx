import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useNavbar } from "@/context/Navbar";

const Projects = () => {
  const projects = [
    { name: "Agency", image: "/saif.jpg" },
    { name: "MS Real Estate", image: "/husban.png" },
    { name: "Modern Standards Luxury Motors", image: "/saif.jpg" },
    { name: "Oh GHAD!", image: "/husban.png" },
  ];

  const { isActive, pageChanged, setPageChanged } = useNavbar();
  useEffect(() => {
    setPageChanged(false);
  }, []);

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollPosition(scrollTop);
      const index = Math.floor(scrollTop / window.innerHeight);
      setCurrentProjectIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`h-screen flex max-md:flex-col justify-center items-end gap-8 max-md:gap-4 px-24 max-lg:px-16 max-md:px-12 max-sm:px-4 py-24 max-md:pb-0 relative w-full ${
          isActive ? "slide-out-top" : "slide-in-bottom"
        } ${pageChanged ? "hidden" : ""}`}
      >
        <Link
          href={"/"}
          className="w-1/2 max-sm:w-2/3 shrink-0 aspect-video overflow-hidden relative hover:brightness-90 cursor-pointer transition-all"
        >
          <Image
            src={projects[currentProjectIndex]?.image}
            alt=""
            width={"1000"}
            height={"1000"}
            className="w-full h-full object-cover"
          />
        </Link>
        <div className="flex flex-col w-full">
          <div className="flex gap-6 justify-between items-center">
            <h2 className="text-4xl font-semibold">Works</h2>
            <p className="text-lg font-medium">{projects?.length}</p>
          </div>
          <div className="h-[2px] w-full bg-current mb-4"></div>
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseOver={() => setCurrentProjectIndex(index)}
              className={`h-full w-full p-2 transition-all ${
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
