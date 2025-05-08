import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import vendors from '../../data/vendors'
import styles from './CardPreview.module.css'

const CardPreview = ({
  vendor,
  cardNumber,
  cardHolder,
  expiryMonth,
  expiryYear,
}: {
  vendor: string
  cardNumber: string
  cardHolder: string
  expiryMonth: number
  expiryYear: number
}) => {
  const selectedVendor = vendors[vendor] || vendors.cloudCard

  return (
    <div
      className={styles.previewCard}
      style={{
        background: selectedVendor.theme.background,
        color: selectedVendor.theme.textColor,
      }}
    >
      <div className={styles.header}>
        <h2>{selectedVendor.name}</h2>
        <FontAwesomeIcon icon={selectedVendor.icon} className={styles.logo} />
      </div>
      <div className={styles.cardNumber}>
        {cardNumber || '•••• •••• •••• ••••'}
      </div>
      <div className={styles.cardDetails}>
        <div className={styles.cardHolder}>
          {cardHolder || 'Firstname Lastname'}
        </div>
        <div className={styles.expiryDate}>
          {expiryMonth || 'MM'}/{expiryYear || 'YY'}
        </div>
      </div>
    </div>
  )
}

export default CardPreview
