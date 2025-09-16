import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from "next-intl/server";
import "@/assets/styles/main.scss";
import { fetchData } from '@/utils/httpService';
import Header from '@/components/Layout/Header/Header';

// export const viewport = {
//   initialScale: 1.0,
//   initialScale: 1.0,
//   maximumScale: 1.0,
//   userScalable: "no"
// }

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

//   const [layoutResult] = await Promise.allSettled([
//     fetchData("home/header-and-footer", locale),
//   ]);

//   const layoutData = layoutResult.status === "fulfilled" ? layoutResult.value : null;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <Header />
          <main>
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}