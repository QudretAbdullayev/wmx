// ContactForm.jsx
import { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';
import 'react-phone-number-input/style.css';
import styles from './ContactForm.module.scss';
import SafeLink from '../SafeLink/SafeLink';
import HoverText from '../HoverText/HoverText';

const ContactForm = () => {
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
                <h4 className={styles.header__title}>Let's get in touch!</h4>
                <p className={styles.header__subtitle}>
                    Some sessions are live, while others are available as pre-recorded videos you can watch anytime.
                </p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.form__field}>
                    <label className={styles.form__label}>Full name</label>
                    <input
                        type="text"
                        className={`${styles.form__input} ${errors.fullName ? styles.form__inputError : ''}`}
                        placeholder="Full name"
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
                    <label className={styles.form__label}>Number</label>
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
                                    placeholder="Enter phone number"
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
                    <label className={styles.form__label}>E-mail</label>
                    <input
                        type="email"
                        className={`${styles.form__input} ${errors.email ? styles.form__inputError : ''}`}
                        placeholder="E-mail"
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
                    <label className={styles.form__label}>Ex!</label>
                    <input
                        type="text"
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
                        text="Submit"
                        className={styles.form__submit}
                    />
            </form>
            <div className={styles.footer}>
                <p className={styles.footer__privacy}>
                    By clicking, I agree to the <SafeLink className={styles.footer__privacy__link} href="/privacy-policy">Privacy Policy</SafeLink> and <SafeLink className={styles.footer__privacy__link} href="/terms-of-service">Terms</SafeLink>.
                </p>
                <div className={styles.footer__checkboxes}>
                    <div className={styles.footer__checkbox}>
                        <input
                            type="checkbox"
                            id="promotionalEmails"
                            className={styles.footer__checkbox__input}
                            checked={promotionalEmails}
                            onChange={(e) => setPromotionalEmails(e.target.checked)}
                        />
                        <label className={styles.footer__checkbox__label}>I agree to receive promotional emails.</label>
                    </div>
                    <div className={styles.footer__checkbox}>
                        <input
                            type="checkbox"
                            id="isLegalEntity"
                            className={styles.footer__checkbox__input}
                            checked={isLegalEntity}
                            onChange={(e) => setIsLegalEntity(e.target.checked)}
                        />
                        <label className={styles.footer__checkbox__label}>I am a legal entity.</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;