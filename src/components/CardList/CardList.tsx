import Card from '../Card/Card'
import styles from './CardList.module.css'
import { CardFormData } from '../../types/CardFormData'

interface CardListProps {
  cards: CardFormData[]
  onDelete: (index: number) => void
}

const CardList: React.FC<CardListProps> = ({ cards, onDelete }) => {
  return (
    <div className={styles.cardList}>
      {cards.map((card, index) => (
        <Card key={index} {...card} onDelete={() => onDelete(index)} />
      ))}
    </div>
  )
}

export default CardList
