"use client";
import { useState, useEffect } from "react";
import styles from "./NotificationBanner.module.scss";
import Close from "@/assets/icons/Close";
import SafeLink from "@/components/SafeLink/SafeLink";

const NotificationBanner = ({data}) => {
  const [timeLeft, setTimeLeft] = useState(data.countdown_time);

  useEffect(() => {
    if (!data.show_countdown) return;

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

    let totalSeconds = parseTime(data.countdown_time);

    const timer = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        setTimeLeft(formatTime(totalSeconds));
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [data.countdown_time, data.show_countdown]);

  return data.show_countdown ? (
    <div className={styles.banner}>
      <div className="g-container">
        <div className={styles.wrapper}>
          <div className={styles.message}>
            <span className={styles.message__text}>
              {data.first_message}&nbsp;–&nbsp;
            </span>
            <SafeLink href="/" className={styles.message__register}>
              {data.second_message}
            </SafeLink>
          </div>

          <div className={styles.countdown}>{timeLeft}</div>
          <button
            className={styles.close}
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
