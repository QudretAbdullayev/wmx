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
              <label className={styles.form__label}>Full name</label>
              <input
                type="text"
                placeholder="[Your name]"
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
              <label className={styles.form__label}>Email</label>
              <input
                type="email"
                placeholder={!focusedFields.email ? "[Email Address]" : ""}
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
              <label className={styles.form__label}>Full name</label>
              <input
                type="text"
                placeholder="[Company]"
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
              <label className={styles.form__label}>Industry</label>
              <Select
                options={
                  data?.industries || [
                    { id: 1, name: "Industry 1" },
                    { id: 2, name: "Industry 2" },
                    { id: 3, name: "Industry 3" },
                  ]
                }
                onSelectionChange={handleIndustrySelection}
                error={errors.program}
                placeholder="[Industry]"
              />
            </div>
            <div className={styles.form__field}>
              <label className={styles.form__label}>Seniority</label>
              <Select
                options={
                  data?.seniorities || [
                    { id: 1, name: "Seniority 1" },
                    { id: 2, name: "Seniority 2" },
                    { id: 3, name: "Seniority 3" },
                  ]
                }
                onSelectionChange={handleSenioritySelection}
                error={errors.program}
                placeholder="[Seniority]"
              />

            </div>
            <div className={styles.form__privacy}>
              <p className={styles.form__privacy__text}>
                By submitting this form, you agree to our <SafeLink href="/privacy-policy">Privacy Policy</SafeLink> and <SafeLink href="/terms-of-service">Terms of Service</SafeLink>.
              </p>
            </div>
            <HoverText
              text="Submit"
              className={styles.form__submit}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
