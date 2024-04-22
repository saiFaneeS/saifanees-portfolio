import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightFromCircle } from "lucide-react";
import { useNavbar } from "@/context/Navbar";
import { useEffect } from "react";

export default function Hero() {
  const { isActive, pageChanged, setPageChanged } = useNavbar();
  useEffect(() => {
    setPageChanged(false);
  }, []);

  return (
    <div
      className={`h-screen flex flex-col justify-start overflow-hidden px-24 max-lg:px-16 max-md:px-12 max-sm:px-4 pt-44 absolute w-full ${
        isActive ? "slide-out-top" : "slide-in-bottom"
      } ${pageChanged ? "hidden" : ""}`}
    >
      <div className="lg:w-11/12 h-full text-6xl w-full max-sm:text-5xl pr-4 font-extrabold">
        <div className="overflow-y-hidden">
          <h1
            className={`leading-none flex flex-wrap break-words justify-between items-center text-left text-slide-in-bottom`}
          >
            FULL
            <div className="min-w-4 flex-1 mx-4 h-2 inline-block bg-slate-950"></div>
            STACK
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1 className="leading-none text-slide-in-bottom break-words">
            DEVELOPER
          </h1>
        </div>
        <ul className="flex gap-6">
          <div className="overflow-hidden">
            <Link
              href={"/https://github.com/saiFaneeS"}
              className="flex gap-2 items-center text-lg font-medium text-slide-in-bottom"
            >
              <ArrowUpRightFromCircle size={18} strokeWidth={2.4} />
              See my projects
            </Link>
          </div>
          <div className="overflow-hidden">
            <Link
              href={"/"}
              className="flex gap-2 items-center text-lg font-medium text-slide-in-bottom"
            >
              <ArrowUpRightFromCircle size={18} strokeWidth={2.4} />
              Github
            </Link>
          </div>
        </ul>

      </div>
        <div className="h-44 max-sm:h-36 w-44 max-sm:w-36 relative -mb-6 -ml-12 max-sm:-ml-8">
          <Image
            src={"/circular-name-img.png"}
            height={500}
            width={500}
            className="h-16 max-sm:h-12 w-16 max-sm:w-12 object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <Image
            src={"/circular-name.png"}
            height={500}
            width={500}
            className="h-full w-full object-contain animate-rotate"
          />
        </div>
      {/*       
      <div className="w-60 aspect-square max-lg:w-48 overflow-hidden absolute right-24 max-lg:right-16 max-md:right-12 max-sm:right-4 bottom-[4vw]">
        <Image
          src={"/saif.jpg"}
          className="w-full h-full object-cover text-slide-in-bottom"
          width={1000}
          height={1000}
        />
      </div> */}
    </div>
  );
}
