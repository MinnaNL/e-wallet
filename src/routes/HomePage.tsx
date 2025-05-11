import React, { useState, useEffect } from 'react'
import CardList from '../components/CardList/CardList'
import { CardFormData } from '../types/CardFormData'
import { Link } from 'react-router-dom'
import '../App.css'

const HomePage: React.FC = () => {
  const [cards, setCards] = useState<CardFormData[]>([])

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
  }

  return (
    <div className="container">
      <h1>Your Cards</h1>
      <CardList cards={cards} onDelete={handleDelete} />
      <Link to="/addcard" className="addButton">
        Add New Card
      </Link>
    </div>
  )
}

export default HomePage
