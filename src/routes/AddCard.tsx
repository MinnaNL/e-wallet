import React, { useState } from 'react'
import { CardFormData } from '../types/CardFormData'
import { useNavigate } from 'react-router-dom'
import AddCardForm from '../components/AddCardForm/AddCardForm'

const AddCard: React.FC = () => {
  const navigate = useNavigate()
  const [feedback, setFeedback] = useState<string>('')

  const handleAddCard = (newCard: CardFormData) => {
    const storedCards = localStorage.getItem('cards')
    const cards = storedCards ? JSON.parse(storedCards) : []
    const updatedCards = [...cards, newCard]
    localStorage.setItem('cards', JSON.stringify(updatedCards))
    setFeedback('Card has been added')
    navigate('/')
  }

  return (
    <div className="container">
      <h1>Add a New Card</h1>
      {feedback && <p style={{ color: 'green' }}>{feedback}</p>}
      <AddCardForm handleAddCard={handleAddCard} />
    </div>
  )
}

export default AddCard
