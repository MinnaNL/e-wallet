import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo} aria-label="Go to Home Page">
        <FontAwesomeIcon icon={faCreditCard} className={styles.logoIcon} />
        <span className={styles.logoText}>Payflow</span>
      </Link>

      <nav className={styles.nav}>
        <Link to="/" aria-label="Go to Home Page">
          Cards
        </Link>
        <Link to="/addcard" aria-label="Go to Add Card Page">
          Add Card
        </Link>
      </nav>

      <nav className={styles.userNav} aria-label="User Profile">
        <FontAwesomeIcon icon={faUser} />
      </nav>
    </header>
  )
}

export default Header
