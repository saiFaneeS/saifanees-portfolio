"use client";

import Link from "next/link";
import { ArrowUpRightFromCircle, Loader, Mail } from "lucide-react";
import { useNavbar } from "@/context/Navbar";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import emblaCarouselAutoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function Hero() {
  const { isActive, pageChanged, setPageChanged } = useNavbar();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPageChanged(false);
    // Simulate loading
    setTimeout(() => setLoading(false), 1000);
  }, [setPageChanged]);

  return (
    <div
      className={`h-screen max-sm:h-[90vh] flex flex-col justify-start overflow-hidden px-24 max-lg:px-16 max-md:px-12 max-sm:px-4 pt-44 absolute w-full ${
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
        <div className="overflow-hidden -mr-4">
          <h1 className="leading-none text-slide-in-bottom max-sm:break-words">
            ENGINEER
          </h1>
        </div>

        <ul className="flex gap-6 mt-4">
          <div className="overflow-hidden">
            <Link
              href={"/works"}
              className="flex hover:underline gap-2 items-center text-lg font-medium text-slide-in-bottom"
            >
              <ArrowUpRightFromCircle size={18} strokeWidth={2.4} />
              See my projects
            </Link>
          </div>
        </ul>
      </div>

      {/* spinner */}
      <div className="absolute z-30 right-12 max-lg:right-4 max-md:right-0 max-sm:-right-2 bottom-4 h-44 max-sm:h-36 w-44 max-sm:w-36 -mb-6 -ml-12 max-sm:-ml-8">
        <div
          className="h-16 brightness-50 rounded-full max-sm:h-12 w-16 max-sm:w-12 object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
 overflow-hidden"
        >
          <Image
            src={"/circular-name-img.png"}
            height={500}
            width={500}
            className="h-16 max-sm:h-12 w-16 max-sm:w-12 object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <Link
          href="mailto:saifanees11@gmail.com"
          className="absolute z-30 hover:opacity-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
        >
          <Mail className="lg:h-8 lg:w-8" />
        </Link>
        <Image
          src={"/circular-name.png"}
          height={500}
          width={500}
          className="h-full w-full object-contain animate-rotate"
        />
      </div>

      {/* slider */}
      <div className="relative w-full mt-6">
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
            // emblaCarouselAutoplay,
          }}
        >
          <CarouselContent className="w-full cursor-grab mb-4">
            {[
              "Satisfied Clients Worldwide",
              "Worked as a Freelancer For Companies Across The World",
              "Provided Free Real-world Projects For Experience",
              // "Years of Solid Experience as a Developer",
            ].map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 sm:basis-1/2 md:basis-1/3 pl-0"
              >
                <div
                  className="p-4 bg-transparent border-r"
                  style={{ userSelect: "none" }}
                >
                  <h4 className="font-semibold text-lg hover:cursor-grab">
                    {index === 0
                      ? "5+"
                      : index === 1
                      ? "Global Works"
                      : index === 2
                      ? "Volunteering"
                      : ""}
                  </h4>
                  <p className="text-sm text-gray-600 text-nowrap">{item}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-y-0 right-0 w-1/5 max-sm:w-1/2 bg-gradient-to-r from-transparent to-gray-100 z-10"></div>
      </div>
    </div>
  );
}
