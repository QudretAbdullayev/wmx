import KnowledgeHubPage from "@/modules/KnowledgeHubPage";
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
      title: "Swedish design duo niklas rosén  gustav  nordebrink who specialize in creating design experiences for renowned and.",
      banner: "/images/articles-hero.png",
      hover_image: "/images/hover-image.png",
    },
    most_readed: {
      section_title: "Most Readed",
      list: [
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
    articles: {
      count: 6,
      section_title: "Articles for You",
      list: [
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
      button: "View all",
    },
  };
  return <KnowledgeHubPage data={data} />;
}