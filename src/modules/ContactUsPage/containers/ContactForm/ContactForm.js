import SectionTitle from "@/components/SectiontTitle/SectiontTitle";
import styles from "./ContactForm.module.scss";
import Select from "@/components/Select/Select";
import SafeLink from "@/components/SafeLink/SafeLink";

const ContactForm = ({ data }) => {
  return (
    <section className="g-container mb">
      <SectionTitle title={data.section_title} />
      <div className="ml">
        <form className={styles.form}>
          <div className={styles.form__row}>
            <div className={styles.form__column}>
              <label className={styles.form__label} htmlFor="subject">
                {data.form.subject.label}
              </label>
              <Select
                options={data?.form?.subject?.options}
                placeholder={`[${data.form.subject?.placeholder}]`}
              />
            </div>
          </div>
          <div className={styles.form__row}>
            <div className={styles.form__column}>
              <label className={styles.form__label} htmlFor="name">
                {data.form.full_name.label}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={`[${data.form.full_name.placeholder}]`}
                required
                className={styles.form__input}
              />
            </div>
            <div className={styles.form__column}>
              <label className={styles.form__label} htmlFor="email">
                {data.form.email.label}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={`[${data.form.email.placeholder}]`}
                required
                className={styles.form__input}
              />
            </div>
          </div>
          <div className={styles.form__row}>
            <div className={styles.form__column}>
              <label className={styles.form__label} htmlFor="message">
                {data.form.message.label}
              </label>
              <textarea
                id="message"
                name="message"
                placeholder={data.form.message.placeholder}
                required
                className={styles.form__textarea}
              ></textarea>
            </div>
          </div>
          <div className={styles.form__privacy}>
            <p className={styles.form__privacy__text}>
              {(() => {
                let text = data.form.agreement.message_template;
                const parts = [];
                let lastIndex = 0;

                const placeholderRegex = /\{(\d+)\}/g;
                let match;

                while ((match = placeholderRegex.exec(text)) !== null) {
                  if (match.index > lastIndex) {
                    parts.push(text.substring(lastIndex, match.index));
                  }

                  const linkId = parseInt(match[1]);
                  const linkData = data.form.agreement.links.find(
                    (link) => link.id === linkId
                  );

                  if (linkData) {
                    parts.push(
                      <SafeLink
                        key={`link-${linkId}-${match.index}`}
                        href={linkData.slug}
                        className={styles.form__privacy__link}
                      >
                        {linkData.name}
                      </SafeLink>
                    );
                  }

                  lastIndex = match.index + match[0].length;
                }

                if (lastIndex < text.length) {
                  parts.push(text.substring(lastIndex));
                }

                return parts;
              })()}
            </p>
          </div>
          <button type="submit" className={styles.form__submit}>
            {data.form.button}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
