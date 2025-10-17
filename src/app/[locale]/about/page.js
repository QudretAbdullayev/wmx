import AboutPage from "@/modules/AboutPage";
import { fetchData } from "@/utils/httpService";
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}about-page/`);

  if (res.status !== 200) return
  
  const data = await res.json();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  return {
    title: data.seo_title,
    description: data.seo_description,
    openGraph: {
      title: data.seo_title,
      description: data.seo_description,
      images: [data.image],
      url: `${baseUrl}${locale === "en" ? "" : locale}/knowledge-hub/`,
      type: 'website',
      siteName: 'WMX School',
    },
    alternates: {
      canonical: `${baseUrl}${locale === "en" ? "" : locale}`,
      languages: {
        'x-default': baseUrl,
        en: `${baseUrl}`,
        az: `${baseUrl}az`,
      },
    },
  };
}

export default async function Page({ params }) {
  const { locale } = await params;

  const [
    dataResult,
  ] = await Promise.allSettled([
    fetchData(`about-page/`, locale)
  ]);

  const data = dataResult.status === "fulfilled" ? dataResult.value : null

  return <AboutPage data={data} />;
};
