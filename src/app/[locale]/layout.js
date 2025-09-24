import { NextIntlClientProvider, hasLocale } from 'next-intl';
import MouseFollower from "@/components/MouseFollower/MouseFollower";
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from "next-intl/server";
import "@/assets/styles/main.scss";
import { fetchData } from '@/utils/httpService';
import Header from '@/components/Layout/Header/Header';
import Footer from '@/components/Layout/Footer/Footer';
import NotificationBanner from '@/components/Layout/NotificationBanner/NotificationBanner';

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

  const data = {
    notification_banner: {
      first_message: "SECURE YOUR SPOT IN OUR UPCOMING CLASS",
      second_message: "REGISTRATION IS NOW OPEN!",
      countdown_time: "04:13:12:48",
      show_countdown: true,
    },
    header: {},
    footer: {},
  }

//   const [layoutResult] = await Promise.allSettled([
//     fetchData("home/header-and-footer", locale),
//   ]);

//   const layoutData = layoutResult.status === "fulfilled" ? layoutResult.value : null;

  return (
    <html lang={locale}>
      
      <body>
        <MouseFollower />
        <NextIntlClientProvider>
          <NotificationBanner data={data.notification_banner}/> 
          <Header data={data.header}/>
          <main>
            {children}
          </main>
          <Footer data={data.footer}/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}