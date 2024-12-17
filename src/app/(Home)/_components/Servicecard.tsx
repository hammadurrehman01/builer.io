"use client";

import Image from "next/image";
import Link from "next/link";

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

export default ServiceCard;
