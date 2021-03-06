import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { getData, putData } from '../../utils/apiCalls'
import { CardType } from '../../types/index'
import { useDeck } from "../../context/DeckContext"
import { useTheme } from '../../context/ThemeContext'
import { PencilIcon } from '@heroicons/react/outline'

type Props = {
  card: CardType
}

export default function EditPost({ card }: Props) {
  const [answer, setAnswer] = useState(card.answer)
  const [formError, setFormError] = useState('')
  const { updateCard } = useDeck()
  const router = useRouter()
  const { darkMode } = useTheme()
  let interfaceColor = darkMode ? "black" : "#D9F99D"
  
  const putFlashCard = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    if (answer === card.answer) {
      setFormError('Sorry, change the answer first!')
    } else {
      let response = await putData(card.id, {
        answer: answer.replace(/\r?\n/g, '<br>'),
      })
      //shore up conditional logic here: should be = if success (not error) do this
      if (response === 'The answer was updated!') {
        updateCard(card.id, {
          answer: answer.replace(/\r?\n/g, '<br>'),
        })
        router.push('/study')
      }
    }
  }

  return (
    <>
      <Head>
        <title>Leet Cards - Edit A Flash Card</title>
        <meta name="description" content="Leet Cards - Edit A Flash Card" />
        <meta name="theme-color" content={interfaceColor} />
      </Head>
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl pt-8 text-center capitalize dark:text-blue-100">
        Edit a flash card
      </h2>
      <div className="flex flex-col items-center">
        
        <dl className="flex flex-col text-lg pt-8 md:pt-12 text-center">
          <dt className="px-4 pb-1 border-b border-gray-800 dark:text-green-200 dark:border-green-200">
            Question:
          </dt>
          <dd className="pt-4">{card.question}</dd>
        </dl>
        
        <form className="flex flex-col justify-center w-11/12 sm:w-8/12 md:w-6/12 lg:w-5/12">
          <label className="text-lg pt-8 md:pt-12 text-center dark:text-green-200 dark:border-green-200" htmlFor="answer">
            Answer:
          </label>
          <textarea
            className="w-full rounded-lg shadow-sm text-lg border-gray-300 focus:border-red-300 focus:ring focus:ring-red-300 focus:ring-opacity-50 dark:focus:border-green-200 dark:focus:ring-green-200 dark:text-gray-900"
            id="answer"
            value={answer}
            onChange={(event)=> setAnswer(event.target.value)}
            required
          ></textarea>
          <p className="text-red-500">
            {formError}
          </p>

          <div className="flex justify-center py-6 md:py-12">
            <button onClick={(event) => putFlashCard(event)}
              className="flex items-center text-lg md:text-xl rounded-full py-3 px-9 transition duration-500 ease-in-out bg-red-300 hover:bg-red-400 hover:scale-110 hover:shadow-2xl hover:text-blueGray-100 dark:bg-blue-200 dark:hover:bg-blue-300 dark:text-gray-900">
              <p>Edit card</p>
              <PencilIcon className="h-6 w-6 ml-2"/>
            </button>
          </div>
        </form>

      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const deck: CardType[] = await getData('cards')
  const paths = deck.map((card) => ({
    params: {
      id: card.id.toString(),
    },
  }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id
  const card: CardType = await getData(`cards/${id}`)
  return {
    props: {
      card,
    },
    revalidate: 10,
  }
}