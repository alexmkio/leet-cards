import { useState } from 'react';
import { CardType } from '../types/index'

type Props = {
  card: CardType
}

export default function Card({ card }: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

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
        // className="relative w-full h-full text-center"
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
          className="absolute w-full min-h-full p-6 py-12 text-lg bg-red-300 border rounded-2xl shadow-md"
          style={{backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)"}}
        >
          <dl className="flex flex-col items-center">
            <dt className="px-4 pb-1 border-b border-gray-800">Answer:</dt>
            <dd className="pt-4 text-center">{card.answer}</dd>
          </dl>
        </div>
      </div>
    </article>
  )
}