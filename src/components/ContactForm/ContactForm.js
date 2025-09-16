// ContactForm.jsx
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js';
import 'react-phone-number-input/style.css';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [extraField, setExtraField] = useState('');
    const [promotionalEmails, setPromotionalEmails] = useState(false);
    const [isLegalEntity, setIsLegalEntity] = useState(false);
    const [phoneError, setPhoneError] = useState('');
    const [fullNameError, setFullNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [extraFieldError, setExtraFieldError] = useState('');

    const handlePhoneChange = (value) => {
        setPhoneNumber(value);
        setPhoneError('');
        
        if (value) {
            try {
                const phoneNumberObj = parsePhoneNumber(value);
                if (phoneNumberObj && phoneNumberObj.isValid()) {
                    setPhoneError('');
                } else {
                    setPhoneError('Phone number is valid');
                }
            } catch (error) {
                setPhoneError('Phone number is valid');
            }
        }
    };

    const validateFullName = (value) => {
        if (!value.trim()) {
            setFullNameError('Full name is required');
            return false;
        }
        if (value.trim().length < 2) {
            setFullNameError('Full name must be at least 2 characters');
            return false;
        }
        setFullNameError('');
        return true;
    };

    const validateEmail = (value) => {
        if (!value.trim()) {
            setEmailError('Email is required');
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            setEmailError('Please enter a valid email address');
            return false;
        }
        setEmailError('');
        return true;
    };

    const validateExtraField = (value) => {
        if (!value.trim()) {
            setExtraFieldError('This field is required');
            return false;
        }
        setExtraFieldError('');
        return true;
    };

    const handleFullNameBlur = () => {
        validateFullName(fullName);
    };

    const handleEmailBlur = () => {
        validateEmail(email);
    };

    const handleExtraFieldBlur = () => {
        validateExtraField(extraField);
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
            <div className={styles.form}>
                <div className={styles.form__field}>
                    <label className={styles.form__label}>Full name</label>
                    <input
                        type="text"
                        className={styles.form__input}
                        placeholder="Full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        onBlur={handleFullNameBlur}
                    />
                    {fullNameError && (
                        <span className={styles.form__error}>{fullNameError}</span>
                    )}
                </div>
                <div className={styles.form__field}>
                    <label className={styles.form__label}>Number</label>
                    <div className={styles.form__phone}>
                        <PhoneInput
                            placeholder="Enter phone number"
                            value={phoneNumber}
                            onChange={handlePhoneChange}
                            defaultCountry="AZ"
                            className={styles.form__phone__input}
                            error={phoneError}
                            international
                            countryCallingCodeEditable={false}
                            limitMaxLength={true}
                        />
                        {phoneError && (
                            <span className={styles.form__error}>{phoneError}</span>
                        )}
                    </div>
                </div>
                <div className={styles.form__field}>
                    <label className={styles.form__label}>E-mail</label>
                        <input
                            type="email"
                            className={styles.form__input}
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={handleEmailBlur}
                        />
                        {emailError && (
                            <span className={styles.form__error}>{emailError}</span>
                        )}
                </div>
                <div className={styles.form__field}>
                    <label className={styles.form__label}>Ex!</label>
                        <input
                            type="text"
                            className={styles.form__input}
                            placeholder="Extra field"
                            value={extraField}
                            onChange={(e) => setExtraField(e.target.value)}
                            onBlur={handleExtraFieldBlur}
                        />
                        {extraFieldError && (
                            <span className={styles.form__error}>{extraFieldError}</span>
                        )}
                </div>
                <div className={styles.form__submit}>
                    <span className={styles.form__submit__text}>Submit</span>
                </div>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.footer}>
                <p className={styles.privacyText}>
                    By clicking, I agree to the Privacy Policy and Terms.
                </p>
                <div className={styles.checkboxContainer}>
                    <div className={styles.checkboxRow}>
                        <div className={styles.checkboxWrapper}>
                            <input
                                type="checkbox"
                                id="promotionalEmails"
                                className={styles.checkbox}
                                checked={promotionalEmails}
                                onChange={(e) => setPromotionalEmails(e.target.checked)}
                            />
                            <label htmlFor="promotionalEmails" className={styles.checkboxLabel}></label>
                        </div>
                        <span className={styles.checkboxText}>I agree to receive promotional emails.</span>
                    </div>
                    <div className={styles.checkboxRowSimple}>
                        <input
                            type="checkbox"
                            id="isLegalEntity"
                            className={styles.checkbox}
                            checked={isLegalEntity}
                            onChange={(e) => setIsLegalEntity(e.target.checked)}
                        />
                        <label htmlFor="isLegalEntity" className={styles.checkboxLabel}></label>
                        <span className={styles.checkboxText}>I am a legal entity.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;