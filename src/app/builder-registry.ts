"use client";
import { builder, Builder } from "@builder.io/react";
import AboutContent from "./(Home)/_components/AboutContent";
import Faq from "./(Home)/_components/Faq";
import FormContent from "./(Home)/_components/FormContent";
import { HeroSection } from "./(Home)/_components/HeroSection";
import LongContent from "./(Home)/_components/LongContent";
import WorkFlow from "./(Home)/_components/WorkFlow";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(WorkFlow, {
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
      name: "Chatonwhatsappbtn",
      type: "string",
    },
  ],
});

Builder.registerComponent(HeroSection, {
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
});

Builder.registerComponent(Faq, {
  name: "Faq",
});

Builder.registerComponent(LongContent, {
  name: "LongContent",
});

Builder.registerComponent(FormContent, {
  name: "FormContent",
  inputs: [
    {
      name: "Accordion_one_heading",
      type: "string",
    },
    {
      name: "Accordion_one_paragraph",
      type: "string",
    },
    {
      name: "Accordion_two_heading",
      type: "string",
    },
    {
      name: "Accordion_two_paragraph",
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
});

Builder.registerComponent(AboutContent, {
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
});
