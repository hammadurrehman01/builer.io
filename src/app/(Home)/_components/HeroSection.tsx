"use client";

import React, { memo, useEffect } from "react";
import Image from "next/image";
import BannerForm from "./BannerForm";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import Aos from "aos";
import "aos/dist/aos.css";
import { Loader2 } from "lucide-react";

interface Props {
  MainHeading?: string;
  SubHeading?: string;
  Bullet1_icon?: string;
  Bullet1_title?: string;
  Bullet2_icon?: string;
  Bullet2_title?: string;
  Bullet3_icon?: string;
  Bullet3_title?: string;
  Ordernowbtn_icon?: string;
  Chatonwhatsappbtn_icon?: string;
  Ordernowbtn_title?: string;
  Chatonwhatsappbtn_title?: string;
  Ordernowbtn_link?: string;
  Chatonwhatsappbtn_link?: string;
  Formtopbar?: string;
  Formheading?: string;
  Inputtwo?: string;
  Inputthree?: string;
  Formbutton?: string;
}

export const HeroSection = ({
  MainHeading,
  SubHeading,
  Bullet1_icon,
  Bullet1_title,
  Bullet2_icon,
  Bullet2_title,
  Bullet3_icon,
  Bullet3_title,
  Ordernowbtn_icon,
  Chatonwhatsappbtn_icon,
  Ordernowbtn_title,
  Chatonwhatsappbtn_title,
  Ordernowbtn_link,
Chatonwhatsappbtn_link,
  Formtopbar,
  Formheading,
  Inputtwo,
  Inputthree,
  Formbutton,
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
  2;
  return (
    <>
      {!MainHeading ? (
        <Loader2 className="animate-spin m-auto my-36 w-8 h-8" />
      ) : (
        <div
          ref={ref}
          className="m-h-[500px] border-b-2 border-indigo-200 -z-10 h-full w-full bg-gradient-to-t from-sky-200 via-purple-200 to-zinc-100 dark:-z-10 dark:m-h-[500px] dark:w-full dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
        >
          <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto max-w-screen-xl py-10 ">
            <div className="py-20 px-5 ">
              <h1 className=" text-center py-2 lg:text-left dark:text-zinc-100 text-zinc-900 text-lg sm:text-4xl font-extrabold ">
                {MainHeading}
              </h1>
              <h2 className="text-center mt-2 lg:text-left dark:text-zinc-100 text-zinc-900  sm:text-2xl font-medium">
                {SubHeading}
              </h2>
              <div className="flex flex-col lg:flex-row items-center xl:w-[50vw] gap-4 sm:mt-2 mt-6">
                <div className="flex items-center gap-4">
                  <Image
                    src={Bullet1_icon || "/imgs/instructor.png"}
                    width={64}
                    height={64}
                    alt="instructor"
                  ></Image>
                  <h3 className="text-center dark:text-zinc-100 text-zinc-900 text-sm md:text-base font-medium">
                    {Bullet1_title}
                  </h3>
                  <div className="hidden lg:block w-[2px] h-20 bg-muted-foreground "></div>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src={Bullet2_icon || "/imgs/record.png"}
                    width={64}
                    height={64}
                    alt="record"
                  ></Image>
                  <h3 className="text-left dark:text-zinc-100 text-zinc-900 text-sm md:text-base font-medium">
                    {Bullet2_title}
                  </h3>
                  <div className="hidden lg:block w-[2px] h-20 bg-muted-foreground "></div>
                </div>
                <div className="flex items-center gap-1">
                  <Image
                    src={Bullet3_icon || "/imgs/affordable.png"}
                    width={64}
                    height={64}
                    alt="phd"
                  ></Image>
                  <h3 className="ml-1 dark:text-zinc-100 text-zinc-900 text-sm md:text-base font-medium">
                    {Bullet3_title}
                  </h3>
                  <div className="hidden lg:block w-[2px] h-16 bg-muted-foreground/0 "></div>
                </div>
              </div>
              <CtaButtons
                Ordernowbtn_icon={Ordernowbtn_icon}
                Chatonwhatsappbtn_icon={Chatonwhatsappbtn_icon}
                Ordernowbtn_title={Ordernowbtn_title}
                Chatonwhatsappbtn_title={Chatonwhatsappbtn_title}
                Ordernowbtn_link={Ordernowbtn_link}
                Chatonwhatsappbtn_link={Chatonwhatsappbtn_link}
              />
            </div>

            <div className="pb-5 px-5 md:pt-12">
              <BannerForm
                Formtopbar={Formtopbar}
                Formheading={Formheading}
                Inputtwo={Inputtwo}
                Inputthree={Inputthree}
                Formbutton={Formbutton}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

interface ButtonProps {
  Ordernowbtn_icon?: any;
  Chatonwhatsappbtn_icon?: any;
  Ordernowbtn_title?: any;
  Chatonwhatsappbtn_title?: any;
  Ordernowbtn_link?: any;
  Chatonwhatsappbtn_link?: any;
}

export function CtaButtons({
  Ordernowbtn_icon,
  Chatonwhatsappbtn_icon,
  Ordernowbtn_title,
  Chatonwhatsappbtn_title,
  Ordernowbtn_link,
  Chatonwhatsappbtn_link,
}: ButtonProps) {
  return (
    <div className="flex flex-col md:flex-row lg:justify-start justify-center items-center mt-5 scale-90 md:scale-100">
      <Link href={Ordernowbtn_link || "/order-now"}>
        <div
          className="flex justify-center items-center border-[2px] border-zinc-400 bg-zinc-100
    transition ease-in duration-200 delay-200 hover:scale-105 hover:shadow-lg py-2 px-4 rounded-xl  m-2"
        >
          <Image
            src={Ordernowbtn_icon || "/imgs/order.png"}
            width={35}
            height={35}
            alt="order"
          />
          <button className="font-medium ml-2 text-zinc-800 md:text-base text-sm ">
            {Ordernowbtn_title}
          </button>
        </div>
      </Link>

      <Link
        href={Chatonwhatsappbtn_link ||
          "https://wa.me/19179331132?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?"
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="flex justify-center items-center border-[2px] dark:bg-zinc-100 bg-zinc-800
transition ease-in duration-200 delay-200 hover:scale-105 hover:shadow-lg py-3 px-4 rounded-xl m-2"
        >
          <Image
            src={Chatonwhatsappbtn_icon || "/imgs/whatsapp.png"}
            width={25}
            height={25}
            alt="whatsapp"
          />
          <button className="font-medium ml-2 text-background md:text-base text-sm">
            {Chatonwhatsappbtn_title}
          </button>
        </div>
      </Link>
    </div>
  );
}

interface ChatProps {
  Chatnowbtn?: any;
  Chatnowicon?: any;
  Chatnowlink?: any;
  Chatonwhatsappicon?: any;
  Chatonwhatsapp?: any;
  Chatonwhatslink?: any;
}

export function CtaChat({
  Chatnowbtn,
  Chatnowicon,
  Chatnowlink,
  Chatonwhatsappicon,
  Chatonwhatsapp,
  Chatonwhatslink,
}: ChatProps) {
  const openChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center mt-5 scale-90 md:scale-100">
      <div
        className="flex justify-center items-center border-[2px] border-zinc-400 bg-indigo-500 transition ease-in duration-200 delay-200 hover:scale-105 hover:shadow-lg py-2 px-4 rounded-xl m-2 cursor-pointer"
        onClick={openChat}
      >
        <Image
          src={Chatnowicon || "/imgs/chat.png"}
          width={32}
          height={32}
          alt="chat"
        />
        <button className="font-medium ml-2 text-zinc-100 md:text-base text-sm">
          {Chatnowbtn}
        </button>
      </div>

      <Link
        href={
          Chatonwhatslink ||
          "https://wa.me/19179331132?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?"
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex justify-center items-center border-[2px] dark:bg-zinc-100 bg-zinc-800 transition ease-in duration-200 delay-200 hover:scale-105 hover:shadow-lg py-3 px-4 rounded-xl m-2">
          <Image
            src={Chatonwhatsappicon || "/imgs/whatsapp.png"}
            width={25}
            height={25}
            alt="whatsapp"
          />
          <button className="font-medium ml-2 text-background md:text-base text-sm">
            {Chatonwhatsapp}
          </button>
        </div>
      </Link>
    </div>
  );
}
