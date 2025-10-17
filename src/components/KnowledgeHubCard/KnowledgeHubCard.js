"use client";

import SafeLink from "@/components/SafeLink/SafeLink";
import styles from "./KnowledgeHubCard.module.scss";
import SafeImage from "@/components/SafeImage/SafeImage";
import EffectCard from "../Effect/EffectCard";
import { useLocale } from "next-intl";
import { format, parseISO, isValid } from "date-fns";
import { az, enUS } from "date-fns/locale";

export default function KnowledgeHubCard({ article }) {
  const locale = useLocale();

  const rawDate = article?.published_date || article?.date;
  let formattedDate = rawDate || "";

  if (rawDate) {
    let parsed = typeof rawDate === "string" ? parseISO(rawDate) : new Date(rawDate);
    if (!isValid(parsed)) {
      parsed = new Date(rawDate);
    }
    if (isValid(parsed)) {
      const localeObj = locale === "az" ? az : enUS;
      formattedDate = format(parsed, "MMMM d, yyyy", { locale: localeObj });
    }
  }

  return (
    <EffectCard>
    <SafeLink
      href={`/knowledge-hub/${article.slug}`}
      className={styles.card}
    >
      <div className={styles.card__image}>
        <SafeImage src={article.image} alt={article.title} fill />
      </div>
      <div className={styles.card__date}>{formattedDate}</div>

      <div className={styles.card__content}>
        <h3 className={styles.card__content__title}>{article.title}</h3>
        <p className={styles.card__content__desc}>{article.card_description}</p>
      </div>
    </SafeLink>
    </EffectCard>
  );
}
