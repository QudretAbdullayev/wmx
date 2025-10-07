import SafeLink from "@/components/SafeLink/SafeLink";
import styles from "./KnowledgeHubCard.module.scss";
import SafeImage from "@/components/SafeImage/SafeImage";

export default function KnowledgeHubCard({ article }) {
  return (
    <SafeLink
      href={`/knowledge-hub/${article.slug}`}
      className={styles.card}
    >
      <div className={styles.card__image}>
        <SafeImage src={article.image} alt={article.title} fill />
      </div>
      <div className={styles.card__date}>{article.date}</div>

      <div className={styles.card__content}>
        <h3 className={styles.card__content__title}>{article.title}</h3>
        <p className={styles.card__content__desc}>{article.description}</p>
      </div>
    </SafeLink>
  );
}
