import React, { useState, useEffect } from 'react'
import CardList from '../components/CardList/CardList'
import { CardFormData } from '../types/CardFormData'
import { Link } from 'react-router-dom'
import '../App.css'

const HomePage: React.FC = () => {
  const [cards, setCards] = useState<CardFormData[]>([])
  const [errorMessage, setErrorMessage] = useState<string>('')

  useEffect(() => {
    const storedCards = localStorage.getItem('cards')
    if (storedCards) {
      setCards(JSON.parse(storedCards))
    }
  }, [])

  const handleDelete = (index: number) => {
    const updatedCards = cards.filter((_, i) => i !== index)
    setCards(updatedCards)
    localStorage.setItem('cards', JSON.stringify(updatedCards))
    setErrorMessage('') // Clear error message when a card is deleted
  }

  const handleAddCardClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (cards.length >= 4) {
      e.preventDefault()
      setErrorMessage('You can have max 4 active cards')
    }
  }

  return (
    <div className="container">
      <h1>Your Cards</h1>
      <CardList cards={cards} onDelete={handleDelete} />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <Link
        to={cards.length < 4 ? '/addcard' : '#'}
        className={`addButton ${cards.length >= 4 ? 'disabled' : ''}`}
        onClick={handleAddCardClick}
      >
        Add New Card
      </Link>
    </div>
  )
}

export default HomePage
