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
    hero: {
      title: "DON’T WORRY\r\nWE ANSWER FASTER THAN\r\nYOU EXPECT",
      effect: {
        text_left: "Let’s",
        text_right: "TALK",
        image: "/images/khcard-1.png",
      }
    },
    contact_form: {
      section_title: "Contact Form",
      form: {
        subject: {
          label: "Subject",
          placeholder: "Enter your subject",
          options: [
            { id: 1, name: "General Inquiry" },
            { id: 2, name: "Support" },
            { id: 3, name: "Feedback" },
            { id: 4, name: "Partnership" },
            { id: 5, name: "Careers" },
          ],
        },
        full_name: {
          label: "Full Name",
          placeholder: "Enter your full name",
        },
        email: {
          label: "Email",
          placeholder: "Enter your email",
        },
        message: {
          label: "Message",
          placeholder: "Enter your message",
        },
        agreement: {
          message_template:
            "You accept the {2} and {1} by submitting your request.",
          links: [
            {
              id: 1,
              name: "Privacy Policy",
              slug: "privacy",
            },
            {
              id: 2,
              name: "Terms & Conditions",
              slug: "terms",
            },
          ],
        },
        button: "Send",
      },
    },
    contact_us: {
      section_title: "Direct Contact Information",
      image: "/images/direct-contact-information.png",
      address_name: "Address",
      address_value:
        "1455 Ocean View Drive, Los Angeles, CA 90049 United States of America",
      phone_name: "Phone",
      phone_value: "+ 994 50 791 32 79",
      contact_name: "Contact",
      contact_value: "info@xschool.com",
      hours_name: "xSchool Hours",
      hours_value: "Mon - Fri, 11 am - 7 pm",
    },
    map: {
      section_title: "Map",
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
