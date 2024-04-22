import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowUpRightFromCircle } from "lucide-react";
import { useNavbar } from "@/context/Navbar";

const Contact = () => {
  const { isActive, pageChanged, setPageChanged } = useNavbar();
  useEffect(() => {
    setPageChanged(false);
  }, []);

  return (
    <>
      <div
        className={`h-screen overflow-hidden relative w-full flex flex-col justify-center gap-8 px-24 max-lg:px-16 max-md:px-12 max-sm:px-4 ${
          isActive ? "slide-out-top" : "slide-in-bottom"
        } ${pageChanged ? "hidden" : ""}`}
      >
        <div className="h-full w-full flex flex-col justify-center mt-20">
          <h2 className="text-3xl font-semibold">Contact</h2>
          <div className="h-[2px] w-full bg-current mb-6"></div>
          <div className="flex flex-wrap justify-between items-center gap-6">
            <div className="flex flex-wrap gap-x-6 gap-y-3 items-start leading-none">
              <p className="text-lg font-semibold">MAIL</p>
              <Link
                href="mailto:saifanees11@gmail.com"
                className="text-lg font-medium"
              >
                saifanees11@gmail.com
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 items-start">
              <p className="text-lg font-semibold text-nowrap leading-none">
                SOCAIL MEDIA
              </p>
              <ul className="flex flex-wrap leading-none gap-6">
                <Link
                  href={
                    "https://www.linkedin.com/in/saif-anees/?originalSubdomain=pk"
                  }
                  className="flex gap-2 items-center text-lg font-medium"
                >
                  <ArrowUpRightFromCircle size={18} strokeWidth={2.4} />
                  Linkedin
                </Link>
                <Link
                  href={"/"}
                  className="flex gap-2 items-center text-lg font-medium"
                >
                  <ArrowUpRightFromCircle size={18} strokeWidth={2.4} />
                  Instagram
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
