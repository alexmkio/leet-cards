import { GetStaticProps, GetStaticPaths } from 'next'
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
  }

  return (
    <h1>
      NO ERRORS!
    </h1>
  )
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
    return { props: { errors: error.message } }
  }
}