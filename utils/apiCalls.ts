import { PostObject } from "../types"

export const getData = async () => {
  let response = await fetch(`https://leet-cards.herokuapp.com/cards`)
  return checkForError(response)
}

export const postData = async (postObject: PostObject) => {
  let response = await fetch(`https://leet-cards.herokuapp.com/cards`, {
    method: 'POST',
    body: JSON.stringify(postObject),
    headers: {
      'Content-type': 'application/json'
    }
  })
  return checkForError(response)
}

export const deleteData = (id: Number) => {
  return fetch(`https://leet-cards.herokuapp.com/cards/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    }
  })
}

const checkForError = async (response: Response) => {
  if (!response.ok) {
    throw new Error(response.status.toString())
  } else {
    let data = await response.json()
    return data
  }
}