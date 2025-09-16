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

  // const [
  //   bottomSliderResult,
  //   heroBannerResult
  // ] = await Promise.allSettled([
  //   fetchData("home/sections/bottom-slider", locale),
  //   fetchData("home/sections/hero-banner", locale)
  // ]);

  // const bottomSliderData = bottomSliderResult.status === "fulfilled" ? bottomSliderResult.value : null
  // const heroBannerData = heroBannerResult.status === "fulfilled" ? heroBannerResult.value : null

  return (
    <HomePage
      locale={locale}
    />
  );
}