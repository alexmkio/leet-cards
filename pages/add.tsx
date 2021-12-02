import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import { useDeck } from "../context/DeckContext";
import { postData } from '../utils/apiCalls';

const Add: NextPage = () => {
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');
  const [stack, setStack] = useState<string>('');
  const [categories, setCategories] = useState<string[]>([]);
  const [category, setCategory] = useState<string>('');
  const { addCard } = useDeck();

  const addCategory = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setCategories([...categories, category])
    setCategory('')
  }

  const postFlashCard = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let response = await postData({
      question: question,
      answer: answer,
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
  }

  return (
    <>
      <Head>
        <title>Leet Cards - Create A Flash Card</title>
        <meta name="description" content="Leet Cards - Create A Flash Card" />
        <meta name="theme-color" content="#A7F3D0" />
      </Head>
      
      <h2 className="text-6xl font-semibold py-12 text-center capitalize">Create a new flash card</h2>
      <div className="flex justify-center">
        <form className="w-6/12 flex flex-col" onSubmit={postFlashCard}>

          <label className="text-lg" htmlFor="question">Question:</label>
          <textarea
            className="w-full rounded-lg shadow-sm text-lg border-gray-300 focus:border-red-300 focus:ring focus:ring-red-300 focus:ring-opacity-50"
            id="question"
            value={question}
            placeholder="Placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder"
            onChange={(event)=> setQuestion(event.target.value)}
            required
          />

          <label className="text-lg" htmlFor="answer">Answer:</label>
          <textarea
            className="w-full rounded-lg shadow-sm text-lg border-gray-300 focus:border-red-300 focus:ring focus:ring-red-300 focus:ring-opacity-50"
            id="answer"
            value={answer}
            placeholder="Placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder"
            onChange={(event)=> setAnswer(event.target.value)}
            required
          ></textarea>

          <label className="text-lg" htmlFor="stack">Engineering Stack:</label>
          <select
            className="w-full rounded-lg shadow-sm text-lg border-gray-300 focus:border-red-300 focus:ring focus:ring-red-300 focus:ring-opacity-50"
            id="stack"
            value={stack}
            onChange={(event)=> setStack(event.target.value)}
            required
          >
            <option value="FE">Front-End</option>
            <option value="BE">Back-End</option>
          </select>

          <label className="text-lg" htmlFor="category">Categories:</label>
          <label>
            <input type="checkbox" />
            <span className="text-lg">JavaScript</span>
          </label>
          <label>
            <input type="checkbox" />
            <span className="text-lg">TypeScript</span>
          </label>
          <label>
            <input type="checkbox" />
            <span className="text-lg">HTML</span>
          </label>
          <label>
            <input type="checkbox" />
            <span className="text-lg">CSS</span>
          </label>
          <label>
            <input type="checkbox" />
            <span className="text-lg">React</span>
          </label>
          <input
            type="text"
            className="w-full rounded-lg shadow-sm text-lg border-gray-300 focus:border-red-300 focus:ring focus:ring-red-300 focus:ring-opacity-50"
            id="category"
            value={category}
            placeholder="Placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder"
            onChange={event => setCategory(event.target.value)}
          />
          {categories}

          <div className="flex justify-center pt-8">
            <button onClick={event => addCategory(event)} className="flex items-center text-xl rounded-full py-3 px-9 transition duration-500 ease-in-out bg-red-300 hover:bg-red-400 transform hover:scale-110 hover:shadow-2xl hover:text-blueGray-100">
              Add category&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </div>
          <div className="flex justify-center pt-8">
            <button type="submit" className="flex items-center text-xl rounded-full py-3 px-9 transition duration-500 ease-in-out bg-red-300 hover:bg-red-400 transform hover:scale-110 hover:shadow-2xl hover:text-blueGray-100">
              Create card&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Add