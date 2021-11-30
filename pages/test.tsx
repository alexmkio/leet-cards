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
        <>
          {flashCards}
        </>
    );
}