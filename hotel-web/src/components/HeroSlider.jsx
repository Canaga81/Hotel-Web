import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from 'swiper/modules';
import Img1 from "../images/1.jpg";
import Img2 from "../images/2.jpg";
import Img3 from "../images/3.jpg";

const HeroSlider = () => {
  const slides = [
    {
      title: "Your Luxury Hotel For Vacation",
      bg: Img1,
      btnText: "See our rooms",
    },
    {
      title: "Rooms with a beautiful view",
      bg: Img2,
      btnText: "See our rooms",
    },
    {
      title: "Quality and big hotel",
      bg: Img3,
      btnText: "See our rooms",
    },
  ];

  return (
    <Swiper 
    modules={[EffectFade, Autoplay]}
    effect={'fade'}
    loop={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,

    }}
    className="heroSlider h-[600px] lg:h-[860px]">
      {slides.map((slide, index) => {
        const { title, bg, btnText } = slide;

        return (
          <SwiperSlide key={index} className="h-full relative flex justify-center items-center">
            <div className="z-20 text-white flex flex-col items-center">
              <div className="uppercase font-tertiary tracking-[6px] mb-5 text-center">Just Enjoy and relax</div>
              <h1 className="text-[32px] text-center font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight">{title}</h1>
              <button className="bg-accent mx-auto py-2 px-4 lg:py-3 lg:px-6 text-center uppercase font-tertiary text-[18px] hover:opacity-75 transition duration-300 inline-block mt-6">{btnText}</button>
            </div>
            <div className="absolute w-full h-full">
              <img className="object-cover h-full w-full" src={bg} alt="" />
            </div>
            <div className="absolute w-full h-full bg-black/70"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
