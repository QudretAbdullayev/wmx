// ContactForm.jsx
import { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';
import 'react-phone-number-input/style.css';
import styles from './ContactForm.module.scss';
import SafeLink from '../SafeLink/SafeLink';
import HoverText from '../HoverText/HoverText';

const ContactForm = ({ data }) => {
    const [promotionalEmails, setPromotionalEmails] = useState(false);
    const [isLegalEntity, setIsLegalEntity] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        control
    } = useForm({
        defaultValues: {
            fullName: '',
            phoneNumber: '',
            email: '',
            extraField: ''
        },
        mode: 'onSubmit'
    });

    const onSubmit = (data) => {
        console.log('Form submitted successfully', data);
    };


    return (
        <div className={styles.contact}>
            <div className={styles.vector}></div>
            <div className={styles.header}>
                <h4 className={styles.header__title}>{data.form.title}</h4>
                <p className={styles.header__subtitle}>
                    {data.form.description}
                </p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.form__field}>
                    <label className={styles.form__label}>{data.form.full_name.label}</label>
                    <input
                        type="text"
                        className={`${styles.form__input} ${errors.fullName ? styles.form__inputError : ''}`}
                        placeholder={data.form.full_name.placeholder}
                        {...register('fullName', {
                            required: 'Full name is required',
                            minLength: {
                                value: 2,
                                message: 'Full name must be at least 2 characters'
                            }
                        })}
                    />
                    {errors.fullName && (
                        <span className={styles.form__error}>{errors.fullName.message}</span>
                    )}
                </div>
                <div className={styles.form__field}>
                    <label className={styles.form__label}>{data.form.phone.label}</label>
                    <Controller
                        name="phoneNumber"
                        control={control}
                        rules={{
                            required: 'Phone number is required',
                            validate: {
                                isValid: (value) => {
                                    if (!value) return 'Phone number is required';
                                    try {
                                        const phoneNumberObj = parsePhoneNumber(value);
                                        if (!phoneNumberObj || !phoneNumberObj.isValid()) {
                                            return 'Phone Number is invalid';
                                        }
                                        const nationalNumber = phoneNumberObj.nationalNumber;
                                        if (!nationalNumber || nationalNumber.length < 7) {
                                            return 'Please enter a complete phone number';
                                        }
                                        return true;
                                    } catch (error) {
                                        return 'Phone Number is invalid';
                                    }
                                }
                            }
                        }}
                        render={({ field }) => (
                            <div className={`${styles.form__phone} ${errors.phoneNumber ? styles.form__inputError : ''}`}>
                                <PhoneInput
                                    placeholder={data.form.phone.placeholder}
                                    value={field.value}
                                    onChange={field.onChange}
                                    defaultCountry="AZ"
                                    className={styles.form__phone__input}
                                    international
                                    countryCallingCodeEditable={false}
                                    limitMaxLength={true}
                                />
                            </div>
                        )}
                    />
                    {errors.phoneNumber && (
                        <span className={styles.form__error}>{errors.phoneNumber.message}</span>
                    )}
                </div>
                <div className={styles.form__field}>
                    <label className={styles.form__label}>{data.form.email.label}</label>
                    <input
                        type="email"
                        className={`${styles.form__input} ${errors.email ? styles.form__inputError : ''}`}
                        placeholder={data.form.email.placeholder}
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Please enter a valid email address'
                            }
                        })}
                    />
                    {errors.email && (
                        <span className={styles.form__error}>{errors.email.message}</span>
                    )}
                </div>
                <div className={styles.form__field}>
                    <label className={styles.form__label}>{data.form.extra_field.label}</label>
                    <input
                        type="text"
                        placeholder={data.form.extra_field.placeholder}
                        className={`${styles.form__input} ${errors.extraField ? styles.form__inputError : ''}`}
                        {...register('extraField', {
                            required: 'This field is required'
                        })}
                    />
                    {errors.extraField && (
                        <span className={styles.form__error}>{errors.extraField.message}</span>
                    )}
                </div>
                <HoverText
                    text={data.form.submit}
                    className={styles.form__submit}
                />
                <p className={styles.form__privacy}>
                    {(() => {
                        const template = data.form.agreement.message_template;
                        const parts = template.split(/(\{privacy\}|\{terms\})/);
                        
                        return parts.map((part, index) => {
                            if (part === '{privacy}' || part === '{terms}') {
                                const linkIndex = part === '{privacy}' ? 0 : 1;
                                return (
                                    <SafeLink key={index} className={styles.form__privacy__link} href={data.form.agreement.links[linkIndex].link}>
                                        {data.form.agreement.links[linkIndex].name}
                                    </SafeLink>
                                );
                            }
                            return part;
                        });
                    })()}
                </p>
                <div className={styles.form__checkboxes}>
                    <div className={styles.form__checkbox}>
                        <input
                            type="checkbox"
                            id="promotionalEmails"
                            className={styles.form__checkbox__input}
                            checked={promotionalEmails}
                            onChange={(e) => setPromotionalEmails(e.target.checked)}
                        />
                        <label className={styles.form__checkbox__label}>{data.form.checkboxes.agree}</label>
                    </div>
                    <div className={styles.form__checkbox}>
                        <input
                            type="checkbox"
                            id="isLegalEntity"
                            className={styles.form__checkbox__input}
                            checked={isLegalEntity}
                            onChange={(e) => setIsLegalEntity(e.target.checked)}
                        />
                        <label className={styles.form__checkbox__label}>{data.form.checkboxes.entity}</label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;