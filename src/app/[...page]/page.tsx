import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";
import FormContent from "../(Home)/_components/FormContent";
import LongContent from "../(Home)/_components/LongContent";
import WhyUs from "../(Home)/_components/WhyUs";
import Faq from "../(Home)/_components/Faq";
import SmallDivider from "../(Home)/_components/SmallDivider";
import TrustReview from "../(Home)/_components/TrustReview";
import Rating from "../(Home)/_components/Rating";
import Academic from "../(Home)/_components/Academic";
import Sample from "../(Home)/_components/Sample";
import { HeroSection } from "../(Home)/_components/HeroSection";
import AboutContent from "../(Home)/_components/AboutContent";
import WorkFlow from "../(Home)/_components/WorkFlow";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page(props: PageProps) {
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
  const builderModelName = "homepage";

  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
    })

    .toPromise();

  return (
    <RenderBuilderContent
      content={content}
      model={builderModelName}
      customComponents={customComponents}
    />
  );
}
