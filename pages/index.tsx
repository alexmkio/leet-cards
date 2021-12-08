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

      <div className="flex justify-center px-4 py-8">
        <article className="w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 flex flex-col">
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center dark:text-blue-100">
            Welcome to Leet Code!
          </h2>
          <p className="text-lg pt-8">
            Leet Code is an application designed to help software engineers study for common technical interview questions.
          </p>
          <p className="text-lg pt-8">
            After entering, you will be given a deck of flash cards that have questions on a variety of topics. Clicking on a flash card will cause it to flip over showing you the answer to the question.
          </p>
          <p className="text-lg pt-8">
            You can add new cards by clicking the link in the top right of every page. And you have the ability to edit or delete a card after clicking on it, but please use these powers wisely... your actions affect the deck of cards everyone is using.
          </p>
          <div className="flex justify-center pt-8">
            <Link href='/study'>
              <a>
                <button className="flex items-center text-lg md:text-xl rounded-full py-2 px-9 transition duration-500 ease-in-out bg-red-300 hover:bg-red-400 transform hover:scale-110 hover:shadow-2xl hover:text-blueGray-100 dark:bg-blue-200 dark:hover:bg-blue-300 dark:text-gray-900">
                  Enter&nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </a>
            </Link>
          </div>
        </article>
      </div>
    </>
  )
}

export default Landing