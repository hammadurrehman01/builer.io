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
import { memo, useEffect } from "react";
import { RenderBuilderContent } from "@/components/builder";

interface Props {
  response: any;
  customComponents: any;
  darklogo: any;
  lightlogo: any;
}

// export function HomeComps({
//   response,
//   customComponents,
//   darklogo,
//   lightlogo,
// }: Props) {
//   useEffect(() => {
//     localStorage.setItem("darkLogo", darklogo);
//     localStorage.setItem("lightLogo", lightlogo);
//   }, [darklogo, lightlogo]);

//   return (
//     <RenderBuilderContent
//       model="homepage"
//       content={response}
//       apiKey="3021e7c2623e453297ba70ab561879f3"
//       options={{ includeRefs: true }}
//       customComponents={customComponents}
//     />
//     // <HeroSection />
//     /* <WorkFlow />
//       <AboutContent />
//       <FormContent />
//       <LongContent />
//       <WhyUs /> e
//       <Faq />
//       <SmallDivider />
//       <TrustReview />
//       <Rating />
//       <Academic />
//       <Sample /> */
//     // </RenderBuilderContent>
//   );
// }

export const HomeComps = memo(function HomeComps({
  response,
  customComponents,
  darklogo,
  lightlogo,
}: Props) {
  useEffect(() => {
    if (darklogo) localStorage.setItem("darkLogo", darklogo);
    if (lightlogo) localStorage.setItem("lightLogo", lightlogo);
  }, [darklogo, lightlogo]); // Add dependencies here

  return (
    <RenderBuilderContent
      model="homepage"
      content={response}
      apiKey="3021e7c2623e453297ba70ab561879f3"
      options={{ includeRefs: true }}
      customComponents={customComponents}
    />
  );
});
