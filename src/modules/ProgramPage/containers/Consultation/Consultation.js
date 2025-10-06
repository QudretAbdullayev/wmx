"use client";

import { useState } from "react";
import SectionTitle from "@/components/SectiontTitle/SectiontTitle";
import styles from "./Consultation.module.scss";
import HoverText from "@/components/HoverText/HoverText";
import Select from "@/components/Select/Select";
import { useForm } from "react-hook-form";
import SafeLink from "@/components/SafeLink/SafeLink";

const Consultation = ({ data }) => {
  const [seniority, setSeniority] = useState("");
  const [industry, setIndustry] = useState("");
  const [focusedFields, setFocusedFields] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    clearErrors,
    setError,
  } = useForm({ mode: "onBlur" });

  const handleFocus = (fieldName) => {
    setFocusedFields((prev) => ({ ...prev, [fieldName]: true }));
  };

  const handleBlur = (fieldName) => {
    setFocusedFields((prev) => ({ ...prev, [fieldName]: false }));
  };

  const handleIndustrySelection = (selectedIndustry) => {
    setIndustry(selectedIndustry);
    setValue("industry", selectedIndustry);
    clearErrors("industry");
  };

  const handleSenioritySelection = (selectedSeniority) => {
    setSeniority(selectedSeniority);
    setValue("seniority", selectedSeniority);
    clearErrors("seniority");
  };

  return (
    <section className="g-container mb">
      <SectionTitle title={data.section_title} />
      <div className="ml">
        <div className={styles.consultation}>
          <div className={styles.vector}></div>
          <div className={styles.header}>
            <h4 className={styles.header__title}>{data.title}</h4>
            <p className={styles.header__subtitle}>{data.description}</p>
          </div>
          <form className={styles.form}>
            <div className={styles.form__field}>
              <label className={styles.form__label}>{data.form.full_name.label}</label>
              <input
                type="text"
                placeholder={data.form.full_name.placeholder}
                name="name"
                className={`${styles.form__input} ${focusedFields.name ? styles.form__filled : ""
                  } ${errors.name ? styles.form__errorline : ""}`}
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters long",
                  },
                })}
                onFocus={() => handleFocus("name")}
                onBlur={() => handleBlur("name")}
              />
              {errors.name && (
                <span className={styles.form__error}>
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className={styles.form__field}>
              <label className={styles.form__label}>{data.form.email.label}</label>
              <input
                type="email"
                placeholder={!focusedFields.email ? data.form.email.placeholder : ""}
                name="email"
                className={`${styles.form__input} ${focusedFields.email ? styles.form__filled : ""
                  } ${errors.email ? styles.form__errorline : ""}`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                onFocus={() => handleFocus("email")}
                onBlur={() => handleBlur("email")}
              />
              {errors.email && (
                <span className={styles.form__error}>
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className={styles.form__field}>
              <label className={styles.form__label}>{data.form.company.label}</label>
              <input
                type="text"
                placeholder={data.form.company.placeholder}
                name="company"
                className={`${styles.form__input} ${focusedFields.company ? styles.form__filled : ""
                  } ${errors.company ? styles.form__errorline : ""}`}
                {...register("company", {
                  required: "Company is required",
                  minLength: {
                    value: 2,
                    message: "Company must be at least 2 characters long",
                  },
                })}
                onFocus={() => handleFocus("company")}
                onBlur={() => handleBlur("company")}
              />
              {errors.company && (
                <span className={styles.form__error}>
                  {errors.company.message}
                </span>
              )}
            </div>
            <div className={styles.form__field}>
              <label className={styles.form__label}>{data.form.industry.label}</label>
              <Select
                options={
                  data?.form?.industry?.options
                }
                onSelectionChange={handleIndustrySelection}
                error={errors.program}
                placeholder={data.form.industry.placeholder}
              />
            </div>
            <div className={styles.form__field}>
              <label className={styles.form__label}>{data.form.seniority.label}</label>
              <Select
                options={
                  data?.form?.seniority?.options
                }
                onSelectionChange={handleSenioritySelection}
                error={errors.program}
                placeholder={data.form.seniority.placeholder}
              />

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
                    const linkData = data.form.agreement.links.find(link => link.id === linkId);
                    
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
            <HoverText
              text={data.button}
              className={styles.form__submit}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
