import Link from "next/link";
import Layout from "./Layout";
import Image from "next/image";
import { ArrowUpRightFromCircle } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      <div className="h-screen flex justify-start items-start px-24 py-44">
        <div className="text-6xl font-extrabold">
          <h1 className="leading-none flex justify-center items-center">
            FULL<div className="w-16 mx-4 h-2 inline-block bg-slate-950"></div>
            STACK
          </h1>
          <h1 className="leading-none">DEVELOPER</h1>
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
        <div className="w-60 h-60 ml-12 mt-5 overflow-hidden">
          <Image
            src={"/saif.jpg"}
            className="w-full h-full object-cover slide-in-right"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </Layout>
  );
}
