import "aos/dist/aos.css";
import { Metadata } from "next";
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
import { HomeComps } from "./HomeComps";
import { fetchHomeData } from "@/lib/utils";

export const generateMetadata = async (): Promise<Metadata> => {
  const response = await fetchHomeData();
  return {
    title: response?.data?.metatitle || "Default Title",
    description: response?.data?.metadescription || "Default Description",
    alternates: {
      canonical: response?.data?.canonical || "Default Canonical",
    },
    robots: {
      index: response?.data?.robots?.index,
      follow: response?.data?.robots?.follow,
      nocache: response?.data?.robots?.nocache,
      googleBot: {
        index: response?.data?.robots?.googleBot.index,
        follow: response?.data?.robots?.googleBot.follow,
        noimageindex: response?.data?.robots?.googleBot.noimageindex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
};

const Page = async () => {
  const response = await fetchHomeData();

  
  

  if (!response) {
    console.error("Home data is null. Rendering fallback UI.");
    return <div>Failed to load data. Please try again later.</div>;
  }

  const customComponents = [
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
    {
      component: FormContent,
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
    },
    {
      component: LongContent,
      name: "LongContent",
      inputs: [
        {
          name: "heading_one",
          type: "string",
        },
        {
          name: "para_one_part_one",
          type: "string",
        },
        {
          name: "para_one_link",
          type: "string",
        },
        {
          name: "para_one_part_two",
          type: "string",
        },
        {
          name: "heading_two",
          type: "string",
        },
        {
          name: "para_two",
          type: "string",
        },
        {
          name: "heading_three",
          type: "string",
        },
        {
          name: "para_three_part_one",
          type: "string",
        },
        {
          name: "para_three_link",
          type: "string",
        },
        {
          name: "para_three_part_two",
          type: "string",
        },
        {
          name: "point_one",
          type: "string",
        },
        {
          name: "point_two",
          type: "string",
        },
        {
          name: "point_three",
          type: "string",
        },
        {
          name: "point_four",
          type: "string",
        },
        {
          name: "point_five",
          type: "string",
        },
        {
          name: "point_six",
          type: "string",
        },
        {
          name: "point_seven",
          type: "string",
        },
        {
          name: "point_eight",
          type: "string",
        },
        {
          name: "banner_heading",
          type: "string",
        },
        {
          name: "chatnow_btn",
          type: "string",
        },
        {
          name: "chatonwhatsapp",
          type: "string",
        },
        {
          name: "heading_four",
          type: "string",
        },
        {
          name: "para_four",
          type: "string",
        },
        {
          name: "heading_five",
          type: "string",
        },
        {
          name: "para_five_part_one",
          type: "string",
        },
        {
          name: "para_five_link",
          type: "string",
        },
        {
          name: "para_five_part_two",
          type: "string",
        },
        {
          name: "heading_six",
          type: "string",
        },
        {
          name: "para_six",
          type: "string",
        },
        {
          name: "heading_seven",
          type: "string",
        },
        {
          name: "para_seven",
          type: "string",
        },
        {
          name: "heading_eight",
          type: "string",
        },
        {
          name: "para_eight_part_one",
          type: "string",
        },
        {
          name: "para_eight_link",
          type: "string",
        },
        {
          name: "para_eight_part_two",
          type: "string",
        },
        {
          name: "heading_nine",
          type: "string",
        },
        {
          name: "para_nine",
          type: "string",
        },
        {
          name: "heading_ten",
          type: "string",
        },
        {
          name: "para_ten",
          type: "string",
        },
        {
          name: "heading_eleven",
          type: "string",
        },
        {
          name: "para_eleven",
          type: "string",
        },
        {
          name: "heading_twelve",
          type: "string",
        },
        {
          name: "para_twelve",
          type: "string",
        },
      ],
    },
    {
      component: WhyUs,
      name: "WhyUs",
      inputs: [
        {
          name: "card_image_one",
          type: "file",
        },
        {
          name: "card_heading_one",
          type: "string",
        },
        {
          name: "card_para_one",
          type: "string",
        },
        {
          name: "card_image_two",
          type: "string",
        },
        {
          name: "card_heading_two",
          type: "string",
        },
        {
          name: "card_para_two",
          type: "string",
        },
        {
          name: "card_image_three",
          type: "string",
        },
        {
          name: "card_heading_three",
          type: "string",
        },
        {
          name: "card_para_three",
          type: "string",
        },
        {
          name: "card_image_four",
          type: "string",
        },
        {
          name: "card_heading_four",
          type: "string",
        },
        {
          name: "card_para_four",
          type: "string",
        },
        {
          name: "card_image_five",
          type: "string",
        },
        {
          name: "card_heading_five",
          type: "string",
        },
        {
          name: "card_para_five",
          type: "string",
        },
        {
          name: "card_image_six",
          type: "string",
        },
        {
          name: "card_heading_six",
          type: "string",
        },
        {
          name: "card_para_six",
          type: "string",
        },
      ],
    },
    {
      component: Faq,
      name: "Faq",
      inputs: [
        {
          name: "main_heading",
          type: "string",
        },
        {
          name: "sub_heading",
          type: "string",
        },
        {
          name: "faq_heading_one",
          type: "string",
        },
        {
          name: "faq_para_one",
          type: "string",
        },
        {
          name: "faq_heading_two",
          type: "string",
        },
        {
          name: "faq_para_two",
          type: "string",
        },
        {
          name: "faq_heading_three",
          type: "string",
        },
        {
          name: "faq_para_three",
          type: "string",
        },
        {
          name: "faq_heading_four",
          type: "string",
        },
        {
          name: "faq_para_four",
          type: "string",
        },
        {
          name: "faq_heading_five",
          type: "string",
        },
        {
          name: "faq_para_five",
          type: "string",
        },
        {
          name: "faq_heading_six",
          type: "string",
        },
        {
          name: "faq_para_six",
          type: "string",
        },
        {
          name: "faq_heading_seven",
          type: "string",
        },
        {
          name: "faq_para_seven",
          type: "string",
        },
        {
          name: "faq_heading_eight",
          type: "string",
        },
        {
          name: "faq_para_eight",
          type: "string",
        },
      ],
    },
    {
      component: SmallDivider,
      name: "SmallDivider",
      inputs: [
        {
          name: "heading_one",
          type: "string",
        },
        {
          name: "heading_two",
          type: "string",
        },
        {
          name: "heading_three",
          type: "string",
        },
        {
          name: "heading_four",
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
    {
      component: TrustReview,
      name: "TrustReview",
      inputs: [
        {
          name: "main_heading",
          type: "string",
        },
        {
          name: "box_one_heading_one",
          type: "string",
        },
        {
          name: "box_one_para_one",
          type: "string",
        },
        {
          name: "box_two_heading_two",
          type: "string",
        },
        {
          name: "box_two_para_two",
          type: "string",
        },
        {
          name: "box_three_heading_three",
          type: "string",
        },
        {
          name: "box_three_para_three",
          type: "string",
        },
        {
          name: "box_four_heading_four",
          type: "string",
        },
        {
          name: "box_four_para_four",
          type: "string",
        },
        {
          name: "box_five_heading_five",
          type: "string",
        },
        {
          name: "box_five_para_five",
          type: "string",
        },
        {
          name: "box_six_heading_six",
          type: "string",
        },
        {
          name: "box_six_para_six",
          type: "string",
        },
        {
          name: "box_logo",
          type: "file",
        },
        {
          name: "box_website_name",
          type: "string",
        },
        {
          name: "box_website_url",
          type: "string",
        },
      ],
    },
    {
      component: Rating,
      name: "Rating",
      inputs: [
        {
          name: "main_heading",
          type: "string",
        },
        {
          name: "sub_heading",
          type: "string",
        },
        {
          name: "box_one",
          type: "string",
        },
        {
          name: "box_two",
          type: "string",
        },

        {
          name: "box_three",
          type: "string",
        },

        {
          name: "box_four",
          type: "string",
        },

        {
          name: "box_five",
          type: "string",
        },

        {
          name: "box_six",
          type: "string",
        },
        {
          name: "box_seven",
          type: "string",
        },
        {
          name: "box_eight",
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
      component: Academic,
      name: "Academic",
      inputs: [
        {
          name: "main_heading",
          type: "string",
        },
        {
          name: "sub_heading",
          type: "string",
        },
        {
          name: "box_one_heading",
          type: "string",
        },
        {
          name: "box_one_para",
          type: "string",
        },
        {
          name: "box_two_heading",
          type: "string",
        },
        {
          name: "box_two_para",
          type: "string",
        },
        {
          name: "box_three_heading",
          type: "string",
        },
        {
          name: "box_three_para",
          type: "string",
        },
        {
          name: "box_four_heading",
          type: "string",
        },
        {
          name: "box_four_para",
          type: "string",
        },
        {
          name: "explore_more_btn",
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
      component: Sample,
      name: "Sample",
      inputs: [
        {
          name: "main_heading",
          type: "string",
        },
        {
          name: "sub_heading",
          type: "string",
        },
        {
          name: "sample_paper_one_heading",
          type: "string",
        },
        {
          name: "sample_paper_one_subject",
          type: "string",
        },
        {
          name: "sample_paper_one_nop",
          type: "string",
        },
        {
          name: "sample_paper_one_al",
          type: "string",
        },
        {
          name: "sample_paper_one_dt",
          type: "string",
        },

        {
          name: "sample_paper_two_heading",
          type: "string",
        },
        {
          name: "sample_paper_two_subject",
          type: "string",
        },
        {
          name: "sample_paper_two_nop",
          type: "string",
        },
        {
          name: "sample_paper_two_al",
          type: "string",
        },
        {
          name: "sample_paper_two_dt",
          type: "string",
        },

        {
          name: "sample_paper_three_heading",
          type: "string",
        },
        {
          name: "sample_paper_three_subject",
          type: "string",
        },
        {
          name: "sample_paper_three_nop",
          type: "string",
        },
        {
          name: "sample_paper_three_al",
          type: "string",
        },
        {
          name: "sample_paper_three_dt",
          type: "string",
        },

        {
          name: "sample_paper_four_heading",
          type: "string",
        },
        {
          name: "sample_paper_four_subject",
          type: "string",
        },
        {
          name: "sample_paper_four_nop",
          type: "string",
        },
        {
          name: "sample_paper_four_al",
          type: "string",
        },
        {
          name: "sample_paper_four_dt",
          type: "string",
        },
        {
          name: "view_sample_btn",
          type: "string",
        },
      ],
    },
  ];

  return (
    <div>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(response.data.organizationschema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(response.data.websiteschema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(response.data.productschema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(response.data.productschema),
        }}
      />

      {/* <HomeCompsFromBuilder /> */}
      <HomeComps
        response={response}
        customComponents={customComponents}
        darklogo={response?.data?.darklogo}
        lightlogo={response?.data?.lightlogo}
      />
    </div>
  );
};

export default Page;
