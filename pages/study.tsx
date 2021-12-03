import { useDeck } from "../context/DeckContext";
import Card from '../components/Card'

export default function Test() {
  const { deck } = useDeck();
  
  let flashCards = deck.map(card => {
    return (
      <Card key={`${card.id}`} card={card} />
    )
  })

  return (
    <section className="p-4 grid grid-cols-3 place-items-center gap-8">
      {flashCards}
    </section>
  )
}