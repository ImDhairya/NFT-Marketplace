import React from "react";
import nfts from "../../../public/data/nfts.js";
import Card from "./Card.jsx";
function Products() {
  return (
    <section className=" p-4 pb-24 text-white">
      <div className=" container max-w-6xl mx-auto overflow-hidden">
        <div className="flex flex-col items-center space-y-5">
          <h1 className=" text-2xl md:text-3xl font-medium">
            Explore Hot Products
          </h1>
          <div className=" flex flex-col md:justify-between w-full py-2">
            <p className=" text-slate-400 text-center md:w-2/3 mx-auto">
              Best sellers of the and the week is the tim eof the year where are
              the keys of the scooter week's NFT's
            </p>
          </div>
        </div>
        {/* cards */}
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mb-6 gap-8 mt-12 text-center">
          {
            // nfts.map((item, index) => {
            //  <Card key={index} />
            // })
            nfts.map((item, i) => (
              <Card key={i} item = {item} />
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Products;
