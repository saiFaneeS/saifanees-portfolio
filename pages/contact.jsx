import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import { ArrowUpRightFromCircle, CircleArrowOutUpRight } from "lucide-react";
import { useNavbar } from "@/context/Navbar";

const contact = () => {
  const { isActive } = useNavbar();

  return (
    <Layout>
      <div
        className={`h-screen overflow-hidden relative w-full flex flex-col justify-center gap-8 px-24 slide-in-bottom ${
          isActive ? "slide-in-top" : ""
        }`}
      >
        <div className="h-full w-full flex flex-col justify-center mt-20">
          <h2 className="text-3xl font-semibold">Contact</h2>
          <div className="h-[2px] w-full bg-current mb-4"></div>
          <div className="flex justify-between items-center gap-8">
            <div className="flex gap-6 items-center">
              <p className="text-lg font-semibold">MAIL</p>
              <Link href={"/"} className="text-lg font-medium">
                saifanees11@gmail.com
              </Link>
            </div>
            <div className="flex gap-6 items-center">
              <p className="text-lg font-semibold">SOCAIL MEDIA</p>
              <ul className="flex gap-6">
                <Link
                  href={"/"}
                  className="flex gap-2 items-center text-lg font-medium"
                >
                  <ArrowUpRightFromCircle size={18} strokeWidth={2.4} />
                  Github
                </Link>
                <Link
                  href={"/"}
                  className="flex gap-2 items-center text-lg font-medium"
                >
                  <ArrowUpRightFromCircle size={18} strokeWidth={2.4} />
                  Behance
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default contact;
