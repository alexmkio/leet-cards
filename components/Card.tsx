import { useState } from 'react'
import Link from 'next/link'
import { useDeck } from "../context/DeckContext"
import { deleteData } from '../utils/apiCalls'
import { CardType } from '../types/index'

type Props = {
  card: CardType
}

export default function Card({ card }: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const { removeCard } = useDeck()
  const cardColor = card.side === 'BE' ? 'bg-teal-300 border-teal-300 dark:bg-stone-700 dark:border-stone-700' : 'bg-pink-300 border-pink-300 dark:bg-slate-700 dark:border-slate-700'

  const answer = card.answer.split('<br>').map((item, index) => {
    return (
      <p key={index}>{item}</p>
    )
  })

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
    <article onMouseEnter={handleToggle} onMouseLeave={handleToggle} className="w-full h-72 bg-transparent" style={{perspective: "1000px"}}>
      <div className="w-full h-full text-center"
        style={isHovered
          ? { transition: "transform 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275)", transformStyle: "preserve-3d", transform: "rotateY(180deg)" }
          : { transition: "transform 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275)", transformStyle: "preserve-3d" }}>

        <div className={`${cardColor} ${"absolute w-full min-h-full p-6 py-12 text-lg border rounded-2xl shadow-md"}`}
          style={{backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden"}}>
          <dl className="flex flex-col items-center">
            <dt className="px-4 pb-1 border-b border-gray-800 dark:text-green-200 dark:border-green-200">Question:</dt>
            <dd className="pt-4 text-center">{card.question}</dd>
          </dl>
        </div>

        <div className="flex flex-col justify-between absolute overflow-auto w-full h-full p-8 text-lg bg-blue-300 border border-blue-300 rounded-2xl shadow-md dark:bg-violet-900 dark:border-violet-900"
          style={{backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)"}}>
          <dl className="flex flex-col items-center">
            <dt className="px-4 pb-1 border-b border-gray-800 dark:text-green-200 dark:border-green-200">Answer:</dt>
            <dd className="py-4 text-center">{answer}</dd>
          </dl>

          <div className="flex justify-around">
            <Link href={{pathname: `/edit/${card.id}`}}>
              <a>
                <button className="flex items-center text-md md:text-lg rounded-full py-3 px-9 transition duration-500 ease-in-out bg-yellow-200 hover:bg-yellow-300 hover:scale-110 hover:shadow-2xl dark:bg-teal-200 dark:hover:bg-teal-300 dark:text-gray-900">
                  Edit Answer
                </button>
              </a>
            </Link>
            <button onClick={() => deleteCard()} className="flex items-center text-md md:text-lg rounded-full py-3 px-9 transition duration-500 ease-in-out bg-yellow-200 hover:bg-yellow-300 hover:scale-110 hover:shadow-2xl dark:bg-blue-200 dark:hover:bg-blue-300 dark:text-gray-900">
              Delete Card
            </button>
          </div>

        </div>

      </div>
    </article>
  )
}