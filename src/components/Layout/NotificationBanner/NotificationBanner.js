import React from "react";
import styles from "./NotificationBanner.module.scss";
import Close from "@/assets/icons/Close";
import SafeLink from "@/components/SafeLink/SafeLink";

const NotificationBanner = ({
  message = "SECURE YOUR SPOT IN OUR UPCOMING CLASS – REGISTRATION IS NOW OPEN!",
  countdownTime = "04:13:12:48",
  showCountdown = true,
}) => {
  // Split message at the dash
  const messageParts = message.split(" – ");
  const firstPart = messageParts[0];
  const secondPart = messageParts[1];

  return showCountdown ? (
    <div className={styles.banner}>
      <div className="g-container">
        <div className={styles.wrapper}>
          <div className={styles.message}>
            <span className={styles.message__text}>
              {firstPart}&nbsp;–&nbsp;
            </span>
            <SafeLink href="/" className={styles.message__register}>
              {secondPart}
            </SafeLink>
          </div>

          <div className={styles.countdownContainer}>
            <span className={styles.countdown}>{countdownTime}</span>
          </div>
          <button
            className={styles.banner__close}
            aria-label="Close notification"
          >
            <Close />
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default NotificationBanner;
