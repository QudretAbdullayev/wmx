import ProgramPage from "@/modules/ProgramPage";
import { fetchData } from "@/utils/httpService";

// export async function generateMetadata({ params }) {
//   const { locale } = await params;
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}home/seo`);

//   if (res.status !== 200) return

//   const data = await res.json();
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

//   return {
//     title: data.meta_title,
//     description: data.meta_description,
//     openGraph: {
//       title: data.meta_title,
//       description: data.meta_description,
//       images: [data.og_image],
//       url: `${baseUrl}${locale === "en" ? "" : locale}`,
//       type: 'website',
//       siteName: 'Boutique 19 Hotel',
//     },
//     alternates: {
//       canonical: `${baseUrl}${locale === "en" ? "" : locale}`,
//       languages: {
//         'x-default': baseUrl,
//         en: `${baseUrl}`,
//         az: `${baseUrl}az`,
//       },
//     },
//   };
// }

export default async function Page({ params }) {
  const { locale } = await params;
  const data = {
    color: "#FF3C2A",
    seo: {
      title: "Program Page - Untitled UI",
      description: "This is the program page description.",
      keywords: "program, untitled ui, design system",
      openGraph: {
        image: "/images/og-image.png",
      },
    },
    hero: {
      title: "Not loud. Not rushed. Just emerging as a CMO with clarity.",
      description:
        "A premium program designed to help marketing professionals lead with strategy, drive business impact, and think like C-level executives.",
      tags: ["Campus/Online", "4 months", "Diploma"],
      button: "Fuel the fire",
      image: "/images/founder.png",
      name: "Vugar Mehdiyev",
      position: "CEO & Founder",
    },
    faq: {
      section_title: "Frequently Asked Questions",
      faqs: [
        {
          question: "Do you provide certificates?",
          answer:
            "Some sessions are live, while others are available as pre-recorded videos you can watch anytime. Yes, all our bootcamps are fully online and conducted via Zoom.",
        },
        {
          question: "Does Untitled UI include the new Figma features?",
          answer:
            "Yes, Untitled UI is regularly updated to include the latest Figma features and components to keep your design system current.",
        },
        {
          question: "Is there a dark mode version of the kit?",
          answer:
            "Yes, the kit includes both light and dark mode versions of all components for comprehensive design coverage.",
        },
        {
          question: 'What does "lifetime access" mean?',
          answer:
            "Lifetime access means you get permanent access to the current version and all future updates without any additional fees.",
        },
        {
          question: "How do I access updates after purchasing?",
          answer:
            "You'll receive email notifications about updates and can download the latest version from your account dashboard at any time.",
        },
      ],
    },
    professor: {
      section_title: "Your Professor",
      front_image: "/images/founder.png",
      background_image: "/images/bg-image-4.svg",
      front_image_title: "Vugar Mehdiyev",
      title: "Ali Huseynov, a leading authority on marketing and brand",
      description:
        "Mark is a former adjunct Professor of Marketing at Melbourne Business School. He has a PhD in Marketing from Lancaster University and has been a marketing professor at London Business School, MIT Sloan (visiting), and the University of Minnesota. He has been the recipient of MBA teaching awards at LBS, MIT, Singapore Management University and MBS.\r\n\r\n\r\nMark has been teaching brand management to MBA students at elite business schools and a consulting career working on some of the most successful brands on the planet such as Subaru, De Beers, Ericsson, Sephora, News Corp, Hennessy and Baxter.",
    },
    course_features: {
      section_title: "Course features",
      main_title: "Practical UI Design case study",
      main_description:
        "Each week at Memorisely you'll complete 6-10 hours of practical case study based tasks, attend live classes and receive personal feedback",
      feature_cards: [
        {
          title: "Practical UI Design",
          description:
            "Each week at Memorisely you'll complete 6-10 hours of practical case study based tasks, attend live classes and receive.",
        },
        {
          title: "Practical UI Design case study",
          description:
            "Each week at Memorisely you'll complete 6-10 hours of practical case study based tasks, attend live classes and receive.",
        },
        {
          title: "Practical UI Design case study",
          description:
            "Each week at Memorisely you'll complete 6-10 hours of practical case study based tasks, attend live classes and receive.",
        },
        {
          title: "Practical UI Design case study",
          description:
            "Each week at Memorisely you'll complete 6-10 hours of practical case study based tasks, attend live classes and receive.",
        },
        {
          title: "Practical UX",
          description:
            "Each week at Memorisely you'll complete 6-10 hours of practical case study based tasks, attend live classes and receive.",
        },
        {
          title: "Practical UI Design case study",
          description:
            "Each week at Memorisely you'll complete 6-10 hours of practical case study based tasks, attend live classes and receive.",
        },
      ],
    },
    modules: {
      course_curriculum: {
        blocks: [
          {
            id: 1,
            block_name: "Block 1",
            section: "Core Knowledge",
            status: "expanded",
            modules: [
              {
                id: 7,
                title: "Module 7: Personal Leadership & Influence",
              },
              {
                id: 8,
                title: "Module 8: Team Leadership & Organizational Design",
              },
              {
                id: 8,
                title: "Module 8: Team Leadership & Organizational Design",
              },
              {
                id: 8,
                title: "Module 8: Team Leadership & Organizational Design",
              },
            ],
          },
          {
            id: 2,
            block_name: "Block 1",
            section: "Marketing Technologie & Innovation",
            status: "collapsed",
            modules: [],
          },
          {
            id: 3,
            block_name: "Block 1",
            section: "Leadership & Management",
            status: "collapsed",
            modules: [],
          },
          {
            id: 4,
            block_name: "Block 1",
            section: "Mastering C-SUIT",
            status: "collapsed",
            modules: [],
          },
        ],
      },
      ui_indicators: {
        expanded_icon: "−",
        collapsed_icon: "+",
      },
      summary: {
        total_blocks: 4,
        total_visible_modules: 4,
        sections: [
          "Core Knowledge",
          "Marketing Technologie & Innovation",
          "Leadership & Management",
          "Mastering C-SUIT",
        ],
      },
    },
    about: {
      program: {
        title: "Emerging CMO",
        description: "",
        leadership_info:
          "Emerging CMO is an advanced learning journey designed for marketing professionals aiming to move from execution to executive. The program builds strategic thinking, leadership presence, and business fluency, shaping tomorrow's marketing leaders.\r\n\r\n\r\nLed by <b>Vugar Mehdiyev</b> and <b>Barış Başaran</b>, the program blends strategic marketing insight with real-world leadership to prepare professionals for executive roles.",
        leaders: ["Vugar Mehdiyev", "Barış Başaran"],
      },
      program_details: {
        format: {
          category: "Format",
          details: ["4-5 hours per week", "On-Campus program", "Group Session"],
        },
        time: {
          category: "Time",
          schedule: [
            {
              day: "Wednesday",
              time: "7:00-9:30 PM",
            },
            {
              day: "Saturday",
              time: "10:00-12:30 PM",
            },
          ],
        },
        framework: {
          category: "Framework",
          structure: {
            blocks: 4,
            modules: 10,
            topics: 20,
          },
        },
        language: {
          category: "Language",
          type: "AZ / EN (hybrid)",
        },
      },
    },
  };
  return <ProgramPage data={data} />;
}
