"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { useInView } from "react-intersection-observer";
import Aos from "aos";
import "aos/dist/aos.css";

interface Props {
  card_image_one?: any;
  card_heading_one?: any;
  card_para_one?: any;

  card_image_two?: any;
  card_heading_two?: any;
  card_para_two?: any;

  card_image_three?: any;
  card_heading_three?: any;
  card_para_three?: any;

  card_image_four?: any;
  card_heading_four?: any;
  card_para_four?: any;

  card_image_five?: any;
  card_heading_five?: any;
  card_para_five?: any;

  card_image_six?: any;
  card_heading_six?: any;
  card_para_six?: any;
}

const WhyUs = ({
  card_image_one,
  card_heading_one,
  card_para_one,

  card_image_two,
  card_heading_two,
  card_para_two,

  card_image_three,
  card_heading_three,
  card_para_three,

  card_image_four,
  card_heading_four,
  card_para_four,

  card_image_five,
  card_heading_five,
  card_para_five, 

  card_image_six,
  card_heading_six,
  card_para_six,
}: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    Aos.init({
      duration: 800,
      disable: "mobile",
      offset: 100,
    });
  }, [inView]);

  const slideData = [
    {
      id: 1,
      title: card_heading_one,
      description: card_para_one,
      image: card_image_one,
    },
    {
      id: 2,
      title: card_heading_two,
      description: card_para_two,
      image: card_image_two,
    },
    {
      id: 3,
      title: card_heading_three,
      description: card_para_three,
      image: card_image_three,
    },
    {
      id: 4,
      title: card_heading_four,
      description: card_para_four,
      image: card_image_four,
    },
    {
      id: 5,
      title: card_heading_five,
      description: card_para_five,
      image: card_image_five,
    },
    {
      id: 6,
      title: card_heading_six,
      description: card_para_six,
      image: card_image_six,
    },
  ];

  return (
    <div ref={ref} className="mx-auto max-w-screen-xl mt-10 p-3 lg:p-6">
      <h2 className="text-center text-xl md:text-4xl font-bold dark:text-zinc-100 text-violet-950">
        {" "}
        Why Choose US{" "}
      </h2>
      <Swiper
        loop={true}
        spaceBetween={20}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        breakpoints={{
          325: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <Slide {...slide} index={slide.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WhyUs;

const Slide = ({ title, description, image, index, ref }: any) => {
  return (
    <>
      {title ? (
        <div
          className="group mt-5"
          ref={ref}
          data-aos={index % 2 === 0 ? "flip-left" : "flip-right"}
        >
          <div className="relative md:scale-95 scale-90 group-hover:scale-95 md:group-hover:scale-100 group-hover:border-yellow-400 border-[5px] group-hover:bg-indigo-900 transition ease-in duration-200 delay-100 border-indigo-600 lg:h-[360px] w-full rounded-xl p-4 overflow-hidden">
            <div
              style={{
                backgroundImage: "url('/imgs/bg-why.webp')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                transition: "transform 0.5s ease-in-out",
              }}
              className="absolute inset-0 transform translate-y-full group-hover:translate-y-0"
            ></div>
            <div className="relative z-10">
              <div className="flex justify-between">
                <div className="bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center">
                  <Image
                    className="group-hover:-rotate-45 transition ease-in duration-200 delay-100"
                    src={image}
                    width={64}
                    height={64}
                    alt="icon"
                  />
                </div>
                <div className="font-extrabold text-4xl md:text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-yellow-400">
                  {index.toString().padStart(2, "0")}
                </div>
              </div>
              <div className="group-hover:text-gray-200 text-base md:text-[20px] font-bold pt-4">
                {title}
              </div>
              <div className="pt-3 md:text-base text-sm font-medium group-hover:text-gray-200">
                {description}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
