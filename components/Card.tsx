import { useDeck } from "../context/DeckContext";
import { deleteData } from '../utils/apiCalls';
import Link from 'next/link'
import { CardType, PutObject } from '../types/index'

type Props = {
  card: CardType
}

export default function Card({ card }: Props) {
  const { removeCard } = useDeck();

  const deleteCard = async (card: CardType) => {
    let response = await deleteData(card.id)
    if (response.ok) {
      removeCard(card)
    } else {
      //shore up error handling here?
    }
  }

  return (
    // <article className="w-8/12 p-6 py-12 border rounded-2xl shadow-md bg-gray-100 overflow-hidden"></article>
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