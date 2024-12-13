"use client";
import { ArrowRightIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import Divider from "./Divider";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import Aos from "aos";
import "aos/dist/aos.css";

interface Props {
  heading_one?: any;
  para_one_part_one?: any;
  para_one_link?: any;
  para_one_part_two?: any;
  heading_two?: any;
  para_two?: any;
  heading_three?: any;
  para_three_part_one?: any;
  para_three_link?: any;
  para_three_part_two?: any;
  point_one?: any;
  point_two?: any;
  point_three?: any;
  point_four?: any;
  point_five?: any;
  point_six?: any;
  point_seven?: any;
  point_eight?: any;
  banner_heading?: any;
  chatnow?: any;
  chatonwhatsapp?: any;
  heading_four?: any;
  para_four?: any;
  heading_five?: any;
  para_five_part_one?: any;
  para_five_link?: any;
  para_five_part_two?: any;
  heading_six?: any;
  para_six?: any;
  heading_seven?: any;
  para_seven?: any;
  heading_eight?: any;
  para_eight_part_one?: any;
  para_eight_link?: any;
  para_eight_part_two?: any;
  heading_nine?: any;
  para_nine?: any;
  heading_ten?: any;
  para_ten?: any;
  heading_eleven?: any;
  para_eleven?: any;
  heading_twelve?: any;
  para_twelve?: any;
}

function LongContent({
  heading_one,
  para_one_part_one,
  para_one_link,
  para_one_part_two,
  heading_two,
  para_two,
  heading_three,
  para_three_part_one,
  para_three_link,
  para_three_part_two,
  point_one,
  point_two,
  point_three,
  point_four,
  point_five,
  point_six,
  point_seven,
  point_eight,
  banner_heading,
  chatnow,
  chatonwhatsapp,
  heading_four,
  para_four,
  heading_five,
  para_five_part_one,
  para_five_link,
  para_five_part_two,
  heading_six,
  para_six,
  heading_seven,
  para_seven,
  heading_eight,
  para_eight_part_one,
  para_eight_link,
  para_eight_part_two,
  heading_nine,
  para_nine,
  heading_ten,
  para_ten,
  heading_eleven,
  para_eleven,
  heading_twelve,
  para_twelve,
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
  const [showMore, setShowMore] = useState(false);

  const handleButtonClick = () => {
    if (showMore) {
      // Scroll to the top of the page
      window.scrollTo({ top: 2700, behavior: "smooth" });
    }
    setShowMore(!showMore);
  };

  return (
    <>
      {heading_one ? (
        <div ref={ref} data-aos="fade-up">
          <div className="mx-auto max-w-screen-xl mt-10">
            <div className="h-[2px] w-full bg-zinc-800"></div>
            <div className="p-5">
              <h2 className="font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950">
                {heading_one}
              </h2>
              <p className="font-medium  md:text-base text-sm pt-4 ">
                {para_one_part_one}
                <Link
                  href={"/pay-someone-to-take-my-class"}
                  className=" text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150"
                >
                  {para_one_link}
                </Link>
                {para_one_part_two}
              </p>

              <h2 className="font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3">
                {heading_two}
              </h2>
              <p className="font-medium  md:text-base text-sm pt-4 ">
                {para_two}
              </p>

              {showMore ? (
                <DynamicContent1
                  heading_three={heading_three}
                  para_three_part_one={para_three_part_one}
                  para_three_link={para_three_link}
                  para_three_part_two={para_three_part_two}
                  point_one={point_one}
                  point_two={point_two}
                  point_three={point_three}
                  point_four={point_four}
                  point_five={point_five}
                  point_six={point_six}
                  point_seven={point_seven}
                  point_eight={point_eight}
                  banner_heading={banner_heading}
                  chatnow={chatnow}
                  chatonwhatsapp={chatonwhatsapp}
                />
              ) : null}
            </div>

            {showMore ? (
              <DynamicContent2
                heading_four={heading_four}
                para_four={para_four}
                heading_five={heading_five}
                para_five_part_one={para_five_part_one}
                para_five_link={para_five_link}
                para_five_part_two={para_five_part_two}
                heading_six={heading_six}
                para_six={para_six}
                heading_seven={heading_seven}
                para_seven={para_seven}
                heading_eight={heading_eight}
                para_eight_part_one={para_eight_part_one}
                para_eight_link={para_eight_link}
                para_eight_part_two={para_eight_part_two}
                heading_nine={heading_nine}
                para_nine={para_nine}
                heading_ten={heading_ten}
                para_ten={para_ten}
                heading_eleven={heading_eleven}
                para_eleven={para_eleven}
                heading_twelve={heading_twelve}
                para_twelve={para_twelve}
              />
            ) : null}
          </div>

          <div className="flex justify-center items-center mt-3">
            <button
              className="px-5 py-2 rounded-xl bg-violet-500 font-medium text-zinc-100"
              onClick={handleButtonClick}
            >
              {showMore ? "Read less" : "Read More"}
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default LongContent;

interface DynamicContent1Props {
  heading_three?: any;
  para_three_part_one?: any;
  para_three_link?: any;
  para_three_part_two?: any;
  point_one?: any;
  point_two?: any;
  point_three?: any;
  point_four?: any;
  point_five?: any;
  point_six?: any;
  point_seven?: any;
  point_eight?: any;
  banner_heading?: any;
  chatnow?: any;
  chatonwhatsapp?: any;
}

function DynamicContent1({
  heading_three,
  para_three_part_one,
  para_three_link,
  para_three_part_two,
  point_one,
  point_two,
  point_three,
  point_four,
  point_five,
  point_six,
  point_seven,
  point_eight,
  banner_heading,
  chatnow,
  chatonwhatsapp,
}: DynamicContent1Props) {
  return (
    <>
      <div>
        <h2 className="font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3">
          {heading_three}
        </h2>
        <p className="font-medium  md:text-base text-sm pt-4 ">
          {para_three_part_one}
          <Link
            href={"/take-my-exam"}
            className=" text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150"
          >
            {para_three_link}
          </Link>
          {para_three_part_two}
        </p>

        <div className="flex items-center mt-3 ">
          <ArrowRightIcon />
          <p className="ml-2 text-sm md:text-base ">{point_one}</p>
        </div>
        <div className="flex items-center mt-3 ">
          <ArrowRightIcon />
          <p className="ml-2 text-sm md:text-base ">{point_two}</p>
        </div>
        <div className="flex items-center mt-3 ">
          <ArrowRightIcon />
          <p className="ml-2 text-sm md:text-base ">{point_three}</p>
        </div>
        <div className="flex items-center mt-3 ">
          <ArrowRightIcon />
          <p className="ml-2 text-sm md:text-base ">{point_four}</p>
        </div>
        <div className="flex items-center mt-3 ">
          <ArrowRightIcon />
          <p className="ml-2 text-sm md:text-base ">{point_five}</p>
        </div>
        <div className="flex items-center mt-3 ">
          <ArrowRightIcon />
          <p className="ml-2 text-sm md:text-base ">{point_six}</p>
        </div>
        <div className="flex items-center mt-3 ">
          <ArrowRightIcon />
          <p className="ml-2 text-sm md:text-base ">{point_seven}</p>
        </div>
        <div className="flex items-center mt-3 ">
          <ArrowRightIcon />
          <p className="ml-2 text-sm md:text-base ">{point_eight}</p>
        </div>
      </div>
      <Divider
        banner_heading={banner_heading}
        chatnow={chatnow}
        chatonwhatsapp={chatonwhatsapp}
      />
    </>
  );
}

interface DynamicContent2Props {
  heading_four: any;
  para_four: any;
  heading_five: any;
  para_five_part_one: any;
  para_five_link: any;
  para_five_part_two: any;
  heading_six: any;
  para_six: any;
  heading_seven: any;
  para_seven: any;
  heading_eight: any;
  para_eight_part_one: any;
  para_eight_link: any;
  para_eight_part_two: any;
  heading_nine: any;
  para_nine: any;
  heading_ten: any;
  para_ten: any;
  heading_eleven: any;
  para_eleven: any;
  heading_twelve: any;
  para_twelve: any;
}

function DynamicContent2({
  heading_four,
  para_four,
  heading_five,
  para_five_part_one,
  para_five_link,
  para_five_part_two,
  heading_six,
  para_six,
  heading_seven,
  para_seven,
  heading_eight,
  para_eight_part_one,
  para_eight_link,
  para_eight_part_two,
  heading_nine,
  para_nine,
  heading_ten,
  para_ten,
  heading_eleven,
  para_eleven,
  heading_twelve,
  para_twelve,
}: DynamicContent2Props) {
  return (
    <>
      <div className="mx-auto max-w-screen-xl mt-5">
        <div className="p-5">
          <h2 className="font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3">
            {heading_four}
          </h2>

          <p className="font-medium  md:text-base text-sm pt-4">{para_four}</p>

          <h2 className="font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3">
            {heading_five}
          </h2>

          <p className="font-medium  md:text-base text-sm pt-4">
            {para_five_part_one}
            <Link
              href={"/take-gmat-online-exam"}
              className=" text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150"
            >
              {para_five_link}
            </Link>
            {para_five_part_two}
          </p>

          <h2 className="font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3">
            {heading_six}
          </h2>

          <p className="font-medium  md:text-base text-sm pt-4">{para_six}</p>

          <h2 className="font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3">
            {heading_seven}
          </h2>

          <p className="font-medium  md:text-base text-sm pt-4">{para_seven}</p>

          <h3 className="font-bold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3">
            {" "}
            {heading_eight}
          </h3>
          <p className="font-medium  md:text-base text-sm pt-4">
            {para_eight_part_one}
            <Link
              href={"/take-my-gre-exam"}
              className=" text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150"
            >
              {para_eight_link}
            </Link>
            {para_eight_part_two}
          </p>

          <h3 className="font-bold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3">
            {heading_nine}
          </h3>
          <p className="font-medium  md:text-base text-sm pt-4">{para_nine}</p>

          <h3 className="font-bold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3">
            {heading_ten}
          </h3>

          <p className="font-medium  md:text-base text-sm pt-4">{para_ten}</p>

          <h3 className="font-bold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3">
            {heading_eleven}
          </h3>

          <p className="font-medium  md:text-base text-sm pt-4">
            {para_eleven}
          </p>

          <h2 className="font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3">
            {heading_twelve}
          </h2>

          <p className="font-medium  md:text-base text-sm pt-4">
            {para_twelve}
          </p>
        </div>
      </div>
    </>
  );
}
