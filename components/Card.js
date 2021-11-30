import { useDeck } from "../context/DeckContext";

function Card({ card }) {
  const { addCard } = useDeck();
  return (
    <article>
      <dl>
        <dt>Title:</dt>
        <dd>{card.question}</dd>

        <dt>Title:</dt>
        <dd>{card.answer}</dd>

        <dt>Title:</dt>
        <dd>{card.side}</dd>

        <dt>Title:</dt>
        <dd>{card.categories}</dd>
      </dl>
      <button onClick={() => addCard(card)}>Add Card</button>
    </article>
  )
}

export default Card