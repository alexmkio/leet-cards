import { GetStaticProps, GetStaticPaths } from 'next'
import { useState } from 'react';
import { getData } from '../../utils/apiCalls'
import { CardType } from '../../types/index'

type Props = {
  card?: CardType
  errors?: string
}

export default function EditPost({ card, errors }: Props) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [stack, setStack] = useState('');
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState<string>('');

  if (errors) {
    return (
      <h2>
        ERRORS!
      </h2>
    )
  } else if (card) {
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
    if (error instanceof Error) {
      return { props: { errors: error.message } }
    }
  }
}