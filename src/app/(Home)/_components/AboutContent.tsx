"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { CtaChat } from "./HeroSection";
import { useInView } from "react-intersection-observer";
import Aos from "aos";
import "aos/dist/aos.css";

interface Props {
  Main_heading?: any;
  Sub_heading?: any;
  vector_icon?: any;
  Chatnowbtn?: any;
  Chatnowicon?: any;
  Chatnowlink?: any;
  Chatonwhatsappicon?: any;
  Chatonwhatsapp?: any;
  Chatonwhatslink?: any;
}

function AboutContent({
  Main_heading,
  Sub_heading,
  vector_icon,
  Chatnowbtn,
  Chatnowicon,
  Chatnowlink,
  Chatonwhatsappicon,
  Chatonwhatsapp,
  Chatonwhatslink,
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
  return (
    <>
      {Main_heading ? (
        <div ref={ref} className="mx-auto max-w-screen-xl mt-5">
          <div className="h-[2px] w-full bg-zinc-800"></div>
          <div className="grid lg:grid-cols-2 grid-cols-1 p-5">
            <div className="" data-aos="flip-right">
              <div className="flex justify-center items-center  mt-5 lg:mt-20">
                <Image
                  src={vector_icon || "/imgs/workflow_3.webp"}
                  loading="lazy"
                  width={600}
                  height={400}
                  alt="workflow"
                ></Image>
              </div>
            </div>
            <div className="" data-aos="flip-left">
              <div className="flex justify-start items-center mt-5 lg:mt-20">
                <h2 className="text-xl md:text-3xl font-bold lg:text-left text-center dark:text-zinc-100 text-indigo-900 ">
                  {Main_heading}
                </h2>
              </div>
              <p className="mt-2 md:mt-4 md:text-base text-sm font-medium ">
                {Sub_heading}
              </p>
              <CtaChat
                Chatnowbtn={Chatnowbtn}
                Chatnowicon={Chatnowicon}
                Chatnowlink={Chatnowlink}
                Chatonwhatsappicon={Chatonwhatsappicon}
                Chatonwhatsapp={Chatonwhatsapp}
                Chatonwhatslink={Chatonwhatslink}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default AboutContent;
