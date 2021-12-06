import { useDeck } from "../context/DeckContext";
import { useState } from 'react';
import Link from 'next/link'
import { deleteData } from '../utils/apiCalls';
import { CardType } from '../types/index'

type Props = {
  card: CardType
}

export default function Card({ card }: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { removeCard } = useDeck();

  const deleteCard = async () => {
    let response = await deleteData(card.id)
    if (response === "The card has been deleted!") {
      removeCard(card)
    } else {
      //shore up error handling here?
    }
  }

  const handleToggle = () => {
    setIsHovered(!isHovered)
  }

  return (
    <article
      onMouseEnter={handleToggle}
      onMouseLeave={handleToggle}
      className="w-full h-60 bg-transparent"
      style={{perspective: "1000px"}}
    >
      <div
        className="w-full h-full text-center"
        style={isHovered ? {transition: "transform 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275)", transformStyle: "preserve-3d", transform: "rotateY(180deg)"} : {transition: "transform 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275)", transformStyle: "preserve-3d"}}
      >

        <div
          className="absolute w-full min-h-full p-6 py-12 text-lg bg-blue-300 border rounded-2xl shadow-md"
          style={{backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden"}}
        >
          <dl className="flex flex-col items-center">
            <dt className="px-4 pb-1 border-b border-gray-800">Question:</dt>
            <dd className="pt-4 text-center">{card.question}</dd>
          </dl>
        </div>

        <div
          className="absolute overflow-auto w-full h-full p-6 py-12 text-lg bg-red-300 border rounded-2xl shadow-md"
          style={{backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)"}}
        >
          <dl className="flex flex-col items-center">
            <dt className="px-4 pb-1 border-b border-gray-800">Answer:</dt>
            <dd className="pt-4 text-center">{card.answer}</dd>
          </dl>
          <div className="flex justify-around content-end">
            <Link
              href={{
                pathname: `/edit/${card.id}`,
              }}
            >
              <a>
                <button className="flex items-center rounded-full py-3 px-9 transition duration-500 ease-in-out bg-yellow-200 hover:bg-yellow-300 transform hover:scale-110 hover:shadow-2xl">
                  Edit Answer
                </button>
              </a>
            </Link>
            <button onClick={() => deleteCard()} className="flex items-center rounded-full py-3 px-9 transition duration-500 ease-in-out bg-yellow-200 hover:bg-yellow-300 transform hover:scale-110 hover:shadow-2xl">
              Delete Card
            </button>
          </div>
        </div>

      </div>
    </article>
  )
}