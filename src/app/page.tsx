"use client";
import Image from "next/image";
import Featured from "./featured/page";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Products from "./product/page";
import New from "./new/page";
import Test from "./testimonial/page";
import Footer from "./footer/page";

// components/WatchSection.js
export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <main className="bg-slate-950 h-max md:w-[1280px] md:h-[712px] lg:w-[100%]">
      <div className="w-[100%] flex justify-between p-8 pb-2 text-[#757570]">
        <div className="font-semibold font-Poppins text-2xl md:text-[200%]">
          ELEGENT <span className="text-white">110</span>{" "}
        </div>
        <div>
          <nav className="text-white space-x-6 md:pr-[2rem] text-2xl md:text-[150%] hidden sm:flex md:block">
            <a href="#" className="hover:text-[#F6FF77] font-light">
              HOME
            </a>
            <a href="#" className="hover:text-[#F6FF77] font-light">
              FEATURED
            </a>
            <a href="#" className="hover:text-[#F6FF77] font-light">
              PRODUCTS
            </a>
            <a href="#" className="hover:text-[#F6FF77] font-light">
              NEW
            </a>
          </nav>
        </div>
        <div className="md:hidden">
          <button
            className=" text-white hover:text-orange-300 absolute cursor-pointer top-[2rem] right-[1rem] w-[2rem] h-[2rem]"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <XMarkIcon className="text-xl " />
            ) : (
              <Bars3Icon className="text-xl " />
            )}
          </button>
        </div>
      </div>

      {/* HEADER SECTION OVER */}

      <div className="space-x-4 h-[80%] w-[80%] flex-col-1 md:flex text-white mx-16 p-8 text-center col-span-8 md:text-left items-center overflow-hidden gap-x-4">
        <div className="h-[80%] w-[80%] m-6 text-wrap pt-6">
          <h1 className="font-bold md:pl-16 md:pb-4 text-2xl md:text-4xl text-center md:text-start font-Merienda">
            Aynn Collections
          </h1>
          <p className="text-xl md:text-2xl pt-4 font-light place-content-center text-center md:text-start md:pl-16 text-stone-50">
            Latest arrival of the new imported watches of the B720 series, with
            a modern and resistant design.
          </p>
          <p className="md:pl-16 pt-8 text-center md:text-start text-[#F6FF77] text-2xl ">
            $1245
          </p>

          <button className="bg-[#f6f8d4] hover:bg-[#F6FF77]  px-3 py-2 items-center md:ml-16 rounded-sm cursor-pointer  font-semibold text-xl text-black ">
            Discover
          </button>
          <button className="bg-[#F6FF77] hover:bg-[#f6f8d4]  px-3 py-2 ml-4 mt-8 rounded-sm cursor-pointer font-semibold text-xl text-black ">
            ADD TO CART
          </button>
        </div>

        {/* IMAGE DIV */}
        <div className="h-[75%] w-[80%] bg-[#272626] border shadow-md shadow-black relative place-content-center">
          <div className="h-[80%] w-[90%] bg-slate-950   justify-center">
            <Image
              src="/gww.png"
              alt="main watch"
              objectFit="cover"
              height={600}
              width={720}
              className="absolute -mx-14 -my-4 items-center "
            />
          </div>
        </div>
      </div>

      <Featured />
      <Products />
       <New />
     <Test />
     <Footer />
    </main>
  );
}
