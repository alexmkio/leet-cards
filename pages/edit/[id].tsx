import { GetStaticProps, GetStaticPaths } from 'next'
import { useState } from 'react';
import { getData } from '../../utils/apiCalls'
import { CardType } from '../../types/index'

type Props = {
  card?: CardType
  errors?: string
}

export default function EditPost({ card, errors }: Props) {
  if (errors) {
    return (
      <h2>
        ERRORS!
      </h2>
    )
  } else if (card) {
    const [question, setQuestion] = useState(card.question);
    const [answer, setAnswer] = useState(card.answer);
    const [stack, setStack] = useState(card.side);
    const [categories, setCategories] = useState(card.categories);
    const [category, setCategory] = useState<string>('');

    return (
      <>
        {card.question}
        {card.answer}
        {card.side}
        {card.categories}
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
    // https://www.typescriptlang.org/tsconfig#useUnknownInCatchVariables
    // remove useUnknownInCatchVariables: false in tsconfig to try and solve this
    // if (error instanceof Error) {
    //   return { props: { errors: error.message } }
    // }  
    return { props: { errors: error.message } }
  }
}