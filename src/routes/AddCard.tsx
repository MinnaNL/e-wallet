import React, { useState, useEffect } from 'react'
import { CardFormData } from '../types/CardFormData'
import { useNavigate } from 'react-router-dom'
import AddCardForm from '../components/AddCardForm/AddCardForm'

const AddCard: React.FC = () => {
  const navigate = useNavigate()
  const [cards, setCards] = useState<CardFormData[]>([])
  const [isMaxCards, setIsMaxCards] = useState<boolean>(false)
  const [feedback, setFeedback] = useState<string>('')

  useEffect(() => {
    const storedCards = localStorage.getItem('cards')
    if (storedCards) {
      const parsedCards = JSON.parse(storedCards)
      setCards(parsedCards)
      if (parsedCards.length >= 4) {
        setIsMaxCards(true)
      }
    }
  }, [])

  const handleAddCard = (newCard: CardFormData) => {
    const updatedCards = [...cards, newCard]
    setCards(updatedCards)
    localStorage.setItem('cards', JSON.stringify(updatedCards))
    setFeedback('Card has been added')
  }

  return (
    <div className="container">
      <h1>Add a New Card</h1>
      {feedback && <h3 className="cardAdded">{feedback}</h3>}
      {isMaxCards ? (
        <div className="container">
          <h3 className="maxCardHeading">Unable to add another card</h3>
          <p className="maxCardCount">
            You can only have 4 cards at a time. To add a new one, please delete
            one of your existing cards first.
          </p>
        </div>
      ) : (
        <AddCardForm handleAddCard={handleAddCard} />
      )}
    </div>
  )
}

export default AddCard
