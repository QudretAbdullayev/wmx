import SectionTitle from "@/components/SectiontTitle/SectiontTitle";
import styles from "./Articles.module.scss";
import KnowledgeHubCard from "@/components/KnowledgeHubCard/KnowledgeHubCard";
import HoverText from "@/components/HoverText/HoverText";

const Articles = ({ title, news, button }) => {
  return (
    <section className="g-container mb">
      <SectionTitle title={title} />
      <div className={styles.container}>
        <div className={`${styles.container__articles} ml`}>
          {news.map((article) => (
            <KnowledgeHubCard key={article.id} article={article} />
          ))}
        </div>
        <HoverText 
          text={button}
          className={styles.container__button}
        />
      </div>
    </section>
  );
};

export default Articles;
