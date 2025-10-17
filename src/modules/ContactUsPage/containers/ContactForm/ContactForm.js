"use client";

import SectionTitle from "@/components/SectiontTitle/SectiontTitle";
import styles from "./ContactForm.module.scss";
import Select from "@/components/Select/Select";
import SafeLink from "@/components/SafeLink/SafeLink";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = ({ data, subjects }) => {
  const [selectedSubjectId, setSelectedSubjectId] = useState(null);
  const { register, handleSubmit, reset, setValue } = useForm({ mode: "onBlur" });

  const onSubmit = async (formValues) => {
    const payload = {
      email: formValues.email,
      subject: formValues.subject ? Number(formValues.subject) : null,
      full_name: formValues.full_name || "",
      message: formValues.message || "",
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}form-contact-pages/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Success:', result);
      
      reset();
      setSelectedSubjectId(null);
    } catch (error) {
      console.error("Failed to submit contact form", error);
    }
  };

  return (
    <section className="g-container mb">
      <SectionTitle title={data.contact_form_section_title} />
      <div className="ml">
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.form__row}>
            <div className={styles.form__column}>
              <label className={styles.form__label} htmlFor="subject">
                {data.subject_title}
              </label>
              <Select
                id="subject"
                options={subjects}
                onSelectionChange={(id) => {
                  setSelectedSubjectId(id);
                  setValue("subject", id);
                }}
                placeholder={`[${data.subject_placeholder}]`}
              />
              <input type="hidden" {...register("subject")} value={selectedSubjectId || ""} readOnly />
            </div>
          </div>
          <div className={styles.form__row}>
            <div className={styles.form__column}>
              <label className={styles.form__label} htmlFor="name">
                {data.full_name_title}
              </label>
              <input
                type="text"
                id="name"
                {...register("full_name", { maxLength: 255 })}
                placeholder={`[${data.full_name_placeholder}]`}
                className={styles.form__input}
              />
            </div>
            <div className={styles.form__column}>
              <label className={styles.form__label} htmlFor="email">
                {data.email_title}
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true, maxLength: 254 })}
                placeholder={`[${data.email_placeholder}]`}
                className={styles.form__input}
              />
            </div>
          </div>
          <div className={styles.form__row}>
            <div className={styles.form__column}>
              <label className={styles.form__label} htmlFor="message">
                {data.message_title}
              </label>
              <textarea
                id="message"
                {...register("message")}
                placeholder={data.message_placeholder}
                className={styles.form__textarea}
              ></textarea>
            </div>
          </div>
          {data.agreement && (
            <div className={styles.form__privacy}>
              <p className={styles.form__privacy__text}>
                {(() => {
                  let text = data.agreement.message_template;
                  const parts = [];
                  let lastIndex = 0;

                  const placeholderRegex = /\{(\d+)\}/g;
                  let match;

                  while ((match = placeholderRegex.exec(text)) !== null) {
                    if (match.index > lastIndex) {
                      parts.push(text.substring(lastIndex, match.index));
                    }

                    const linkId = parseInt(match[1]);
                    const linkData = data.agreement.links.find(
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
          )}
          <button type="submit" className={styles.form__submit}>
            {data.button_text}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;