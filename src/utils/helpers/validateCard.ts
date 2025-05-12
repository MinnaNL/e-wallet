import { CardFormData } from '../../types/CardFormData'

const validateCard = (cardData: CardFormData): string | null => {
  const currentYear = new Date().getFullYear() % 100
  const currentMonth = new Date().getMonth() + 1

  if (!cardData.vendor) {
    return 'Please select a card vendor'
  }
  if (!cardData.cardNumber || cardData.cardNumber.toString().replace(/\s/g, '').length !== 16) {
    return 'Card number must be 16 digits'
  }
  if (!/^\d+$/.test(cardData.cardNumber.toString().replace(/\s/g, ''))) {
    return 'Card number cannot contain letters'
  }
  if (!cardData.cardHolder || /\d/.test(cardData.cardHolder)) {
    return 'Card Holder cannot contain numbers'
  }
  const expiryMonth = parseInt(cardData.expiryMonth, 10) 
  if (!expiryMonth || expiryMonth < 1 || expiryMonth > 12) {
    return 'Please enter a valid expiry month (01–12).'
  }
  const expiryYear = parseInt(cardData.expiryYear, 10)
  if (
    !expiryYear ||
    expiryYear < currentYear ||
    (expiryYear === currentYear && expiryMonth < currentMonth)
  ) {
    return 'The expiry date can’t be in the past.'
  }
  if (!cardData.ccv || cardData.ccv.length !== 3 || !/^\d+$/.test(cardData.ccv)) {
    return 'CCV must be 3 digits'
  }
  return null
}

export default validateCard
