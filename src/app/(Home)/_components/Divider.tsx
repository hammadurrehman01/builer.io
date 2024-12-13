import React from "react";
import { CtaChat } from "./HeroSection";

interface Props {
  banner_heading: any;
  chatnow: any;
  chatonwhatsapp: any;
}

function Divider({ banner_heading, chatnow, chatonwhatsapp }: Props) {
  return (
    <div className="mt-4">
      <div
        style={{
          backgroundImage: "url('/imgs/bg_lcd.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-fixed py-10 rounded-xl"
      >
        <div className=" mx-auto max-w-screen-xl p-5">
          <div className="text-center">
            <h2 className="font-extrabold text-white text-xl lg:text-[28px]">
              {banner_heading}
            </h2>
          </div>
          <div className="flex justify-center">
            <CtaChat Chatnowbtn={chatnow} Chatonwhatsapp={chatonwhatsapp} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Divider;
