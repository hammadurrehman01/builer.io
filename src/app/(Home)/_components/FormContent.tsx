"use client";
import React, { useEffect } from "react";
import { CtaButtons } from "./HeroSection";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useInView } from "react-intersection-observer";
import Aos from "aos";
import "aos/dist/aos.css";

interface Props {
  Accordion_one_heading?: any;
  Accordion_one_paragraph?: any;
  Accordion_two_heading?: any;
  Accordion_two_paragraph?: any;
  vector_icon?: any;
  Ordernowbtn_title?: any;
  Chatonwhatsappbtn_title?: any;
  Ordernowbtn_icon?: any;
  Chatonwhatsappbtn_icon?: any;
  Ordernowbtn_link?: any;
  Chatonwhatsappbtn_link?: any;
}

function FormContent({
  Accordion_one_heading,
  Accordion_one_paragraph,
  Accordion_two_heading,
  Accordion_two_paragraph,
  vector_icon,
  Ordernowbtn_icon,
  Chatonwhatsappbtn_title,
  Ordernowbtn_title,
  Chatonwhatsappbtn_icon,
  Ordernowbtn_link,
  Chatonwhatsappbtn_link,
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
      {Accordion_one_heading ? (
        <div ref={ref} className="mx-auto max-w-screen-xl mt-10">
          <div className="h-[2px] w-full bg-zinc-800"></div>
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 p-5 mt-5">
            <div className="">
              <div data-aos="flip-down" className="md:pt-6 pt-8 ">
                <Accordion type="single" defaultValue="item-1" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <h2 className="cursor-pointer text-left py-2 rounded rounded-tr-[20px] rounded-tl-[20px]  md:text-xl font-bold flex justify-between group  ">
                        {Accordion_one_heading}
                      </h2>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                        {Accordion_one_paragraph}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px]  md:text-xl font-bold flex justify-between group  ">
                        {" "}
                        {Accordion_two_heading}
                      </h2>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                        {Accordion_two_paragraph}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <CtaButtons
                Ordernowbtn_icon={Ordernowbtn_icon}
                Ordernowbtn_title={Ordernowbtn_title}
                Chatonwhatsappbtn_icon={Chatonwhatsappbtn_icon}
                Chatonwhatsappbtn_title={Chatonwhatsappbtn_title}
                Ordernowbtn_link={Ordernowbtn_link}
                Chatonwhatsappbtn_link={Chatonwhatsappbtn_link}
              />
            </div>

            <div data-aos="zoom-in-down" className="">
              <div className="flex items-center justify-center mt-5">
                <Image
                  loading="eager"
                  src={vector_icon || "/imgs/form-content-img.webp"}
                  width={500}
                  height={333}
                  alt="content-img"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default FormContent;
