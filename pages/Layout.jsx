import Navbar from "@/components/Navbar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <div>{children}</div>
      {/* <>
        <svg
          viewBox="0 0 200 100"
          xmlns="http://www.w3.org/2000/svg"
          className="fixed h-full w-full object-fill border border-red-500 top-0 max-md:-top-[5%] left-0 -z-10 opacity-20 grayscale"
        >
          <filter id="noiseFilter" className="h-screen w-full">
            <feTurbulence
            className="h-screen w-full"
              type="fractalNoise"
              baseFrequency="10"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>

          <rect className="h-screen w-screen" filter="url(#noiseFilter)" />
        </svg>
      </> */}
    </div>
  );
};

export default Layout;
