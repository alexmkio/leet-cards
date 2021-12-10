import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useTheme } from '../context/ThemeContext'
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'

const Landing: NextPage = () => {
  const { darkMode } = useTheme()
  let interfaceColor = darkMode ? "black" : "#67E8F9"

  return (
    <>
      <Head>
        <title>Leet Cards - A flash card application to help software engineers study</title>
        <meta name="description" content="Leet Cards - A flash card application to help software engineers study" />
        <meta name="theme-color" content={interfaceColor} />
      </Head>

      <div className="flex justify-center px-4 py-8">
        <article className="w-11/12 sm:w-9/12 md:w-8/12 lg:w-7/12 flex flex-col">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center dark:text-blue-100">
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
                <button className="flex items-center text-lg md:text-xl rounded-full py-2 px-9 transition duration-500 ease-in-out bg-red-300 hover:bg-red-400 hover:scale-110 hover:shadow-2xl hover:text-blueGray-100 dark:bg-blue-200 dark:hover:bg-blue-300 dark:text-gray-900">
                  <p>Enter</p>
                  <ArrowNarrowRightIcon className="h-12 w-12 ml-2 animate-pulse"/>
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