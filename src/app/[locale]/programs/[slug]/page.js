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

async function Page({ params }) {
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
      title: "Əli Huseynov, a leading authority on marketing and brand",
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
      section_title: "Modules / Curriculum",
      course_curriculum: [
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
    about: {
      section_title: "About",
      content:
        "<p>Emerging CMO is an advanced learning journey designed for marketing professionals aiming to move from execution to executive. The program builds strategic thinking, leadership presence, and business fluency, shaping tomorrow's marketing leaders.</p><p>&nbsp;</p><p>Led by <strong>Vugar Mehdiyev</strong> and <strong>Barış Başaran</strong>, the program blends strategic marketing insight with real-world leadership to prepare professionals for executive roles.</p>",
      table: [
        {
          title: "Format",
          values: ["4-5 hours per week", "On-Campus program", "Group Session"],
        },
        {
          title: "Time",
          values: ["Wednesday: 7:00-9:30 PM", "Saturday: 10:00-12:30 PM"],
        },
        { title: "Framework", values: ["4 Blocks", "10 Modules", "20 Topics"] },
        { title: "Language", values: ["AZ / EN (hybrid)"] },
      ],
    },
    founder_video: {
      section_title: "Founder Video",
      title: "Our founder on why this course matters now.",
      video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      video_cover: "/images/video-cover.jpg",
    },
    consultation: {
      section_title: "Consultation",
      title: "Chief of “I know what I’m doing",
      description:
        "The xSchool CMO program is built for those who think beyond KPIs and campaign calendars. It’s where strategic ambition meets real-world marketing leadership, and sparks serious growth.",
      form: {
        full_name: {
          label: "Full Name",
          placeholder: "Your full name",
        },
        email: {
          label: "Email Address",
          placeholder: "Your email",
        },
        company: {
          label: "Company Name",
          placeholder: "Your company name",
        },
        industry: {
          label: "Industry",
          placeholder: "Your industry",
          options: [
            { id: 1, name: "Industry 1" },
            { id: 2, name: "Industry 2" },
            { id: 3, name: "Industry 3" },
          ],
        },
        seniority: {
          label: "Seniority",
          placeholder: "Your seniority level",
          options: [
            { id: 1, name: "Seniority 1" },
            { id: 2, name: "Seniority 2" },
            { id: 3, name: "Seniority 3" },
          ],
        },
        agreement: {
          message_template:
            "By submitting this form, you agree to our {2} and {1}. You may unsubscribe from Xschool communications at any time.",
          links: [
            {
              id: 1,
              name: "Privacy Policy",
              slug: "privacy",
            },
            {
              id: 2,
              name: "Terms of Service",
              slug: "terms",
            },
          ],
        },
      },
      button: "Submit",
    },
  };
  return <ProgramPage data={data} />;
}

export default Page
