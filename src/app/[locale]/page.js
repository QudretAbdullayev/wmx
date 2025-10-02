import HomePage from "@/modules/HomePage";
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
    hero: {
      x_images: [
        "/x/1.png",
        "/x/2.png",
        "/x/3.png",
        "/x/4.png",
        "/x/5.png",
        "/x/6.png",
        "/x/7.png",
        "/x/8.png",
      ],
      sliders: [
        {
          title:
            "Independent Designer and Art Director. Clients include Apple, Nike, Volkswagen, Spotify, Wax poetics and others.",
          subtitle: "Available for freelance worldwibe",
        },
        {
          title:
            "Independent Designer and Art Director. Clients include Apple, Nike, Volkswagen, Spotify, Wax poetics and others.",
          subtitle: "2Available for freelance worldwibe",
        },
        {
          title:
            "Independent Designer and Art Director. Clients include Apple, Nike, Volkswagen, Spotify, Wax poetics and others.",
          subtitle: "3Available for freelance worldwibe",
        },
        {
          title:
            "Independent Designer and Art Director. Clients include Apple, Nike, Volkswagen, Spotify, Wax poetics and others.",
          subtitle: "4Available for freelance worldwibe",
        },
      ],
      button_text: "Register",
    },
    founder: {
      section_title: "Founder",
      title: "Get to know the people\r\nthat get it all done.",
      description:
        "Mark is a former adjunct Professor of Marketing at Melbourne Business School. He has a PhD in Marketing from Lancaster University and has been a marketing professor at London Business School, MIT Sloan (visiting), and the University of Minnesota. He has been the recipient of MBA teaching awards at LBS, MIT, Singapore Management University and MBS.\r\n\r\n\r\nMark has been teaching brand management to MBA students at elite business schools and a consulting career working on some of the most successful brands on the planet such as Subaru, De Beers, Ericsson, Sephora, News Corp, Hennessy and Baxter.",
      subtitle: "Vugar Mehdiyev, a leading authority on marketing and brand",
      image: "/images/founder.png",
      name: "Vugar Mehdiyev",
      position: "CEO & Founder",
    },
    about: {
      section_title: "About",
      title:
        "Crafting innovative digital experiences, brand identities and art direction that drive results, spark connection and inspire loyalty through creative vision and strategic insight.",
      description:
        "Through a balance of creativity and strategy, we craft digital experiences that resonate. Focused on innovation, clarity, and emotional connection, our work transforms ideas into impactful design with purpose and personality. \r\n\r\n\r\nA bloueder Through a balance of creativity and strategy, we craft digital experiences that resonate. Focused on innovation, clarity, and emotional connection, our work transforms ideas into impactful design with purpose and personality.",
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
    programs: {
      section_title: "Program",
      programs_list: [
        {
          lock: false,
          background_image: "/images/bg-image-1.svg",
          icon: "/images/icon-1.svg",
          title: "CMO",
          subtitle: "Subscribe",
          description:
            "Stay ahead in education and tech — subscribe now and never miss an update.",
          slug: "cmo",
        },
        {
          lock: false,
          background_image: "/images/bg-image-2.svg",
          icon: "images/icon-2.svg",
          title: "MPO",
          subtitle: "Subscribe",
          description:
            "Stay ahead in education and tech — subscribe now and never miss an update.",
          slug: "mpo",
        },
        {
          lock: true,
          background_image: "/images/bg-image-3.svg",
          icon: "",
          title: "Junior",
          subtitle: "Stay ahead in",
          description:
            "Stay ahead in education and tech — subscribe now and never miss an update.",
          slug: "junior",
        },
      ],
    },
    knowledge_hub: {
      count: 6,
      section_title: "Knowledge Hub",
      slug: "knowledge-hub",
      slug_name: "Explore all Knowledge",
      articles: [
        {
          id: 1,
          date: "December 28, 2024",
          title: "Branding Fundamentals: Core Concepts Every Mark.",
          description:
            "Mark is a former adjunct Professor of Marketing at Melbourne Business School. He has a.",
          image: "/images/khcard-1.png",
          slug: "MORE",
        },
        {
          id: 2,
          date: "January 19, 2025",
          title: "Branding Fundamentals: Core Concepts Every Mark.",
          description:
            "Mark is a former adjunct Professor of Marketing at Melbourne Business School. He has a.",
          image: "/images/khcard-2.png",
          slug: "MORE",
        },
        {
          id: 3,
          date: "January 28, 2025",
          title: "Branding Fundamentals: Core Concepts Every Mark.",
          description:
            "Mark is a former adjunct Professor of Marketing at Melbourne Business School. He has a.",
          image: "/images/khcard-3.png",
          slug: "MORE",
        },
        {
          id: 4,
          date: "April 12, 2025",
          title: "Branding Fundamentals: Core Concepts Every Mark.",
          description:
            "Mark is a former adjunct Professor of Marketing at Melbourne Business School. He has a.",
          image: "/images/khcard-4.png",
          slug: "MORE",
        },
        {
          id: 5,
          date: "May 26, 2025",
          title: "Branding Fundamentals: Core Concepts Every Mark.",
          description:
            "Mark is a former adjunct Professor of Marketing at Melbourne Business School. He has a.",
          image: "/images/khcard-5.png",
          slug: "MORE",
        },
        {
          id: 6,
          date: "August 4, 2025",
          title: "Branding Fundamentals: Core Concepts Every Mark.",
          description:
            "Mark is a former adjunct Professor of Marketing at Melbourne Business School. He has a.",
          image: "/images/khcard-6.png",
          slug: "MORE",
        },
      ],
    },
    tell_us: {
      section_title: "Tell us what you think",
      form: {
        title: "Let's get in touch!",
        description: "Some sessions are live, while others are available as pre-recorded videos you can watch anytime.",
        full_name: {
          label: "Full name",
          placeholder: "Your name",
        },
        phone: {
          label: "Phone number",
          placeholder: "Phone number",
        },
        email: {
          label: "Email",
          placeholder: "Email",
        },
        extra_field: {
          label: "Ex!",
          placeholder: "",
        },
        privacy: {
          title: "By submitting this form, you {} agree to our",
          privacy_policy: "Privacy Policy",
          terms_of_service: "Terms of Service",
        },
        agreement:
        {
          "message_template": "By clicking, I agree to the {privacy} and {terms}.",
          "links": [{
            "name": "Privacy Policy",
            "link": "https://example.com/privacy"
          }, {
            "name": "Terms",
            "link": "https://example.com/terms"
          }]
        },
        checkboxes: {
          agree: "I agree to receive promotional emails.",
          entity: "I am a legal entity.",
        },
        submit: "Submit",
      },
    },
    explain: {
      section_title: "Explain",
      title: "x School is a Los Angeles-based branding and design agency where artistry meets innovation, crafting unforgettable experiences through meticulous craftsmanship and cutting-edge technology.",
      videos: [
        { thumbnail: '/images/video-cover.jpg', reel: false, url: 'https://www.youtube.com/embed/PjafEosCklE' },
        { thumbnail: '/images/video-cover.jpg', reel: true, url: 'https://www.youtube.com/embed/5X6-VEVQ2G8' },
        { thumbnail: '/images/video-cover.jpg', reel: true, url: 'https://www.youtube.com/embed/PLikhATCoRQ' },
        { thumbnail: '/images/video-cover.jpg', reel: false, url: 'https://www.youtube.com/embed/PjafEosCklE' },
      ]
    }
  };

  // const [
  //   bottomSliderResult,
  //   heroBannerResult
  // ] = await Promise.allSettled([
  //   fetchData("home/sections/bottom-slider", locale),
  //   fetchData("home/sections/hero-banner", locale)
  // ]);

  // const bottomSliderData = bottomSliderResult.status === "fulfilled" ? bottomSliderResult.value : null
  // const heroBannerData = heroBannerResult.status === "fulfilled" ? heroBannerResult.value : null

  return <HomePage locale={locale} data={data} />;
}
