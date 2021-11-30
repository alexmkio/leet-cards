import { useDeck } from "../context/DeckContext";
import { deleteData } from '../utils/apiCalls';

function Card({ card }) {
  const { removeCard } = useDeck();

  const deleteCard = async (card) => {
    let response = await deleteData(card.id)
    if (response.ok) {
      removeCard(card)
    } else {
      //shore up error handling here?
    }
  }

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
      <button onClick={() => deleteCard(card)}>Delete</button>

      <br></br><br></br>
    </article>
  )
}

export default Card