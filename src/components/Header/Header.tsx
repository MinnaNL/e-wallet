import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo} aria-label="Go to Home Page">
        <img
          src="/src/assets/icons/favicon.png"
          alt="App Logo"
          className={styles.favicon}
        />{' '}
        Wallet
      </Link>

      <nav className={styles.nav}>
        <Link to="/" aria-label="Go to Home Page">
          Home
        </Link>
        <Link to="/addcard" aria-label="Go to Add Card Page">
          Add Card
        </Link>
      </nav>

      <button className={styles.userButton} aria-label="User Profile">
        <FontAwesomeIcon icon={faUser} />
      </button>
    </header>
  )
}

export default Header
