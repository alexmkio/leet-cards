export const getData = async () => {
  let response = await fetch(`https://leet-cards.herokuapp.com/cards`)
  return checkForError(response)
}

export const postData = async (postObject) => {
  let response = await fetch(`https://leet-cards.herokuapp.com/cards`, {
    method: 'POST',
    body: JSON.stringify(postObject),
    headers: {
      'Content-type': 'application/json'
    }
  })
  return checkForError(response)
}

// export const deleteApiData = (id) => {
//   return fetch(`https://leet-cards.herokuapp.com/cards/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-type': 'application/json'
//     }
//   })
// }

const checkForError = async (response) => {
  if (!response.ok) {
    throw new Error(response)
  } else {
    let data = await response.json()
    return data
  }
}