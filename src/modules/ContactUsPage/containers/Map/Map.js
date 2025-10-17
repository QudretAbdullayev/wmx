"use client";
import SectionTitle from '@/components/SectiontTitle/SectiontTitle'
import styles from './Map.module.scss'
import { useLocale } from 'next-intl'

const Map = ({ title }) => {
    const locale = useLocale()
    const src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.609382513588!2d49.82981907552431!3d40.35101045963731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x49a2f78a5fd612b5%3A0xca3f8ca93630e1b4!2sWemark!5e0!3m2!1s${locale}!2s${locale}!4v1759737008068!5m2!1s${locale}!2s${locale}`
    return (
        <section className="g-container mb">
            <SectionTitle title={title} />
            <div className="ml">
                <div className={styles.map}>
                   <iframe src={src} style={{border: 0, width: '100%', height: '100%'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    )
}

export default Map;