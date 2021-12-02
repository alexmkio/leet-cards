import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Landing: NextPage = () => {
  return (
    <>
      <Head>
        <title>Leet Cards - A flash card application to help software engineers study</title>
        <meta name="description" content="Leet Cards - A flash card application to help software engineers study" />
        <meta name="theme-color" content="#67E8F9" />
      </Head>

      <div className="flex justify-center">
        <article className="h-full w-8/12 flex flex-col">
          <h2 className="text-xl font-semibold text-center">
            Welcome to Leet Code!
          </h2>
          <p className="text-xl pt-8">
            Leet Code is an application designed to help software engineers study for common technical interview questions.
          </p>
          <p className="text-xl pt-8">
            After entering, you will be given a deck of flash cards that have questions on a variety of topics. Clicking on a flash card will cause it to slip over showing you the answer to the question.
          </p>
          <p className="text-xl pt-8">
            You can add new cards by clicking the link in the top right. And you have the ability to edit or delete a card after clicking on it, but please use these powers wisely... your actions affect the deck of cards everyone is using.
          </p>
        </article>
      </div>
    </>
  )
}

export default Landing