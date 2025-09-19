import Square from "@/assets/icons/Square";
import styles from "./SectiontTitle.module.scss";
import SafeLink from "../SafeLink/SafeLink";
import HoverText from "../HoverText/HoverText";

const SectionTitle = ({ title, slug = "", slug_name = "" }) => {
  return (
    <div className={`${styles.container} mb`}>
      <h3 className={styles.title}>
        <Square />({title})
      </h3>
      {slug && (
        <HoverText 
          text={slug_name}
          as="a"
          href={`/${slug}`}
          className={styles.link}
        />
      )}
    </div>
  );
};

export default SectionTitle;
