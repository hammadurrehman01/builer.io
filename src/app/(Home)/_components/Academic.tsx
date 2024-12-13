"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { CtaButtons } from "./HeroSection";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import Aos from "aos";
import "aos/dist/aos.css";

const ServiceCard = ({
  imageSrc,
  title,
  description,
  link,
  animation,
  explore_more_btn,
}: any) => {
  return (
    <div data-aos={animation} className="group p-4">
      <div
        className="flex flex-col items-center border-[5px] border-transparent
       bg-gradient-to-t from-violet-400 to-indigo-400 dark:bg-gradient-to-b dark:from-indigo-800 dark:via-zinc-800 dark:to-violet-800 w-full rounded-lg px-4 py-5 md:scale-100 scale-90 group-hover:scale-95 md:group-hover:scale-105 group-hover:border-y-yellow-400  group-hover:shadow-xl transition-transform duration-200 ease-in"
      >
        <div className="flex items-center justify-center bg-yellow-400 rounded-full h-24 w-24">
          <Image src={imageSrc} width={60} height={60} alt={title} />
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="text-base sm:text-lg text-white font-semibold">
            {title}
          </h3>
          <div className="text-zinc-200 font-medium lg:text-base text-xs ">
            {description}
          </div>
          <Link href={link}>
            <div className="rounded-lg px-4 py-2 text-center font-medium bg-amber-400  text-zinc-800 hover:bg-white hover:scale-105 transition ease-in duration-200 delay-200 border-black mt-2">
              {explore_more_btn}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

interface Props {
  main_heading?: any;
  sub_heading?: any;
  box_one_heading?: any;
  box_one_para?: any;
  box_two_heading?: any;
  box_two_para?: any;
  box_three_heading?: any;
  box_three_para?: any;
  box_four_heading?: any;
  box_four_para?: any;
  explore_more_btn?: any;
  Ordernowbtn?: any;
  Chatonwhatsappbtn?: any;
}

function Academic({
  main_heading,
  sub_heading,
  box_one_heading,
  box_one_para,
  box_two_heading,
  box_two_para,
  box_three_heading,
  box_three_para,
  box_four_heading,
  box_four_para,
  explore_more_btn,
  Ordernowbtn,
  Chatonwhatsappbtn,
}: Props) {
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

  const services = [
    {
      imageSrc: "/imgs/webinar.png",
      title: box_one_heading,
      description: box_one_para,
      link: "/take-my-ged-for-me",
      animation: "flip-left",
    },
    {
      imageSrc: "/imgs/online-exam.png",
      title: box_two_heading,
      description: box_two_para,
      link: "/take-my-gre-exam",
      animation: "flip-right",
    },
    {
      imageSrc: "/imgs/online-homework.png",
      title: box_three_heading,
      description: box_three_para,
      link: "/take-gmat-online-exam",
      animation: "flip-left",
    },
    {
      imageSrc: "/imgs/essay.png",
      title: box_four_heading,
      description: box_four_para,
      link: "/lsat-exam-prep",
      animation: "flip-right",
    },
  ];

  return (
    <>
      {main_heading ? (
        <div ref={ref} className="mx-auto max-w-screen-xl mt-10">
          <h2 className="text-2xl md:text-5xl text-center dark:text-zinc-100 text-violet-950 font-extrabold">
            {main_heading}
          </h2>
          <h3 className="py-3 px-4 text-xl md:text-3xl text-center dark:text-zinc-100 text-violet-950 font-bold">
            {sub_heading}
          </h3>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-5 lg:mt-10 mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                explore_more_btn={explore_more_btn}
              />
            ))}
          </div>
          <div className="flex justify-center mt-4 items-center">
            <CtaButtons
              Ordernowbtn={Ordernowbtn}
              Chatonwhatsappbtn={Chatonwhatsappbtn}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Academic;
