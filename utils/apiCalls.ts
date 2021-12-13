import { PostObject, PutObject } from "../types"

// const host = process.env.NEXT_PUBLIC_VERCEL_ENV ? 'https://leet-cards.herokuapp.com/' : 'http://localhost:6565/'
// const apiKey = process.env.NEXT_PUBLIC_VERCEL_ENV ? process.env.API_KEY : process.env.NEXT_PUBLIC_API_KEY
const host = 'https://leet-cards.herokuapp.com/'
const apiKey = "4hrKQWyy42iI"

const headers: HeadersInit = {
  'apiKey': apiKey as string
}

const fullHeaders: HeadersInit = {
  'Content-type': 'application/json',
  'apiKey': apiKey as string
}

export const getData = async (path: String) => {
  const url = `${host}${path}`
  const opts: RequestInit = {
    method: 'GET',
    headers
  }
  let response = await fetch(url, opts)
  return checkForError(response)
}

export const postData = async (postObject: PostObject) => {
  const url = `${host}cards`
  const opts: RequestInit = {
    method: 'POST',
    body: JSON.stringify(postObject),
    headers: fullHeaders
  }
  let response = await fetch(url, opts)
  return checkForError(response)
}

export const putData = async (path: Number | undefined, putObject: PutObject) => {
  const url = `${host}cards/${path}`
  const opts: RequestInit = {
    method: 'PUT',
    body: JSON.stringify(putObject),
    headers: fullHeaders
  }
  let response = await fetch(url, opts)
  return checkForError(response)
}

export const deleteData = async (id: Number) => {
  const url = `${host}cards/${id}`
  const opts: RequestInit = {
    method: 'DELETE',
    headers: fullHeaders
  }
  let response = await fetch(url, opts)
  return checkForError(response)
}

const checkForError = async (response: Response) => {
  if (!response.ok) {
    throw new Error(response.status.toString())
  } else {
    let data = await response.json()
    return data
  }
}