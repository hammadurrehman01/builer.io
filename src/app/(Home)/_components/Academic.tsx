"use client";
import CustomToolTip from "@/components/common/CustomToolTip";
import Aos from "aos";
import "aos/dist/aos.css";
import { EllipsisVertical } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { CtaButtons } from "./HeroSection";
import ServiceCard from "./Servicecard";

function Academic({
  main_heading,
  sub_heading,
  box_one_icon,
  box_one_heading,
  box_one_para,
  box_one_link,
  box_two_icon,
  box_two_heading,
  box_two_para,
  box_two_link,
  box_three_icon,
  box_three_heading,
  box_three_para,
  box_three_link,
  box_four_icon,
  box_four_heading,
  box_four_para,
  box_four_link,
  explore_more_btn,
  Ordernowbtn_title,
  Chatonwhatsappbtn_title,
  Chatonwhatsappbtn_icon,
  Ordernowbtn_icon,
  Ordernowbtn_link,
  Chatonwhatsappbtn_link,
}: any) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [slides, setSlides] = useState<any[]>([]);

  const initialSlides = [
    {
      imageSrc: box_one_icon,
      title: box_one_heading,
      description: box_one_para,
      link: box_one_link,
      animation: "flip-left",
    },
    {
      imageSrc: box_two_icon,
      title: box_two_heading,
      description: box_two_para,
      link: box_two_link,
      animation: "flip-right",
    },
    {
      imageSrc: box_three_icon,
      title: box_three_heading,
      description: box_three_para,
      link: box_three_link,
      animation: "flip-left",
    },
    {
      imageSrc: box_four_icon,
      title: box_four_heading,
      description: box_four_para,
      link: box_four_link,
      animation: "flip-right",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedSlides = localStorage.getItem("slides");
      setSlides(savedSlides ? JSON.parse(savedSlides) : initialSlides);
    }
  }, []);

  const [tooltipIndex, setTooltipIndex] = useState<number | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [modal, setModal] = useState(false);
  const [loggedIn, setloggedIn] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 800,
      disable: "mobile",
      offset: 100,
    });
  }, [inView]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modal &&
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node) &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setTooltipIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const user: any = localStorage.getItem("user");
    const parsedUser = JSON.parse(user);
    if (parsedUser.isLoggedIn) {
      setloggedIn(true);
    }
  }, []);

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
            {slides.map((service: any, index: number) => (
              <div key={index} className="relative">
                <ServiceCard {...service} explore_more_btn={explore_more_btn} />

                {/* Tooltip Trigger */}

                {loggedIn && (
                  <EllipsisVertical
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent click propagation to parent
                      setTooltipIndex(tooltipIndex === index ? null : index);
                    }}
                    className="absolute top-5 right-5 cursor-pointer"
                  />
                )}

                {/* Tooltip Content */}
                {tooltipIndex === index && (
                  <div ref={tooltipRef}>
                    <CustomToolTip
                      slides={slides}
                      setSlides={setSlides}
                      setTooltipIndex={setTooltipIndex}
                      index={index}
                      modal={modal}
                      setModal={setModal}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div ref={modalRef} className="flex justify-center mt-4 items-center">
            <CtaButtons
              Ordernowbtn_title={Ordernowbtn_title}
              Chatonwhatsappbtn_title={Chatonwhatsappbtn_title}
              Chatonwhatsappbtn_icon={Chatonwhatsappbtn_icon}
              Ordernowbtn_icon={Ordernowbtn_icon}
              Ordernowbtn_link={Ordernowbtn_link}
              Chatonwhatsappbtn_link={Chatonwhatsappbtn_link}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Academic;
