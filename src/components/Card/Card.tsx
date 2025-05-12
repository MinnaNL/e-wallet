import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import vendors from '../../data/vendors'
import styles from './Card.module.css'
import '../../data/vendors.css'

interface CardProps {
  vendor: string
  cardNumber: string
  cardHolder: string
  expiryMonth: string
  expiryYear: string
  ccv: string
  onDelete: () => void
}

const Card: FC<CardProps> = ({
  vendor,
  cardNumber,
  cardHolder,
  expiryMonth,
  expiryYear,
  ccv,
  onDelete,
}) => {
  const selectedVendor = vendors[vendor] || vendors.cloudCard

  return (
    <div className={styles.cardContainer}>
      <div
        className={styles.card}
        style={{
          background: selectedVendor.theme.background,
          color: selectedVendor.theme.textColor,
        }}
      >
        <div className={styles.cardHeader}>
          <h2>{selectedVendor.name}</h2>
          <FontAwesomeIcon icon={selectedVendor.icon} className={styles.logo} />
        </div>
        <div className={styles.cardNumber}>{cardNumber}</div>
        <div className={styles.cardDetails}>
          <div className={styles.cardHolder}>{cardHolder}</div>
          <div className={styles.expiryDate}>
            {expiryMonth}/{expiryYear}
          </div>
        </div>
        <div className={styles.ccvOverlay}>{`CCV: ${ccv}`}</div>{' '}
      </div>
      <button className={styles.deleteButton} onClick={onDelete}>
        Delete
      </button>
    </div>
  )
}

export default Card
