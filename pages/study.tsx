import Head from 'next/head'
import { useDeck } from "../context/DeckContext";
import Card from '../components/Card'

export default function Test() {
  const { deck } = useDeck();
  
  let flashCards = deck.map(card => {
    return (
      <Card key={`${card.id}`} card={card} />
    )
  })

  return (
    <>
      <Head>
        <title>Leet Cards - Study the flash cards</title>
        <meta name="description" content="Leet Cards - Study the flash cards" />
        <meta name="theme-color" content="#F9A8D4" />
      </Head>

      <section className="p-4 grid grid-cols-3 place-items-center gap-8">
        {flashCards}
      </section>
    </>
  )
}