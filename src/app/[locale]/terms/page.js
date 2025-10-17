import RulesPage from "@/modules/RulesPage";
import { fetchData } from "@/utils/httpService";
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}v1/terms/`);

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

  const [termsResult] = await Promise.allSettled([
    fetchData(`v1/terms/`, locale),
  ]);

  const data = termsResult.status === "fulfilled" ? termsResult.value : null


  return <RulesPage text={data} />;
}


