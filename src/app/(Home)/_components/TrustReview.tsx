"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Aos from "aos";
import "aos/dist/aos.css";
import { Star, StarHalf } from "lucide-react";

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} fill="currentColor" />);
  }
  if (hasHalfStar) {
    stars.push(<StarHalf key="half" fill="currentColor" />);
  }

  for (let i = stars.length; i < 5; i++) {
    stars.push(<Star key={`empty-${i}`} />);
  }

  return stars;
};

interface reviewProps {
  name: string;
  text: string;
  rating: number;
  image: string;
  box_logo: any;
  box_website_name: any;
  box_website_url: any;
}

const ReviewCard = ({
  name,
  text,
  rating,
  image,
  box_logo,
  box_website_name,
  box_website_url,
}: reviewProps) => (
  <div className="group">
    <div className="w-full bg-muted/50  rounded-xl border-[2px] scale-95 group-hover:scale-100 group-hover:shadow-xl transition ease-in duration-200 delay-200 ">
      <div className="flex items-center p-2 mt-3">
        <div className="flex items-center bg-white rounded-full w-12 h-12 overflow-hidden">
          <Image
            className="object-cover"
            src={image}
            alt="rating"
            width={48}
            height={64}
          />
        </div>
        <div className="flex-col ml-4">
          <div className="text-[16px] font-bold">{name}</div>
          <div className="flex items-center mt-1 text-yellow-500 fill-amber-400">
            {renderStars(rating)}
          </div>
        </div>
      </div>
      <div className="p-2 font-medium text-sm">{text}</div>
      <div className="border-b-2 border-muted translate-y-2 w-full"></div>
      <div className="flex items-center p-2 mt-3">
        <div className="flex items-center bg-white rounded-full w-12 h-12 overflow-hidden">
          <Image
            className="object-cover"
            src={box_logo || "/assets/weblogo.png"}
            alt="rating"
            width={44}
            height={64}
          />
        </div>
        <div className="flex-col ml-4">
          <div className="text-[16px] font-bold">
            {process.env.NEXT_PUBLIC_WEBSITE_NAME}
          </div>
          <Link href={"/"}>
            <div className="text-gray-500 font-medium text-sm hover:underline hover:text-blue-500">
              {process.env.NEXT_PUBLIC_WEBSITE_NAME}.com
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

interface Props {
  main_heading?: any;
  box_one_image?: any;
  box_one_heading_one?: any;
  box_one_para_one?: any;
  box_two_image?: any;
  box_two_heading_two?: any;
  box_two_para_two?: any;
  box_three_image?: any;
  box_three_heading_three?: any;
  box_three_para_three?: any;
  box_four_image?: any;
  box_four_heading_four?: any;
  box_four_para_four?: any;
  box_five_image?: any;
  box_five_heading_five?: any;
  box_five_para_five?: any;
  box_six_image?: any;
  box_six_heading_six?: any;
  box_six_para_six?: any;
  box_logo?: any;
  box_website_name?: any;
  box_website_url?: any;
}

const TrustReview = ({
  main_heading,
  box_one_image,
  box_one_heading_one,
  box_one_para_one,
  box_two_image,
  box_two_heading_two,
  box_two_para_two,
  box_three_image,
  box_three_heading_three,
  box_three_para_three,
  box_four_image,
  box_four_heading_four,
  box_four_para_four,
  box_five_image,
  box_five_heading_five,
  box_five_para_five,
  box_six_image,
  box_six_heading_six,
  box_six_para_six,
  box_logo,
  box_website_name,
  box_website_url,
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

  const reviews = [
    {
      name: box_one_heading_one,
      text: box_one_para_one,
      rating: 4.5,
      image: box_one_image,
    },
    {
      name: box_two_heading_two,
      text: box_two_para_two,
      rating: 5,
      image: box_two_image,
    },
    {
      name: box_three_heading_three,
      text: box_three_para_three,
      rating: 5,
      image: box_three_image,
    },
    {
      name: box_four_heading_four,
      text: box_four_para_four,
      rating: 4.5,
      image: box_four_image,
    },
    {
      name: box_five_heading_five,
      text: box_five_para_five,
      rating: 4.5,
      image: box_five_image,
    },
    {
      name: box_six_heading_six,
      text: box_six_para_six,
      rating: 5,
      image: box_six_image,
    },
  ];

  return (
    <>
      {main_heading ? (
        <div
          ref={ref}
          className="mx-auto max-w-screen-xl p-4 md:p-0 mt-10"
          data-aos="zoom-in"
        >
          <h2 className="font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 text-center">
            {main_heading}
          </h2>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 p-5">
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                name={review.name}
                image={review.image}
                text={review.text}
                rating={review.rating}
                box_logo={box_logo}
                box_website_name={box_website_name}
                box_website_url={box_website_url}
              />
            ))}
          </div>

          <div className="flex justify-center items-center">
            <div className="py-3 px-5 bg-gradient-to-r from-violet-600 to bg-indigo-600 text-zinc-100 hover:scale-105 transition ease-in duration-200 delay-200 rounded-lg shadow-xl">
              <Link href="/reviews">More Reviews </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TrustReview;
