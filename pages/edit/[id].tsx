import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useState } from 'react';
import { getData, putData } from '../../utils/apiCalls'
import { CardType } from '../../types/index'
import { useDeck } from "../../context/DeckContext";

type Props = {
  card: CardType
}

export default function EditPost({ card }: Props) {
  const [answer, setAnswer] = useState(card.answer);
  const [formError, setFormError] = useState('');
  const { updateCard } = useDeck();

  const putFlashCard = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (answer === card.answer) {
      setFormError('Sorry, change the answer first!')
    } else {
      let response = await putData(card.id, {
        answer: answer,
      })
      //shore up conditional logic here: should be = if success (not error) do this
      if (response === 'The answer was updated!') {
        updateCard(card.id, {
          answer: answer,
        })
      }
    }
  }

  return (
    <>
      <Head>
        <title>Leet Cards - Edit A Flash Card</title>
        <meta name="description" content="Leet Cards - Edit A Flash Card" />
        <meta name="theme-color" content="#D9F99D" />
      </Head>
      
      <h2 className="text-6xl font-semibold py-12 text-center capitalize">Edit a flash card</h2>
      <div className="flex flex-col items-center">
        
        <dl className="flex flex-col text-lg">
          <dt className="px-4 pb-1 border-b border-gray-800">Question:</dt>
          <dd className="pt-4 text-center">{card.question}</dd>
        </dl>
        
        <form className="w-6/12 flex flex-col justify-center">
          <label className="text-lg pt-8" htmlFor="answer">Answer:</label>
          <textarea
            className="w-full rounded-lg shadow-sm text-lg border-gray-300 focus:border-red-300 focus:ring focus:ring-red-300 focus:ring-opacity-50"
            id="answer"
            value={answer}
            onChange={(event)=> setAnswer(event.target.value)}
            required
          ></textarea>
          <p className="text-red-500">{formError}</p>

          <div className="flex justify-center pt-16">
            <button onClick={(event) => putFlashCard(event)} className="flex items-center text-xl rounded-full py-3 px-9 transition duration-500 ease-in-out bg-red-300 hover:bg-red-400 transform hover:scale-110 hover:shadow-2xl hover:text-blueGray-100">
              Edit card&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
          </div>
        </form>

      </div>
    </>
  )

  // return (
  //   <>
  //     {card.question}, {card.side}, {card.categories}
  //     <form onSubmit={putFlashCard}>

  //       <label htmlFor="answer">Answer:</label>
  //       <input
  //         type="text"
  //         id="answer"
  //         value={answer}
  //         onChange={(event)=> setAnswer(event.target.value)}
  //         required
  //       />

  //       <button type="submit">Submit</button>
  //     </form>
  //   </>
  // )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const deck: CardType[] = await getData('cards')
  const paths = deck.map((card) => ({
    params: { id: card.id.toString() },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id
  const card: CardType = await getData(`cards/${id}`)
  return { props: { card } }
}