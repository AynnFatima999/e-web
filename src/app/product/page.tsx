import Image from "next/image";
import React from "react";

const Products = () => {
  return (
    <section className="bg-slate-200 h-max md:w-[1280px] md:h-[682px] lg:w-[100%] text-white">
      <div className="w-[80%] md:h-[5%] h-5 bg-slate-950 pt-10 md:pt-8 grid grid-cols md:grid-cols-2 lg:grid-cols-3 pb-1 gap-y-8 gap-x-4 mx-10 md:mx-32 justify-center text-center text-white mt-0"></div>
      <div className="w-[80%] h-[50%] pt-4 grid grid-cols md:grid-cols-2 pb-1 gap-y-8 gap-x-4 mx-10 md:mx-32 justify-center items-center my-20 text-center text-white ">
        <div className="md:bg-slate-950 h-[100%] md:w-[80%] w-96 items-center justify-center">
          {" "}
          <Image
            src="/2w.png"
            alt="Profile Img"
            objectPosition="contain"
            height={900}
            width={900}
            className="w-[80%] h-[80%] m-6 mx-16 md:mx-10"
          />{" "}
        </div>

        <div className=" h-[100%] md:w-[80%] flex flex-col text-gray-900 pb-10">
          <div className="text-black text-6xl font-semibold ">OUR STORY</div>
          <div className="text-xl tracking-wide m-2 font-medium">
            Inspirational Watch of this year
          </div>
          <div className="text-xl m-4 ">
            The latest and modern watches of this year, is available in various
            presentations in this store, discover them now.
          </div>
          <button className="bg-[#272626] hover:bg-[#06087a] px-3 py-2 mt-8 rounded-sm cursor-pointer font-semibold text-xl text-stone-50 ">
            Discover
          </button>
        </div>
      </div>

<section className="bg-slate-200 h-max md:w-[1280px] md:h-[881px] lg:w-[100%] text-white">
      <div className="pt-[4rem] md:pt-[2rem] pb-[1rem] flex justify-center">
          <h1 className="text-3xl md:text-4xl font-Poppins font-semibold decoration decoration-double text-[#272626] hover:text-slate-950 md:pb-1 tracking-tighter ">
            PRODUCTS
          </h1>
        </div>
        <div className="bg-slate-900 w-[80%] md:h-[5%] h-5 pt-10 md:pt-8 grid grid-cols md:grid-cols-2 lg:grid-cols-3 pb-1 gap-y-8 gap-x-4 mx-10 md:mx-32 justify-center text-center text-white mt-0"></div>

        <div className=" w-[80%] md:h-[80%] h-max pt-10 md:pt-8 grid grid-cols md:grid-cols-2 lg:grid-cols-3 pb-1 gap-y-6 mx-10 md:mx-32 justify-center text-center text-white mt-0">
            <div className="w-[200px] h-[274px] bg-slate-500 space-x-0 mx-10 md:mx-20"><Image
            src="/f1.jpg"
            alt="Profile Img"
            height={900}
            width={900}
            className="w-[120%] h-[100%] mx-6 m-3 md:mx-16 md:m-6"
          />{" "}</div>
            <div className="w-[200px] h-[274px] bg-slate-700 space-x-0 mx-10 md:mx-20"><Image
            src="/f2.jpg"
            alt="Profile Img"
            objectPosition="contain"
            height={900}
            width={900}
            className="w-[120%] h-[100%] mx-6 m-3 md:mx-16 md:m-6"
          />{" "}</div>
            <div className="w-[200px] h-[274px] bg-slate-400 space-x-0 mx-10 md:mx-20"><Image
            src="/f3.jpg"
            alt="Profile Img"
            objectPosition="contain"
            height={900}
            width={900}
            className="w-[120%] h-[100%] mx-6 m-3 md:mx-16 md:m-6"
          />{" "}</div>
            <div className="w-[200px] h-[274px] bg-slate-700 space-x-0 mx-10 md:mx-20"><Image
            src="/f4.jpg"
            alt="Profile Img"
            objectPosition="contain"
            height={900}
            width={900}
            className="w-[120%] h-[100%] mx-6 m-3 md:mx-16 md:m-6"
          />{" "}</div>
            <div className="w-[200px] h-[274px] bg-slate-400 space-x-0 mx-10 md:mx-20"><Image
            src="/f5.jpg"
            alt="Profile Img"
            objectPosition="contain"
            height={900}
            width={900}
            className="w-[120%] h-[100%] mx-6 m-3 md:mx-16 md:m-6"
          />{" "}</div>


        </div>

</section>

    </section>
  );
};

export default Products;
