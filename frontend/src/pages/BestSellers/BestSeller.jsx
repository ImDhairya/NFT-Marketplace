import React from "react";
import {AiOutlineArrowRight} from "react-icons/ai";
import AvatarSlider from "./AvatarSlider";

function BestSeller() {
  return (
    <div>
      <section className=" p-4 py-24 text-white">
        <div className="container max-w-6xl mx-auto overflow-hidden">
          <div className=" space-x-5">
            <h1 className=" text-2xl md:text-3xl font-medium">
              Best Creators & Sellers
            </h1>
            <div className=" flex justify-center md:justify-between w-full py-2">
              <p className=" text-slate-400">
                Best sellers of the week's NFT's
              </p>
              <div className=" md:flex items-center space-x-2 text-indigo-600 font-semibold hidden">
                <p>See More </p>
                <AiOutlineArrowRight size={26} />
              </div>
            </div>
          </div>
          {/* Slider  */}
        </div>
        <AvatarSlider />
      </section>
    </div>
  );
}

export default BestSeller;
