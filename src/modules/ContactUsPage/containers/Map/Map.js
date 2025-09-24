import SectionTitle from '@/components/SectiontTitle/SectiontTitle'
import GoogleMap from '../../components/Map/Map'
import styles from './Map.module.scss'

const Map = ({ data }) => {
    return (
        <section className="g-container mb">
            <SectionTitle title={data.section_title} />
            <div className="ml">
                <div className={styles.map}>
                    <GoogleMap center={[data.latitude, data.longitude]} zoom={data.zoom} />
                </div>
            </div>
        </section>
    )
}

export default Map;