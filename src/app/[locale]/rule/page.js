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
    seo: {
      title: "Program Page - Untitled UI",
      description: "This is the program page description.",
      openGraph: {
        image: "/images/og-image.png",
      },
    },
    rules: [
        {title: "Terms and Conditions", description: "Welcome to WM xSchool (operated by Wemark LLC, hereinafter referred to as \"xSchool,\" \"we,\" \"us,\" or \"our\"). By accessing or using our website, learning platform, or any related services (collectively referred to as the \"Platform\"), you agree to comply with and be bound by the following Terms and Conditions. If you do not agree with these terms, please do not use our Platform.\n\n1. Eligibility\nYou must be at least 18 years old or have reached the age of majority in your jurisdiction to use our Platform. By using our services, you represent and warrant that you meet this eligibility requirement.\n\n2. Account Registration\nTo access certain features of our Platform, you may need to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.\n\n3. Use of the Platform\nYou agree to use the Platform only for lawful purposes and in accordance with these Terms and Conditions. You shall not:\n- Violate any applicable laws or regulations\n- Infringe upon the intellectual property rights of others\n- Transmit any harmful or malicious code\n- Engage in any activity that disrupts or interferes with the functioning of the Platform\n\n4. Intellectual Property\nAll content on the Platform, including but not limited to text, graphics, logos, images, videos, and software, is the property of xSchool or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent.\n\n5. Payment and Refunds\nIf you enroll in a paid program or course, you agree to pay all fees associated with your enrollment. Payment terms and refund policies will be provided at the time of purchase. We reserve the right to change our fees and payment policies at any time.\n\n6. Privacy Policy\nYour use of our Platform is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information. By using our services, you consent to the practices described in the Privacy Policy.\n\n7. Termination\nWe reserve the right to terminate or suspend your access to the Platform at our sole discretion."},
    ]
  };
  return <ProgramPage data={data} />;
}

export default Page;
