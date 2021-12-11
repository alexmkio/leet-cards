import Head from 'next/head'
import type { NextPage } from 'next'
import { useState } from 'react';
import { useDeck } from "../context/DeckContext";
import { postData } from '../utils/apiCalls';
import { useTheme } from '../context/ThemeContext'
import { CheckIcon, DocumentAddIcon } from '@heroicons/react/outline'

const Add: NextPage = () => {
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');
  const [stack, setStack] = useState<string>('');
  const [categories, setCategories] = useState<string[]>([]);
  const [category, setCategory] = useState<string>('');
  const [formError, setFormError] = useState('');
  const { addCard } = useDeck();
  const { darkMode } = useTheme()
  let interfaceColor = darkMode ? "black" : "#A7F3D0"

  let options = categories.map(category => {
    return (
      <label key={category} className="flex items-center pr-8 py-1">
        <input type="checkbox" value={category} checked onChange={event => removeCategory(event)} />
        <span className="text-lg pl-1">{category}</span>
      </label>
    )
  })

  const removeCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    let currentCategories = categories
    let ind = categories.indexOf(event.target.value)
    currentCategories.splice(ind, 1)
    setCategories([...currentCategories])
  }

  const addCategory = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setFormError('')
    if (!category) {
      setFormError('Sorry, add a category first!')
    } else if (!categories.includes(category)) {
      setCategories([...categories, category])
    }
    setCategory('')
  }

  const postFlashCard = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (question && answer && stack && categories.length) {
      let response = await postData({
        question: question,
        answer: answer.replace(/\r?\n/g, '<br>'),
        side: stack,
        categories: categories
      })
      //shore up conditional logic here: should be = if success (not error) do this
      if (response.id) {
        addCard(response)
      }
      setQuestion('')
      setAnswer('')
      setStack('')
      setCategories([])
      setFormError('')
    } else {
      // console.log(event.cancelable)
      setFormError('Sorry, add a category first!')
    }
  }

  return (
    <>
      <Head>
        <title>Leet Cards - Create A Flash Card</title>
        <meta name="description" content="Leet Cards - Create A Flash Card" />
        <meta name="theme-color" content={interfaceColor} />
      </Head>
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl pt-8 text-center capitalize dark:text-blue-100">Create a new flash card</h2>
      <div className="flex justify-center">
        <form className="w-11/12 sm:w-7/12 md:w-6/12 lg:w-5/12 flex flex-col">

          <label className="text-lg pt-4 md:pt-8" htmlFor="question">Question:</label>
          <textarea
            className="w-full rounded-lg shadow-sm text-lg border-gray-300 focus:border-red-300 focus:ring focus:ring-red-300 focus:ring-opacity-50 dark:focus:border-green-200 dark:focus:ring-green-200 dark:text-gray-900"
            id="question"
            value={question}
            onChange={(event)=> setQuestion(event.target.value)}
            required
          />

          <label className="text-lg pt-4 md:pt-8" htmlFor="answer">Answer:</label>
          <textarea
            className="w-full rounded-lg shadow-sm text-lg border-gray-300 focus:border-red-300 focus:ring focus:ring-red-300 focus:ring-opacity-50 dark:focus:border-green-200 dark:focus:ring-green-200 dark:text-gray-900"
            id="answer"
            value={answer}
            onChange={(event)=> setAnswer(event.target.value)}
            required
          ></textarea>

          <label className="text-lg pt-4 md:pt-8" htmlFor="stack">Engineering Stack:</label>
          <select
            className="w-full rounded-lg shadow-sm text-lg border-gray-300 focus:border-red-300 focus:ring focus:ring-red-300 focus:ring-opacity-50 dark:focus:border-green-200 dark:focus:ring-green-200 dark:text-gray-900"
            id="stack"
            value={stack}
            onChange={(event)=> setStack(event.target.value)}
            required
          >
            <option value="" disabled>Choose the stack</option>
            <option value="FE">Front-End</option>
            <option value="BE">Back-End</option>
          </select>

          <fieldset>
            <legend className="text-lg pt-4 md:pt-8">Categories:</legend>
            <div className="flex flex-wrap">
              {options}
            </div>
          </fieldset>

          <div className="flex justify-between">
            <input
              type="text"
              className="w-1/2 rounded-lg shadow-sm text-lg border-gray-300 focus:border-red-300 focus:ring focus:ring-red-300 focus:ring-opacity-50 dark:focus:border-green-200 dark:focus:ring-green-200 dark:text-gray-900"
              id="category"
              value={category}
              placeholder="ex: HTML"
              onChange={event => setCategory(event.target.value)}
            />
            <button onClick={(event) => addCategory(event)} className="flex items-center text-md md:text-lg rounded-full py-3 px-9 transition duration-500 ease-in-out bg-red-300 hover:bg-red-400 hover:scale-110 hover:shadow-2xl hover:text-blueGray-100 dark:bg-teal-200 dark:hover:bg-teal-300 dark:text-gray-900">
              <p>Add category</p>
              <CheckIcon className="h-6 w-6 ml-2"/>
            </button>
          </div>
          <p className="text-red-500 dark:text-pink-300">{formError}</p>

          <div className="flex justify-center py-6 md:py-12">
            <button onClick={(event) => postFlashCard(event)} className="flex items-center text-lg md:text-xl rounded-full py-3 px-9 transition duration-500 ease-in-out bg-red-300 hover:bg-red-400 hover:scale-110 hover:shadow-2xl hover:text-blueGray-100 dark:bg-blue-200 dark:hover:bg-blue-300 dark:text-gray-900">
              <p>Create card</p>
              <DocumentAddIcon className="h-6 w-6 ml-2"/>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Add