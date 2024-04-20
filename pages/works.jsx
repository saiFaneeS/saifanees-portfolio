import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Image from "next/image";
import Link from "next/link";

const Works = () => {
  const projects = [
    { name: "Agency", image: "/saif.jpg" },
    { name: "MS Real Estate", image: "/husban.png" },
    { name: "Modern Standards Luxury Motors", image: "/saif.jpg" },
    { name: "Oh GHAD!", image: "/husban.png" },
  ];

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
    <Layout>
      <div className="h-screen relative flex justify-between items-end gap-8 px-24 py-24">
        <Link
          href={"/"}
          className="h-96 aspect-video relative hover:brightness-90 cursor-pointer transition-all"
        >
          {/* <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 px-12 py-2 z-10">Visit</button> */}
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
            <h2 className="text-3xl font-semibold">Works</h2>
            <p className="text-lg font-medium">{projects?.length}</p>
          </div>
          <div className="h-[2px] w-full bg-current mb-4"></div>
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseOver={() => setCurrentProjectIndex(index)}
              className={`h-full w-full p-2 transition-all ${
                index === currentProjectIndex
                  ? "bg-gray-950 text-white"
                  : ""
              }`}
            >
              <span>{project.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Works;
