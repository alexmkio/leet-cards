import { useDeck } from "../context/DeckContext";
import { deleteData } from '../utils/apiCalls';
import Link from 'next/link'

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

      <br></br>
      <button onClick={() => deleteCard(card)}>Delete</button>
      <br></br>

      <Link
        href={{
          pathname: `/edit/${card.id}`,
        }}
      >
        <a>
          <button>Edit Card #{card.id}</button>
        </a>
      </Link>
      <br></br><br></br>
    </article>
  )
}

export default Card