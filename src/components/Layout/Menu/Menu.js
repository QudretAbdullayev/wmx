import styles from './Menu.module.scss'
import SafeLink from '@/components/SafeLink/SafeLink'

const Menu = ({ isOpen, onClose }) => {
  const handleItemClick = () => {
    onClose();
  };

  return (
    <div className={`${styles.menu} ${isOpen ? styles.menu_open : ''}`}>
      <SafeLink href="/" className={styles.menu__item} onClick={handleItemClick}>
        Feed
      </SafeLink>
      <div className={styles.menu__item} onClick={handleItemClick}>
        Program
      </div>
      <SafeLink href="/about" className={styles.menu__item} onClick={handleItemClick}>
        About
      </SafeLink>
      <SafeLink href="/knowledge-hub" className={styles.menu__item} onClick={handleItemClick}>
        Knowledge Hub
      </SafeLink>
      <SafeLink href="/contact" className={styles.menu__item} onClick={handleItemClick}>
        Contact
      </SafeLink>
    </div>
  )
}

export default Menu