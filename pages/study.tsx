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
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#F9A8D4" />
        <meta name="theme-color" media="(localStorage.theme || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))" content="black" />
      </Head>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4 lg:gap-8 p-4 lg:p-8">
        {flashCards}
      </section>
    </>
  )
}