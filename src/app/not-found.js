import "@/assets/styles/main.scss";
import NotFoundPage from "@/modules/404Page"
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';

const NotFound = async () => {
  const locale = routing.defaultLocale;
  
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NotFoundPage/>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default NotFound