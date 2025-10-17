"use client"
import { useTranslations } from 'next-intl';
import styles from './Title.module.scss'
import SafeLink from '@/components/SafeLink/SafeLink'
import { usePathname } from 'next/navigation';

const Title = () => {
  const t = useTranslations("translate.rules");
  const pathname = usePathname()
  const lastSegment = pathname?.split('/').filter(Boolean).pop()
  const isPrivacyActive = lastSegment === 'privacy'
  const isTermsActive = lastSegment === 'terms'
  return (
    <section className={styles.rule}>
      <div className={`${styles.rule__title} mb`}>
        <SafeLink
          href={"/privacy"}
          className={`${styles.rule__title} ${isPrivacyActive ? styles.rule__active : ''}`}
        >
          {t("privacy")}
        </SafeLink>
        <SafeLink
          href={"/terms"}
          className={`${styles.rule__title} ${isTermsActive ? styles.rule__active : ''}`}
        >
          {t("terms")}
        </SafeLink>
      </div>
    </section>
  )
}

export default Title
