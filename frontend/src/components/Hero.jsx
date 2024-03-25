import "swiper/css";
import React, {useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import banner1 from "/images/banner/banner1.png";
import banner2 from "/images/banner/banner2.png";
import banner3 from "/images/banner/banner3.png";
function Hero() {
  return (
    <div>
      <section className=" mt-3 text-white relative overflow-hidden ">
        <div className="container max-w-screen-xl mx-auto ">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img
                src={banner1}
                alt="banner img"
                className=" rounded-md h-60 md:h-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src={banner2}
                alt="banner img"
                className=" rounded-md h-60 md:h-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src={banner3}
                alt="banner img"
                className=" rounded-md h-60 md:h-auto"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default Hero;
