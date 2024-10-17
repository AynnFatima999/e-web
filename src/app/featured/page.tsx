import Image from 'next/image';
import React from 'react'

const Featured = () => {
  return (
    <section className="bg-slate-200 h-max md:w-[1280px] md:h-[624px] lg:w-[100%] text-white">
         <div className="pt-[4rem] md:pt-[2rem] pb-[1rem] flex justify-center">
          <h1 className="text-3xl md:text-4xl font-Poppins font-semibold decoration decoration-double text-[#272626] hover:text-slate-950 md:pb-1 tracking-tighter ">
            FEATURED
          </h1>
        </div>

        <div className="w-[80%] pt-8 grid grid-cols md:grid-cols-2 lg:grid-cols-3 pb-1 gap-y-8 gap-x-4 mx-10 md:mx-32 justify-center text-center text-black " >
          <div className=" h-[441px]  w-[312px] shadow-sm shadow-slate-950 transform  hover:translate-y-6 transition-all duration-200 relative">
            <div className="h-[100%]  w-[100%] flex flex-col gap-y-4 items-center py-12 px-4 ">
              {" "}
              <Image
                src="/w13.png"
                alt="Profile Img"
                objectPosition='fill'
                height={800}
                width={700}
                className=""
              />{" "}
             
              <p className="pt-0 text-lg font-sans font-bold">
                INGERSOLL
              </p>
              <button className="bg-[#272626] hover:bg-[#06087a] px-3 py-2 mt-8 rounded-sm cursor-pointer font-semibold text-xl text-stone-50 ">
            ADD TO CART
          </button>
            </div>
          </div>
          
          <div className=" h-[312px] w-[312px] shadow-sm shadow-slate-950 transform  hover:translate-y-6 transition-all duration-200 ">
            <div className="flex flex-col gap-y-4 items-center m-6 ">
              {" "}
              <Image
                src="/w15.png"
                alt="Profile Img"
                objectPosition='fill'
                height={700}
                width={700}
                className=""
              />{" "}
             
              <p className="pt-0 text-lg font-sans font-bold">
                JAZMASTERR.
              </p>
              <button className="bg-[#272626] hover:bg-[#06087a] px-3 py-1 rounded-sm cursor-pointer font-semibold text-md text-stone-50  ">
            ADD TO CART
          </button>
            </div>
          </div>
          
          <div className=" h-[312px]  w-[312px] shadow-sm shadow-slate-950 transform  hover:translate-y-6 transition-all duration-200">
            <div className="flex flex-col gap-y-4 items-center p-4 ">
              {" "}
              <Image
               src="/w12.png"
               alt="Profile Img"
               objectPosition='fill'
               height={700}
               width={700}
               className=""
              />{" "}
             
              <p className="pt-0 text-lg font-sans font-bold">
                ROZELLAX
              </p>
              <button className="bg-[#272626] hover:bg-[#06087a] px-3 py-1 rounded-sm cursor-pointer font-semibold text-md text-stone-50  ">
            ADD TO CART
          </button>
            </div>
          </div>
          
          
          </div>


    </section>
  );
}

export default Featured ;
