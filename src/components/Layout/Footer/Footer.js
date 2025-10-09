"use client";
import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import SafeImage from "@/components/SafeImage/SafeImage";
import styles from "./Footer.module.scss";
import SafeLink from "@/components/SafeLink/SafeLink";
import ArrowDown from "@/assets/icons/ArrowDown";
import Top from "@/assets/icons/Top";
import HoverText from "@/components/HoverText/HoverText";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState("");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const bakuTime = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Baku",
        hour: "2-digit",
        minute: "2-digit",
        hour12: locale !== "az",
      });
      setCurrentTime(bakuTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [locale]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleConsultationClick = (e) => {
    e.preventDefault();
    const sectionId = "tell-us-section";
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    router.push(`/${locale}/#${sectionId}`);
  };

  const handleLanguageChange = (e) => {
    const newLocale = e.target.value;
    router.push(pathname, { locale: newLocale });
  };

  return (
    <footer className={styles.footer}>
      <SafeImage
        fill
        src="/images/footer/background.png"
        alt="Footer Background"
      />
      <div className="g-container">
        <div className={styles.footer__container}>
          <div className={styles.top}>
            <div className={styles.top__left}>
              <SafeLink href="/" className={styles.logo}>
                <SafeImage
                  src="/logo-white.svg"
                  alt="WM X School"
                  fill
                  priority
                />
              </SafeLink>
              <div className={styles.description}>
                The next-level potential within you, shaped through executive
                education built for marketing leadership.
              </div>
              <HoverText
                text="Consultation"
                as="a"
                href="#tell-us-section"
                onClick={handleConsultationClick}
                className={styles.button}
              />
            </div>
            <div className={styles.top__right}>
              <div className={styles.lists}>
                <div className={styles.list}>
                  <span className={styles.list__title}>INDIVIDUALS</span>
                  <ul className={styles.list__items}>
                    <li className={styles.list__item}>
                      <HoverText
                        text="Emerging CMO"
                        as="a"
                        href="/programs/emerging-cmo"
                        className={styles.list__item__link}
                      />
                    </li>
                    <li className={styles.list__item}>
                      <HoverText
                        text="Marketing Pro"
                        as="a"
                        href="/programs/marketing-pro"
                        className={styles.list__item__link}
                      />
                    </li>
                  </ul>
                </div>
                <div className={styles.list}>
                  <span className={styles.list__title}>COMPANY</span>
                  <ul className={styles.list__items}>
                    <li className={styles.list__item}>
                      <HoverText
                        text="About"
                        as="a"
                        href="/"
                        className={styles.list__item__link}
                      />
                    </li>
                    <li className={styles.list__item}>
                      <HoverText
                        text="Knowledge Hub"
                        as="a"
                        href="/about"
                        className={styles.list__item__link}
                      />
                    </li>
                    <li className={styles.list__item}>
                      <HoverText
                        text="Privacy Policy"
                        as="a"
                        href={`/privacy`}
                        className={styles.list__item__link}
                      />
                    </li>
                    <li className={styles.list__item}>
                      <HoverText
                        text="Terms"
                        as="a"
                        href={`/terms`}
                        className={styles.list__item__link}
                      />
                    </li>
                  </ul>
                </div>
                <div className={styles.list}>
                  <span className={styles.list__title}>COMMUNITY</span>
                  <ul className={styles.list__items}>
                    <li className={styles.list__item}>
                      <HoverText
                        text="LinkedIn"
                        as="a"
                        href="/linkedin"
                        className={styles.list__item__link}
                      />
                    </li>
                    <li className={styles.list__item}>
                      <HoverText
                        text="Instagram"
                        as="a"
                        href="/instagram"
                        className={styles.list__item__link}
                      />
                    </li>
                    <li className={styles.list__item}>
                      <HoverText
                        text="YouTube"
                        as="a"
                        href="/youtube"
                        className={styles.list__item__link}
                      />
                    </li>
                    <li className={styles.list__item}>
                      <HoverText
                        text="TikTok"
                        as="a"
                        href="/tiktok"
                        className={styles.list__item__link}
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.lang}>
                <select
                  className={styles.lang__select}
                  value={locale}
                  onChange={handleLanguageChange}
                >
                  <option value="en">EN</option>
                  <option value="az">AZ</option>
                </select>
                <ArrowDown />
              </div>
            </div>
          </div>
          <button className={styles.middle} onClick={scrollToTop}>
            <HoverText
              text={
                <div className={styles.middle__container}>
                  Back to the top
                  <Top />
                </div>
              }
            />
          </button>
          <div className={styles.bottom}>
            <span className={styles.bottom__location}>
              Baku, Azerbaijan {currentTime}
            </span>
            <span className={styles.bottom__copyright}>
              Designed & Developed by Wemark
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
