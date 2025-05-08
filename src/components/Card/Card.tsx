import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import vendors from '../../data/vendors'
import styles from './Card.module.css'

interface CardProps {
  vendor: string
  cardNumber: string
  cardHolder: string
  expiryMonth: number
  expiryYear: number
  onDelete: () => void
}

const Card: FC<CardProps> = ({
  vendor,
  cardNumber,
  cardHolder,
  expiryMonth,
  expiryYear,
  onDelete,
}) => {
  const selectedVendor = vendors[vendor] || vendors.cloudCard

  return (
    <div
      className={styles.card}
      style={{
        background: selectedVendor.theme.background,
        color: selectedVendor.theme.textColor,
      }}
    >
      <div className={styles.header}>
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
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default Card
