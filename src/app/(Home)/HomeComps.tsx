"use client";

import { BuilderComponent } from "@builder.io/react";
import "aos/dist/aos.css";
import AboutContent from "./_components/AboutContent";
import Academic from "./_components/Academic";
import Faq from "./_components/Faq";
import FormContent from "./_components/FormContent";
import { HeroSection } from "./_components/HeroSection";
import LongContent from "./_components/LongContent";
import Rating from "./_components/Rating";
import Sample from "./_components/Sample";
import SmallDivider from "./_components/SmallDivider";
import TrustReview from "./_components/TrustReview";
import WhyUs from "./_components/WhyUs";
import WorkFlow from "./_components/WorkFlow";
import { useState } from "react";
import { Loader2 } from "lucide-react";

// export function HomeCompsFromBuilder() {
//   return (
//     <BuilderComponent
//       model="homepage"
//       apiKey="3021e7c2623e453297ba70ab561879f3"
//       options={{ includeRefs: true }}
//     >
//       <HeroSection />
//       <WorkFlow />
//       <AboutContent />
//       <FormContent />
//       <LongContent />
//       <WhyUs />
//       <Faq />
//       <SmallDivider />
//       <TrustReview />
//       <Rating />
//       <Academic />
//       <Sample />
//     </BuilderComponent>
//   );
// }

export function HomeComps() {
  const customComponents = [
    {
      component: WorkFlow,
      name: "WorkFlow",
      inputs: [
        {
          name: "Main_heading",
          type: "string",
        },
        {
          name: "Sub_heading",
          type: "string",
        },
        {
          name: "Slide_one_heading",
          type: "string",
        },
        {
          name: "Slide_one_para",
          type: "string",
        },
        {
          name: "Slide_two_heading",
          type: "string",
        },
        {
          name: "Slide_two_para",
          type: "string",
        },
        {
          name: "Slide_three_heading",
          type: "string",
        },
        {
          name: "Slide_three_para",
          type: "string",
        },
        {
          name: "Ordernowbtn",
          type: "string",
        },
        {
          name: "Chatonwhatsappbtn",
          type: "string",
        },
      ],
    },
    {
      component: AboutContent,
      name: "AboutContent",
      inputs: [
        {
          name: "Main_heading",
          type: "string",
        },
        {
          name: "Sub_heading",
          type: "string",
        },
        {
          name: "Chatnowbtn",
          type: "string",
        },
        {
          name: "Chatonwhatsapp",
          type: "string",
        },
      ],
    },
    { component: FormContent, name: "FormContent" },
    { component: LongContent, name: "LongContent" },
    { component: WhyUs, name: "WhyUs" },
    { component: Faq, name: "Faq" },
    { component: SmallDivider, name: "SmallDivider" },
    { component: TrustReview, name: "TrustReview" },
    { component: Rating, name: "Rating" },
    { component: Academic, name: "Academic" },
    { component: Sample, name: "Sample" },
    {
      component: HeroSection,
      name: "HeroSection",
      inputs: [
        {
          name: "Bullet1",
          type: "string",
        },
        {
          name: "Bullet2",
          type: "string",
        },
        {
          name: "Bullet3",
          type: "string",
        },
        {
          name: "MainHeading",
          type: "string",
        },
        {
          name: "SubHeading",
          type: "string",
        },
        {
          name: "Ordernowbtn",
          type: "string",
        },
        {
          name: "Chatonwhatsappbtn",
          type: "string",
        },
        {
          name: "Formtopbar",
          type: "string",
        },
        {
          name: "Formheading",
          type: "string",
        },
        {
          name: "Inputone",
          type: "string",
        },
        {
          name: "Inputtwo",
          type: "string",
        },
        {
          name: "Inputthree",
          type: "string",
        },
        {
          name: "Formbutton",
          type: "string",
        },
        {
          name: "Metatitle",
          type: "string",
        },
        {
          name: "Metadescription",
          type: "string",
        },
        {
          name: "Canonical",
          type: "string",
        },
      ],
    },
  ];
  return (
    <BuilderComponent
      model="homepage"
      apiKey="3021e7c2623e453297ba70ab561879f3"
      options={{ includeRefs: true }}
      customComponents={customComponents}
    >
      <HeroSection />
      <WorkFlow />
      <AboutContent />
      <FormContent />
      <LongContent />
      <WhyUs />
      <Faq />
      <SmallDivider />
      <TrustReview />
      <Rating />
      <Academic />
      <Sample />
    </BuilderComponent>
  );
}

// export default HomeComps;
