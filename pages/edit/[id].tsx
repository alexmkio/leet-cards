import { GetStaticProps, GetStaticPaths } from 'next'
import { useState } from 'react';
import { getData, putData } from '../../utils/apiCalls'
import { CardType } from '../../types/index'
import { useDeck } from "../../context/DeckContext";

type Props = {
  card?: CardType
  errors?: string
}

export default function EditPost({ card, errors }: Props) {
  const [answer, setAnswer] = useState(card?.answer);
  const { updateCard } = useDeck();

  const putFlashCard = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let response = await putData(card?.id, {
      answer: answer,
    })
    //shore up conditional logic here: should be = if success (not error) do this
    // if (response.id) {
    //   addCard(response)
    // }
    // setAnswer('')
  }

  if (errors) {
    return (
      <h2>
        ERRORS!
      </h2>
    )
  } else if (card) {
    return (
      <>
        {card.question}, {card.side}, {card.categories}
        <form onSubmit={putFlashCard}>

          <label htmlFor="answer">Answer:</label>
          <input
            type="text"
            id="answer"
            value={answer}
            onChange={(event)=> setAnswer(event.target.value)}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </>
    )
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const deck: CardType[] = await getData('cards')
  const paths = deck.map((card) => ({
    params: { id: card.id.toString() },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id
    const card: CardType = await getData(`cards/${id}`)
    return { props: { card } }
  } catch (error) {
    if (error instanceof Error) {
      return { props: { errors: error.message } }
    }
  }
}