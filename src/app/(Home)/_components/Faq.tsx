"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SwordsIcon } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Aos from "aos";
import "aos/dist/aos.css";

interface Props {
  main_heading?: any;
  sub_heading?: any;
  vector_icon?: any;
  faq_heading_one?: any;
  faq_para_one?: any;
  faq_heading_two?: any;
  faq_para_two?: any;
  faq_heading_three?: any;
  faq_para_three?: any;
  faq_heading_four?: any;
  faq_para_four?: any;
  faq_heading_five?: any;
  faq_para_five?: any;
  faq_heading_six?: any;
  faq_para_six?: any;
  faq_heading_seven?: any;
  faq_para_seven?: any;
  faq_heading_eight?: any;
  faq_para_eight?: any;
}

const Faq = ({
  main_heading,
  sub_heading,
  vector_icon,
  faq_heading_one,
  faq_para_one,
  faq_heading_two,
  faq_para_two,
  faq_heading_three,
  faq_para_three,
  faq_heading_four,
  faq_para_four,
  faq_heading_five,
  faq_para_five,
  faq_heading_six,
  faq_para_six,
  faq_heading_seven,
  faq_para_seven,
  faq_heading_eight,
  faq_para_eight,
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

  const [openIndex, setOpenIndex] = useState(0); // Set the first question to be active by default
  const [sOpen, setIsOpen] = useState(false);

  const questions = [
    {
      question: `${faq_heading_one} "${process.env.NEXT_PUBLIC_WEBSITE_NAME}"?`,
      answer: faq_para_one,
    },
    {
      question: faq_heading_two,
      answer: faq_para_two,
    },
    {
      question: faq_heading_three,
      answer: faq_para_three,
    },
    {
      question: faq_heading_four,
      answer: faq_para_four,
    },
    {
      question: faq_heading_five,
      answer: faq_para_five,
    },
    {
      question: faq_heading_six,
      answer: faq_para_six,
    },
    {
      question: faq_heading_seven,
      answer: faq_para_seven,
    },
    {
      question: faq_heading_eight,
      answer: faq_para_eight,
    },
  ];

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {main_heading ? (
        <div ref={ref} className="mx-auto max-w-screen-xl mt-10">
          <h2 className="text-center px-4 text-xl lg:text-4xl font-extrabold dark:text-zinc-100 text-indigo-950">
            {main_heading}
          </h2>
          <h3 className="text-center px-4 text-lg py-2 lg:text-3xl font-bold dark:text-zinc-100 text-indigo-950">
            {sub_heading}
          </h3>

          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 p-5">
            <div data-aos="zoom-in-down" className="">
              <div className="flex items-center justify-center lg:pb-8 sticky top-0 ">
                <Image
                  loading="lazy"
                  className="lg:mt-20 mt-5  rounded-2xl "
                  src={vector_icon || "/imgs/faq_section_1.webp"}
                  width={600}
                  height={600}
                  alt="about-faq-bg"
                />
              </div>
            </div>

            <div className="">
              {questions.map((item, index) => (
                <div data-aos="flip-down" className="md:pt-5 pt-3" key={index}>
                  <h4
                    className="cursor-pointer py-6 px-4  rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-lg md:font-bold text-base  flex justify-between group bg-gradient-to-l from-sky-200 via-purple-200 to-zinc-300 text-zinc-800 transition ease-in duration-150 delay-100"
                    onClick={() => toggleAccordion(index)}
                  >
                    {item.question}
                    <SwordsIcon className="md:text-base text-sm group-hover:rotate-180 group-hover:stroke-gray-700 transition ease-in duration-200 delay-100" />
                  </h4>
                  {openIndex === index && (
                    <p className="py-4 px-4  rounded-br-[10px] rounded-bl-[10px] md:text-base text-sm bg-gradient-to-l from-sky-200 via-purple-200 to-zinc-300 text-zinc-800">
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Faq;
