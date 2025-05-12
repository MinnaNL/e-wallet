import { useState, ChangeEvent, FormEvent } from 'react'
import { CardFormData } from '../../types/CardFormData'
import vendors from '../../data/vendors'
import CardPreview from '../CardPreview/CardPreview'
import validateCard from '../../utils/helpers/validateCard'
import styles from './AddCardForm.module.css'
import '../../data/vendors.css'

interface AddCardFormProps {
  handleAddCard: (formData: CardFormData) => void
  isDisabled?: boolean // Added prop to disable the form
}

const AddCardForm: React.FC<AddCardFormProps> = ({
  handleAddCard,
  isDisabled = false,
}) => {
  const [formData, setFormData] = useState<CardFormData>({
    vendor: 'cloudCard',
    cardNumber: '',
    cardHolder: '',
    expiryMonth: '',
    expiryYear: '',
    ccv: 0,
  })
  const [error, setError] = useState<string>('')
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (isDisabled || isSubmitted) return

    const { name, value } = e.target
    if (name === 'cardNumber') {
      const formattedValue = value
        .replace(/\D/g, '')
        .replace(/(.{4})/g, '$1 ')
        .trim()
      setFormData({ ...formData, cardNumber: formattedValue })
    } else if (name === 'cardHolder') {
      const formattedName = value
        .split(' ')
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(' ')
      setFormData({ ...formData, cardHolder: formattedName })
    } else if (name === 'expiryMonth' || name === 'expiryYear') {
      const numericValue = value.replace(/\D/g, '')
      if (numericValue.length <= 2) {
        setFormData({
          ...formData,
          [name]: numericValue,
        })
      }
    } else if (name === 'ccv') {
      const numericValue = value.replace(/\D/g, '')
      if (numericValue.length <= 3) {
        setFormData({
          ...formData,
          ccv: numericValue === '' ? 0 : parseInt(numericValue, 10),
        })
      }
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const validationError = validateCard(formData)
    if (validationError) {
      setError(validationError)
      alert(validationError)
      return
    }

    handleAddCard(formData)
    setIsSubmitted(true)
  }

  return (
    <div className={styles.container}>
      <CardPreview {...formData} />

      <form onSubmit={handleSubmit} className={styles.form}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <label>Vendor</label>
        <select
          name="vendor"
          value={formData.vendor}
          onChange={handleChange}
          disabled={isDisabled || isSubmitted}
        >
          {Object.entries(vendors).map(([key, vendor]) => (
            <option key={key} value={key}>
              {vendor.name}
            </option>
          ))}
        </select>
        <label>Card Number</label>
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          maxLength={19}
          value={formData.cardNumber}
          onChange={handleChange}
          required
          disabled={isDisabled || isSubmitted}
        />
        <label>CardHolder</label>
        <input
          type="text"
          name="cardHolder"
          placeholder="Card Holder"
          value={formData.cardHolder}
          onChange={handleChange}
          required
          disabled={isDisabled || isSubmitted}
        />
        <label>Expiration Date</label>
        <input
          type="text"
          name="expiryMonth"
          placeholder="MM"
          value={formData.expiryMonth}
          onChange={handleChange}
          required
          disabled={isDisabled || isSubmitted}
        />
        <input
          type="text"
          name="expiryYear"
          placeholder="YY"
          value={formData.expiryYear}
          onChange={handleChange}
          required
          disabled={isDisabled || isSubmitted}
        />
        <label>CCV</label>
        <input
          type="text"
          name="ccv"
          placeholder="CCV"
          maxLength={3}
          value={formData.ccv || ''}
          onChange={handleChange}
          required
          disabled={isDisabled || isSubmitted}
        />
        <button type="submit" disabled={isDisabled || isSubmitted}>
          Add Card
        </button>
      </form>
    </div>
  )
}

export default AddCardForm
