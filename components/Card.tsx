import { useDeck } from "../context/DeckContext";
import { deleteData } from '../utils/apiCalls';
import Link from 'next/link'
import { CardType } from '../types/index'

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
    <article className="w-9/12 h-full p-6 py-12 text-lg bg-blue-300 border rounded-2xl shadow-md">
      <dl className="flex flex-col items-center">
        <dt className="px-4 pb-1 border-b border-gray-800">Question:</dt>
        <dd className="pt-4 text-center">{card.question}</dd>
      </dl>
    </article>
  )
}

{/* <article className="text-lg w-8/12 p-6 py-12 border rounded-2xl shadow-md bg-gray-100 overflow-hidden">
      <dl>
        <dt>Title:</dt>
        <dd>{card.question}</dd>
      </dl>

      <button onClick={() => deleteCard(card)}>Delete</button>

      <Link
        href={{
          pathname: `/edit/${card.id}`,
        }}
      >
        <a>
          <button>Edit Card #{card.id}</button>
        </a>
      </Link>
      <button onClick={() => deleteCard(card)} className="flex items-center rounded-full py-3 px-9 transition duration-500 ease-in-out bg-red-300 hover:bg-red-400 transform hover:scale-110 hover:shadow-2xl hover:text-blueGray-100">
        Add category&nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </button>

      <button onClick={() => deleteCard(card)} className="flex items-center rounded-full py-3 px-9 transition duration-500 ease-in-out bg-red-300 hover:bg-red-400 transform hover:scale-110 hover:shadow-2xl hover:text-blueGray-100">
        Add category&nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </button>
    </article> */}