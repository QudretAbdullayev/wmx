"use client";
import { useState, useEffect } from "react";
import styles from "./NotificationBanner.module.scss";
import Close from "@/assets/icons/Close";
import SafeLink from "@/components/SafeLink/SafeLink";

const NotificationBanner = ({
  message = "SECURE YOUR SPOT IN OUR UPCOMING CLASS – REGISTRATION IS NOW OPEN!",
  countdownTime = "04:13:12:48",
  showCountdown = true,
}) => {
  const [timeLeft, setTimeLeft] = useState(countdownTime);

  useEffect(() => {
    if (!showCountdown) return;

    const parseTime = (timeString) => {
      const parts = timeString.split(':').map(Number);
      return parts[0] * 24 * 60 * 60 + parts[1] * 60 * 60 + parts[2] * 60 + parts[3];
    };

    const formatTime = (totalSeconds) => {
      const days = Math.floor(totalSeconds / (24 * 60 * 60));
      const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      const seconds = totalSeconds % 60;
      
      return `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    let totalSeconds = parseTime(countdownTime);

    const timer = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        setTimeLeft(formatTime(totalSeconds));
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [countdownTime, showCountdown]);

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
            <span className={styles.countdown}>{timeLeft}</span>
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
