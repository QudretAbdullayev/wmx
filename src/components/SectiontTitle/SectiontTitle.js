import Square from "@/assets/icons/Square";
import styles from "./SectiontTitle.module.scss";
import SafeLink from "../SafeLink/SafeLink";
import HoverText from "../HoverText/HoverText";
import Effect from "../Effect/Effect";

const SectionTitle = ({ title, slug = "", slug_name = "" }) => {
  return (
    <div className={`${styles.container} mb`}>
      <Effect>
      <h3 className={styles.title}>
        <Square />({title})
      </h3>
      </Effect>
      {slug && (
        <Effect>
        <HoverText 
          text={slug_name}
          as="a"
          href={`/${slug}`}
          className={styles.link}
        />
        </Effect>
      )}
    </div>
  );
};

export default SectionTitle;
