import ContactUsPage from "@/modules/ContactUsPage";
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
    hero: {},
    contact_form: {
      section_title: "Contact Form",
    },
    contact_us: {
      section_title: "Direct Contact Information",
      address: "1234 Street Name, City Name, United States",
      phone: "+1 (123) 456-7890",
      email: "",
    },
    map: {
      latitude: 40.712776,
      longitude: -74.005974,
      zoom: 12,
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
  };
  return <ContactUsPage data={data} />;
}
